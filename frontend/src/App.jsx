import "./App.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <main className="container box">
      <Link to="/atividade001" className="link item">Atividade001</Link>
      <Link to="/atividade002" className="link item">Atividade002</Link>
      <Link to="/atividade003" className="link item">Atividade003</Link>
      <Link to="/atividade004" className="link item">Atividade004</Link>
      <Link to="/atividade005" className="link item">Atividade005</Link>
      <Link to="/atividade006" className="link item">Atividade006</Link>
      <Link to="/atividade007" className="link item">Atividade007</Link>
    </main>
  )
}

export default App;