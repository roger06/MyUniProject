// basic click event handler in React
// basic click event handler in React
import { useState, type MouseEvent } from "react";

function ClickEventHandlerActive() {
  let items = ["click", "event", "handler", "stuff"];
 

const [selectedIndex, setSelectedIndex] = useState(-1);




  return (
    <>
      <h2>Click event - with active state</h2>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item" 
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClickEventHandlerActive;
