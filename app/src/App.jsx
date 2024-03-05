import { useState } from 'react'
import './App.css'
import { createPortal } from 'react-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1);
    toast('Opps ! Count Decremented!');
  }
  const increment = () => {
    setCount(count - 1);
    toast('🦄 Wow Count Incremented!');
  }
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>React Create Portal</h1>
      <p>The below toaster is kept outside the virtual dom using create Portal we can directly access the Real DOM</p>
      <div className="card" style={{display:"flex" , justifyContent:"center" , gap:"25px"}}>
        <button style={{backgroundColor:"red"}} onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button style={{backgroundColor:"green"}} onClick={increment}>
          +
        </button>
      </div> 
      {
        createPortal(
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            limit={4}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          /> ,
          document.getElementById('portal')
        )
      }
    </>
  )
}

export default App
