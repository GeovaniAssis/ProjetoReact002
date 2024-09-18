import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="faixaAzul">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 flx-center-hrz">
                <img src="./assets/img/fb.png" alt="Ícone Facebook"></img>
                <img src="./assets/img/ig.png" alt="Ícone Instagram"></img>
                <img src="./assets/img/tw.png" alt="Ícone Twitter"></img>
              </div>
              <div className="col-lg-4 flx-center-hrz-center">
                <img src="./assets/img/logo.png" alt="Logo Organo"></img>
              </div>
              <div className="col-lg-4 flx-center-hrz-rgt">
                <h2>
                  Curso React:
                  <br />
                  Alura
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="faixaVerde">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  © Copyright 2024 - Geovani Assis Pereira - Todos os direitos
                  reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
