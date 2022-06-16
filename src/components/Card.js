//Child Component for individual card functionality
export function Card(props){
    const self = props.parent;
    return(
      <li value={props.value}>{props.code}</li>
    )
  
  }