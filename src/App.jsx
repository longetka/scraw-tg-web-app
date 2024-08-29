import './App.css'
const tg = window.Telegram.WebApp

function App() {
    const onClose = () => {
        tg.close()
    }

  return (
    <div>
        Work
      <button onClick={onClose}>Закрыть</button>
    </div>
    )
}

export default App
