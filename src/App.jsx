import Routing from './services/Routing'
import cl from './App.module.css'
import Slider from './components/slider/Slider'


function App() {

  return (
    <>
      <Slider />
      <div className={cl.container}>
        <Routing />
      </div>
    </>
  )
}

export default App
