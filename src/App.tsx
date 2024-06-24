import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Accordion from "./Components/Accordion";
import DropDown from "./Components/DropDown";
import ImageSlider from "./Components/ImageSlider";
import PillTabs from "./Components/PillTabs";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let accitems = ["Content No. 1", "Content No. 2", "Content No. 3"];
  let drpitems = ["Option No. 1", "Option No. 2", "Option No. 3"];
  let headings = ["Heading No. 1", "Heading No. 2", "Heading No. 3"];
  let imgitems = [
    "https://plus.unsplash.com/premium_photo-1667862241971-e1f08f51dd07?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633164442172-dc4147f21954?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  let tabtitles = ["Tab title No. 1", "Tab title No. 2", "Tab title No. 3"];
  let tabcontents = [
    "Tab content No. 1",
    "Tab content No. 2",
    "Tab content No. 3",
  ];
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
            <h4>Accordion Component</h4>
            <Accordion accitems={accitems} headings={headings}></Accordion>
          </div>
        </div>

        <div className="row">
          <div className="col  mx-auto p-2 text-center">
            <h4>DropDown Component</h4>
            <DropDown accitems={drpitems}></DropDown>
          </div>
          <div className="col mx-auto p-2 text-center">
            <h4>Image Carousel Component</h4>
            <ImageSlider imgitems={imgitems}></ImageSlider>
          </div>
          <div className="col">
            <h4>Toggleable /Dynamic Tabs Component</h4>
            <PillTabs
              tabtitles={tabtitles}
              tabcontents={tabcontents}
            ></PillTabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
