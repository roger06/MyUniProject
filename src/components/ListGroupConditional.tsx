function ListGroupConditional() {

  let items = ["Belfast", "Chicago", "Birmingham", "Plymouth"];
  items = [];

  // if (items.length === 0) {
  //   return <h2>No items found</h2>; 
  // }

  return (

    <>
    <h2>Conditional</h2>

    {items.length === 0 ? <h2>No items found</h2> : null  }

    <ul className="list-group">
        {items.map(item =>  <li key={item}>{item}</li>)}

    </ul>
    </>
  );
}

export default ListGroupConditional;
