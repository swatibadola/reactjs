import './App.css';

function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);

  return (
    <>
      <h1 className=' bg-zinc-600 text-5xl text-center text-white'>A blog with appwrite</h1>
    </>
  );
}

export default App;
 