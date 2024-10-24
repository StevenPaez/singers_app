import { Link, redirect, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const styles = {
  margin: '20px auto',
}

const Singer = () => {
  const {id} = useParams();
  const [loader, setLoader] = useState(false)
  const [singer, setSinger] = useState({})

  const getSinger = async () => {
    const singer = await axios.get(`http://127.0.0.1:3000/api/singers/${id}`);
    setSinger(singer.data);
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    getSinger();
  }, [])

  const onUpdate = async () => {
    try {
      setLoader(true);
      const response = await axios.put(`http://127.0.0.1:3000/api/singers/${id}`, singer)
      setSinger(response.data)
      setLoader(false);
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async () => {
    try {
      setLoader(true);
      await axios.delete(`http://127.0.0.1:3000/api/singers/${id}`);
      // TODO Rediret
      return redirect('/singers');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <div>
            <Link to={'/singers'}>Singer List</Link>
        </div>
        <h1>Singer</h1>

        {loader
        ? <h2>Loading...</h2>
        :
        <div>
          <p>Name:</p>
          <input type="text"
            value={singer.name}
            onChange={(e) => setSinger({...singer, name: e.target.value})}
          />
          <p>Genre:</p>
          <input type="text"
            value={singer.genreId}
            onChange={(e) => setSinger({...singer, genreId: e.target.value})}
          />
          <p>Age:</p>
          <input type="text"
            value={singer.age}
            onChange={(e) => setSinger({...singer, age: Number(e.target.value)})}
          />
          <div style={styles}>
            <button onClick={onUpdate}>Update</button>
            <button style={{marginLeft: '10px'}} onClick={onDelete}>Delete</button>
          </div>
        </div>
        }

    </>
  )
}

export default Singer