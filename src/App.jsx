import { useContext, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import { DataContext } from './context/ApiContext'

function App() {

  const {fetchData} = useContext(DataContext);

  useEffect(() => {
    fetchData();
  },[fetchData]);

 
  
  return (
    <div className='relative bg-black overflow-hidden' >
      <Layout/>
    </div>
  )
}

export default App
