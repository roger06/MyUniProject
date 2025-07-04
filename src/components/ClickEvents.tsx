// basic click event handler in React


function ClickEvent() {

  let items = ["Belfast", "Chicago", "Birmingham", "Plymouth"];
//   items = [];

  return (

    <>
    <h2>Click event</h2>

   

    <ul className="list-group">
        {items.map((item, index) =>  <li className="list-group-item" key={item} 
        onClick={ (event) =>  console.log('you clicked me ' + item + " " + index +  " event = " + event) }   
        >{item}</li>)}

    </ul>
    </>
  );
}

export default ClickEvent;
