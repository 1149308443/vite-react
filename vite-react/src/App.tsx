/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect, useRef } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../../wcs/esmodule.js'



function App() {
  const [count, setCount] = useState(0)
  // const el = useRef()

  // useEffect(()=>{
  //  el.current && el.current.addEventListener('changeEvent', (e: any)=>{
  //   console.log(222, e)
  //  })
  // }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <components-div></components-div> */}
      {/* <cl-input  placeholder="欢迎使用web输入组件" value={'666'} ref={el}></cl-input> */}
    </>
  )
}

export default App
