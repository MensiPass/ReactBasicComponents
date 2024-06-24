import { Fragment, useState } from "react";
import { MouseEvent } from "react";

//pass objct with two properties
//{items:[], heading: string}

//we use interface

interface Props {
  items: string[];
  heading: string;
  //func that takes item of type string ad is void, (item:string)=>void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0;
  //hook, state hook, tell react that this component can have data that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState(-1);
  // arr[0]; //variable(selectedIndex)
  // arr[1]; //updater function
  //items = [];
  //const message = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };
  /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No items found.</p>
      </>
    );
*/
  //event handler, click event
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h3>{heading}</h3>

      {items.length === 0 && <p>No items found</p>}
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
    </Fragment>
  );
}
export default ListGroup;
