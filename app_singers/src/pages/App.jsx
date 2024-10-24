import { Link } from "react-router-dom"

const styles = {
  margin: '10px auto',
  marginLeft: '20px'
}

const App = () => {
  return (
    <>
      <div>
          <Link style={styles} to={'/singers'}>Singer List</Link>
          <Link style={styles} to={'/singers/new'}>Create Singer</Link>
      </div>
    <div>App</div>
    </>
  )
}

export default App