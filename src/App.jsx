import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("");


   const URL = "https://jsonplaceholder.typicode.com/posts"
  // ? using Promises
  // useEffect(()=>{
  //     axios.get(URL)
  //     .then(res => setMyData(res.data))
  //     .catch((error) => setIsError(error.message))

  // }, [])


  const getApiData = async()=>{
    
    try {
      const res = await axios.get(URL)
      setMyData(res.data)
    } catch (error) {
      //  console.log(error.message)
      setIsError(error.message)
    }
  }

// ? using async  await

useEffect(()=>{
  getApiData();
},[])

  return (
    <>
      <h1>axios practice</h1>
      {isError !== " " &&   <h2>{isError}</h2> }

      <div className="grid">
      {
        myData.slice(0, 16).map((post)=>{
          const {id, title, body}= post;
          return(
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default App
