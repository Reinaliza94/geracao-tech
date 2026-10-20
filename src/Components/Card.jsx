const Card = ({Titulo, categoria, parágrafo}) => { 
    return (
        <div style={{border: "1px solid white"}}>
            <h3> {Titulo}</h3>
            <h4> {categoria} </h4>
            <p> {parágrafo}</p>
        </div>
      );
}
 
export default Card;