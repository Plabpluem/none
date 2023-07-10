import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './component/post'
import PostList from './component/postlist'
import MainHeader from './Ui/MainHead'

function App() {
  const [modalVisible,setModal] = useState(false)

  const openModalHandler = () => {
    setModal(true)
  }
  const closeModalHandler = () => {
    setModal(false)
  }

  return (
    <>
    <MainHeader onOpen={openModalHandler} />
    <main>
      <PostList onClose={closeModalHandler} showModal={modalVisible} /> 
    </main>
    </>
  )
}

export default App
