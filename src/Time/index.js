import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <>
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 style={{ color: props.corPrimaria }}>{props.nome}</h3>
            </div>
          </div>

          <div className="row">
            {props.colaboradores.map((colaborador) => (
              <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default Time;
