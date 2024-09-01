import {useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { useTelegram } from './hooks/useTelegram'

function App() {
    var { onAppReady, appExpand } = useTelegram()

    useEffect(() => {
        onAppReady()
        appExpand()
    })
    
  return (
    <div className='app_container'>
      <Header/>
    </div>

    )
}

export default App
