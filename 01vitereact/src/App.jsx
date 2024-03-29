
import Demo from "./demo"

function App() {
  const username = "Swati aur Code"

  return (
    <>
    <Demo/>
    <h1>Welcome to my platform username</h1>
    <h1>Welcome to my platform {username}</h1> 
    {/* {username} is called an evaluated expression */}
    </>

  )
}

export default App
