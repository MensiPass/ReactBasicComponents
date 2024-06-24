import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Accordion from "./Components/Accordion";
import DropDown from "./Components/DropDown";
import ImageSlider from "./Components/ImageSlider";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let accitems = ["Content No. 1", "Content No. 2", "Content No. 3"];
  let drpitems = ["Option No. 1", "Option No. 2", "Option No. 3"];
  let headings = ["Heading No. 1", "Heading No. 2", "Heading No. 3"];
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
      <div className="container text-center">
        <div className="row">
          <h1 className=" mx-auto p-2 text-center"> Main UI components</h1>
          <div className="col">
            <ListGroup
              items={items}
              heading="List Group Component"
              onSelectItem={handleSelectItem}
            />
          </div>

          <div className="px-3 mx-2 mt-5 col">
            <h4>Button Click Alert Component</h4>
            {alertVisible && (
              <Alert onClose={() => setAlertVisibility(false)}>
                Button was clicked so this <span>alert</span> apears
              </Alert>
            )}
            <Button onClick={() => setAlertVisibility(true)}>
              Click for alert!
            </Button>
          </div>

          <div className="col mx-auto p-2 text-center">
            <h3>Accordion Component</h3>
            <Accordion accitems={accitems} headings={headings}></Accordion>
          </div>
        </div>

        <div className="row">
          <div className="col  mx-auto p-2 text-center">
            <h3>DropDown Component</h3>
            <DropDown accitems={drpitems}></DropDown>
          </div>
          <div className="col mx-auto p-2 text-center">
            <h3>Image Carousel Component</h3>
            <ImageSlider></ImageSlider>
          </div>
          <div className="col">
            <h3>Tabs Component</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
