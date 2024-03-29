import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div> 
      <h1>Welcome to Sapno ka Mela</h1>
    </div>

  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit GoogleBaba'
// }


const AnotherElement = (
  <a href="https://google.com" target='_blank'>You are visiting GoogleBaba</a>
)

const anotherUser = "Web Developer" 


const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Press me to redirect to GoogleBaba',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp/> //Here MyApp is a function.
    // MyApp()


    
    ReactElement
    // AnotherElement
    // ReactElement //As ReactElement is an object therefore, it is accessed directly.
    // <ReactElement/>
)
