import axios from 'axios';
import '../styles/App.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  display: 'inline-block',
  margin: '10px auto',
}

function Singers() {
  const [singers, setSingers] = useState([])
  const [loader, setLoader] = useState(false)

  const getSingers = async () => {
    const singers = await axios.get('http://127.0.0.1:3000/api/singers')
    setSingers(singers.data)
    setLoader(false)
  }

  useEffect(() => {
    setLoader(true)
    getSingers()
  }, [])

  return (
    <>
      <div>
        <Link to={'/singers/new'}>Create Singer</Link>
      </div>
      <h1>Singers</h1>
      {loader
        ? <h2>Loading...</h2>
        :
        <ul>
        {singers.map(singer => (
          <div key={singer.id}>
            <Link style={styles} to={`/singers/${singer.id}`}>{singer.name}</Link>
          </div>
        ))}
      </ul>
      }
    </>
  )
}

export default Singers
