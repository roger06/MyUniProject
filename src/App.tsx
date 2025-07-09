// this is the main entry point of the application
// import Message from "./Message";
import ListGroup from "./components/ListGroup";

import ListGroupConditional from "./components/ListGroupConditional";
import ListGroupConditionalFunction from "./components/ListGroupConditionalFunction";
import ClickEvent from "./components/ClickEvents";
import ClickEventHandler from "./components/ClickEventsHandler";
import ClickEventHandlerActive from "./components/ClickEventsHandlerActive";
import Counter from "./components/Counter";
import Interface from "./components/Interface";
import InterfaceWithFunction from "./components/InterfaceWithFunction";

import Alert from "./components/Alert";
import ButtonAlert from "./components/ButtonAlert";
import { useState } from "react";
// Importing an image
import hadleyim from "./img/hadley-henry-itchenor.jpg"; // Adjust the path as necessary
// seems very pedantic about the ./


function App() {
  // moved from components/Interface.tsx

  const [alertVisible, setAlertVis] = useState(false);

  
  let items = [
    "Copland",
    "Phobos",
    "Beneteau",
    "Moody",
    "Dufour",
    "Jeanneau",
    "X-Yachts",
    "Bavaria",
    "Lagoon",
    "Catana",
  ];

  const handleSelectItem = (item: string) => {
    console.log;
  };

  function handleClick() {
    console.log("Clicked" + alertVisible); 

    if (alertVisible) {
      setAlertVis(false);   
  }
    else {  
      setAlertVis(true);  
    } 

    // setAlertVis ? setAlertVis(false) :  setAlertVis(true)     ; // toggle visibility

  }



  return (
    <div>
      {/* <ListGroup></ListGroup> */}

      {/* <ListGroupConditional></ListGroupConditional>
  <ListGroupConditionalFunction></ListGroupConditionalFunction>
  <ClickEvent/> */}
      {/* 
  <ClickEventHandler/>
  <ClickEventHandlerActive/>
    <Counter/>
    <InterfaceWithFunction items={items} heading="Boats" onSelectItem={handleSelectItem}/> */}

      {/* <Alert>hello <strong>there</strong>!</Alert> */}
        { alertVisible &&   <Alert>My Alert</Alert>}

        <ButtonAlert color="warning" onClick={() => handleClick()} >button</ButtonAlert>
        {/* <ButtonAlert color="warning" onClick={() => setAlertVis(true)} >button</ButtonAlert> */}
       
        <p><img src={hadleyim} alt="hadley and henry" width={'55%'} /></p>
        
    </div>
  );
}

export default App;
// This is the main entry point of the application.
