import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {
  return (
    <>
      <div className="campo-listasuspensa">
        <label>{props.label}:</label>
        <select
          value={props.valor}
          onChange={(event) => props.aoAlterado(event.target.value)}
          required={props.obrigatorio}
        >
          {/* Opção padrão vazia */}
          <option value="" disabled>
            Selecione uma opção
          </option>

          {/* Opções dinâmicas */}
          {props.itens.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
