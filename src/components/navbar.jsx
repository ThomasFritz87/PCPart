
import { Link, useNavigate } from "react-router-dom"
import './navbar.css'

function Navbar(props) {

  return (
    <nav>
      <h1>PC Parts</h1>
      
      <div className="topbar">
        {(props.category == "Home") ? <Link className="select" to="/home">Home PC</Link> : <Link className="link" to="/home">Home PC</Link>}
        {(props.category == "Office") ? <Link className="select" to="/office">Office PC</Link> : <Link className="link" to="/office">Office PC</Link>}
        {(props.category == "Gaming") ? <Link className="select" to="/gaming">Gaming PC</Link> : <Link className="link" to="/gaming">Gaming PC</Link>}
        {(props.category == "Highend") ? <Link className="select" to="/highend">Highend PC</Link> : <Link className="link" to="/highend">Highend PC</Link>}
      </div>

      <div className="sidebar">
        {(props.category == "Prozessor") ? <Link className="select" to="/processor">Prozessor</Link> : <Link className="link" to="/processor">Prozessor</Link>}
        {(props.category == "Grafikkarte") ? <Link className="select" to="/graphics">Grafik</Link> : <Link className="link" to="/graphics">Grafik</Link>}
        {(props.category == "Mainboard") ? <Link className="select" to="/mainboard">Mainboard</Link> : <Link className="link" to="/mainboard">Mainboard</Link>}
        {(props.category == "Arbeitsspeicher") ? <Link className="select" to="/ram">Arbeitsspeicher</Link> : <Link className="link" to="/ram">Arbeitsspeicher</Link>}
        {(props.category == "Festplatte") ? <Link className="select" to="/ssd">Festplatte</Link> : <Link className="link" to="/ssd">Festplatte</Link>}
        {(props.category == "Kühlung") ? <Link className="select" to="/cooling">Kühlung</Link> : <Link className="link" to="/cooling">Kühlung</Link>}
        {(props.category == "Gehäuse") ? <Link className="select" to="/case">Gehäuse</Link> : <Link className="link" to="/case">Gehäuse</Link>}
        {(props.category == "Netzteil") ? <Link className="select" to="/power">Netzteil</Link> : <Link className="link" to="/power">Netzteil</Link>}
        {(props.category == "Monitor") ? <Link className="select" to="/monitor">Monitor</Link> : <Link className="link" to="/monitor">Monitor</Link>}
        {(props.category == "Zubehör") ? <Link className="select" to="/accessory">Zubehör</Link> : <Link className="link" to="/accessory">Zubehör</Link>}
      </div>
    </nav>
  )
}

export default Navbar