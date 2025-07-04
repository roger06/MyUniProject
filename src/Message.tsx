function Message() {

  const message = "Hello, this is a message from the Message component!";

  


  return (
   
    <>
  
   
     <h1>Welcome to My Uni Project</h1>
      <p>{message}</p>
   
     </>
  );
}   
export default Message;

// <div required to wrap the component, but using a fragment <> </> is more efficient
