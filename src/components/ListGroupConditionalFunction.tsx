// moving conditional rendering to a function component


function ListGroupConditionalFunction() {

  let items = ["Belfast", "Chicago", "Birmingham", "Plymouth"];
//   items = [];

// as a var (const)
const message = items.length === 0 ? <h2>No items found...</h2> : null 

// as a function
// advantage of this is that you can pass in parameters if needed
// disadvantage is that it can be less readable if the function is complex

const getMessage = () => {
  items.length === 0 ? <h2>No items found...</h2> : null 
  }

  // if (items.length === 0) {
  //   return <h2>No items found</h2>; 
  // }

  return (

    <>
    <h2>Conditional in function</h2>

    { getMessage()}

    <ul className="list-group">
        {items.map(item =>  <li key={item}>{item}</li>)}

    </ul>
    </>
  );
}

export default ListGroupConditionalFunction;
