//Child Component to Display Cards in Hand
export default function Hand(props){
    const handCards = props.cards.map((card, index) => <li data-index={index} onClick={props.onClick} key={card.code}>{card.code}</li>);
    return(
      <div id={props.name}>
        <ul>{handCards}</ul>
      </div>
    )
  }