import "./Botao.css";
export default function botao(props) {
  return (
    <>
      <div className="campo-botao">
        <button>{props.children}</button>
      </div>
    </>
  );
}
