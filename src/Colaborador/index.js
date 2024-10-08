import "./Colaborador.css";

export default function colaborador(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="colaborador">
          <div
            className="cabecalho"
            style={{ backgroundColor: props.corDeFundo }}
          >
            <img src={props.imagem} alt={props.nome} />
          </div>
          <div className="rodape">
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
