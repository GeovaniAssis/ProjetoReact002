import "./CampoTexto.css";
export default function CampoTexto(props) {
  const { label, obrigatorio, placeholder } = props;

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <>
      <div className="campo-texto">
        <label>{label}:</label>
        <input
          value={props.valor}
          onChange={aoDigitado}
          required={obrigatorio}
          placeholder={placeholder}
        ></input>
      </div>
    </>
  );
}
