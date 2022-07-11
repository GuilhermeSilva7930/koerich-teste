import "./App.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <main className="container box">
      <div className="row">
        <div className="col-12 col-sm item">
          <Link to="/atividade001" className="link">Atividade001</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade002" className="link">Atividade002</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade003" className="link">Atividade003</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade004" className="link">Atividade004</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade005" className="link">Atividade005</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade006" className="link">Atividade006</Link>
        </div>
        <div className="col-12 col-sm item">
          <Link to="/atividade007" className="link">Atividade007</Link>
        </div>
      </div>
    </main>
  )
}

export default App;