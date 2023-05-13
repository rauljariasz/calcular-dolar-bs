import { usePrecios } from './hooks/usePrecios'
import './App.css'

function App() {
  const { date, BCV, DT } = usePrecios()

  return (
    <>
      <main>
        <h1>Dolar Venezuela</h1>
        <p>{date}</p>
        <section>
          <h3>Precio BCV</h3>
          <p>{BCV}</p>
        </section>
        <section>
          <h3>Precio DolarToday</h3>
          <p>{DT}</p>
        </section>
      </main>
    </>
  )
}

export default App
