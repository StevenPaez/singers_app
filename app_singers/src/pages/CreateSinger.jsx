import axios from "axios"
import { useState } from "react"
import {Link, redirect} from "react-router-dom"

const styles = {
  display: 'block',
  margin: '10px auto',
}

const initState = {
  name: '',
  genreId: '',
  age: 0,
}

const CreateSinger = () => {
  const [singer, setSinger] = useState(initState);
  const [loader, setLoader] = useState(false)

  const onChangeName = (e) => {
    setSinger({
      ...singer,
      name: e.target.value
    })
  }

  const onChangeGenreId = (e) => {
    setSinger({
      ...singer,
      genreId: e.target.value
    })
  }

  const onChangeAge = (e) => {
    setSinger({
      ...singer,
      age: Number(e.target.value)
    })
  }

  const onCreate = async () => {
    setLoader(true);
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/singers', singer);
      return redirect(`/singers/${response.data.id}`);
      // TODO Rediret
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <Link to={'/singers'}>Singer List</Link>
      </div>
      <h1>New Singer</h1>
      <input style={styles} type="text" placeholder="Singer Name" onChange={onChangeName}/>
      <input style={styles} type="text" placeholder="Singer Genre" onChange={onChangeGenreId}/>
      <input style={styles} type="text" placeholder="Singer Age" onChange={onChangeAge}/>
      <button
        onClick={onCreate}
      >
        Create
      </button>
      {loader && <h2>Loading...</h2>}
    </>
  )
}

export default CreateSinger