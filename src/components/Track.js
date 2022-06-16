//Child Component to Display Cards on Track
export default function Track(props){
    const self = this;
    const listCards = props.cards.map((card, index) => <li data-index={index} value={card.value} key={card.code}>{card.code}</li>);
    //const listCards = props.cards.map((card, index) => <Card data-index={index} key={card.code} value={card.value} code={card.code} />);
    return(
        <a value={props.value} onClick={props.onClick} id={props.name}>
          <h2>{props.name}</h2>
          <p>{props.value}</p>
          <p>{props.total}</p>
          <ul>{listCards}</ul>
        </a>
    )
  }