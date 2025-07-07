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

function App() {
  // moved from components/Interface.tsx
  let items = ["Copland", "Phobos", "Beneteau", "Moody", "Dufour", "Jeanneau", "X-Yachts", "Bavaria", "Lagoon", "Catana"];

  return  (


  <div>
    
    {/* <ListGroup></ListGroup> */}
  
  
  {/* <ListGroupConditional></ListGroupConditional>
  <ListGroupConditionalFunction></ListGroupConditionalFunction>
  <ClickEvent/> */}
  <ClickEventHandler/>
  <ClickEventHandlerActive/>
    <Counter/>
    <Interface items={items} heading="Boats"/>

  </div>

  )


   
  


}

export default App;
// This is the main entry point of the application.