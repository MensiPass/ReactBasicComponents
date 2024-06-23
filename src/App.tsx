import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Accordion from "./Components/Accordion";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let accitems = ["text one", "text two"];
  let headings = ["One acc headding", "Two acc headding"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    /* <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>*/
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Button was clicked so this <span>alert</span> apears
        </Alert>
      )}
      <Accordion accitems={accitems} headings={headings}></Accordion>
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </>
  );
}

export default App;
