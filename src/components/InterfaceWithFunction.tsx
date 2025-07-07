// basic click event handler in React
// basic click event handler in React
import { useState, type MouseEvent } from "react";
import "../props.css"; // getting overridden by the global styles? -where? TODO

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;

}

function InterfaceWithFunction({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>

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
              onSelectItem(item);


            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default InterfaceWithFunction;
