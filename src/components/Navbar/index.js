import {Link} from "react-router-dom";

export function Navbar(){
    return(
        <>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" style={{ textDecoration: "none" }}to="/">CatchAPet</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link text-light" to="/pets/dog">
                  Cães
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/pets/cat">
                  Gatos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/cadastro-pets">
                  Cadastre um novo pet
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-light" to="/faleconosco">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
}