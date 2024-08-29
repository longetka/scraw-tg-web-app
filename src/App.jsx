import './App.css'
import Header from './components/Header/Header.jsx'
const tg = window.Telegram.WebApp

function App() {
    tg.ready()
    //const onClose = () => {
        //tg.close()
    //}

  return (
    <div className='app_container'>
      <Header/>
    </div>

    )
}

export default App
