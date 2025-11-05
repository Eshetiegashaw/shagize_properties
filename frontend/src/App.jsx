import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFrappeGetDocList, FrappeProvider, useFrappeAuth } from 'frappe-react-sdk'

function App() {
  const [count, setCount] = useState(0)
  const { login, logout, currentUser, getUserCookie } = useFrappeAuth();


  return (
    <>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser}!</p>
          <button onClick={logout}>Logout</button>


          <TestComponent />
        </div>


      ) : (
        <div>
          <button onClick={() => login({
            username: 'Administrator',
            password: 'admin',
          })}>Login as Admin</button>
        </div>
      )}

    </>
  )
}

const TestComponent = () => {
  const { data, error, isLoading } = useFrappeGetDocList('User')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log(data);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.name}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}



export default App
