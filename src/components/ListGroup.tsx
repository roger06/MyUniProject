function ListGroup() {

    const items = ["London", "Chichester", "Bognor Regis", "Portsmouth", "Southampton"];


  return (
    <ul className="list-group">
        {items.map(item =>  <li key={item}>{item}</li>)}

    </ul>
  );
}

export default ListGroup;
