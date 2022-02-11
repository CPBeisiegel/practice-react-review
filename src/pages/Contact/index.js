import { Link } from "react-router-dom";

export function Contact() {
  return (
    /* Sempre lembrar de colocar as duas {{}} para inserir elementos de style dentro do jsx */
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Catch A Pet</h5>
        <h6 className="card-subtitle mb-2 text-muted">Adote um bichinho</h6>
        <p className="card-text">Somos uma ong de adoção de pets.</p>
        <p>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+55999999999&text=Quero adotar um pet!`}
            rel="noreferrer"
          >
            Nosso WhatsApp
          </a>
        </p>
        <p>
        {/* Usamos o link as inves da tag a para colocar os elementos na rota designada. Sempre lembrar de colocar o to com a rota que foi definida no App.js  */}
          <Link to="/pets/dog" className="card-link">
            Cães para adoção
          </Link>
        </p>
        <p>
          <Link to="/pets/cat" className="card-link">
            Gatos para adoção
          </Link>
        </p>
      </div>
    </div>
  );
}