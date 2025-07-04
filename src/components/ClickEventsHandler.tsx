// basic click event handler in React
// basic click event handler in React
import type { MouseEvent } from "react";

function ClickEventHandler() {

  let items = ["click", "event", "handler", "stuff"];
//   items = [];

const handleClick = (event: MouseEvent) => console.log(event);

  return (

    <>
    <h2>Click event - with listerner</h2>

   

    <ul className="list-group">
        {items.map((item, index) =>  <li className="list-group-item" key={item} 
        onClick={ (handleClick) =>  console.log('you clicked me ' + item + " " + index +  " event = " + event) }   
        >{item}</li>)}

    </ul>
    </>
  );
}

export default ClickEventHandler;
