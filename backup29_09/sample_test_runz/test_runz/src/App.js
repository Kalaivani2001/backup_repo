import React, { useState } from "react";
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';

function App() {
const [name,setName] = useState("");

function warningNotification (){
	addNotification({
	title: 'Warning',
	subtitle: 'Please fill it',
	message: 'You have to enter name',
	theme: 'red',
	closeButton:"X",
	})
};

function successNotification (){
	addNotification({
	title: 'Success',
	subtitle: 'You have successfully submitted',
	message: 'Welcome to GeeksforGeeks',
	theme: 'light',
	closeButton:"X",
	backgroundTop:"green",
	backgroundBottom:"yellowgreen"
	})
};

function handleSubmit(e){
	e.preventDefault();
	if(name === "")
	warningNotification();
	else
	successNotification()
}
function buttonOnClick (){
  addNotification({
    title: 'Warning',
    native:true         
  })
};

return (
	<div className="App">
	<Notifications />
	<h1>Hey Geek!</h1>
	<form >
		<label>Name:</label>
		<input name="name" value={name}
		onChange={(e) => setName(e.target.value)}
		/>
		<button onClick={handleSubmit}
		type="submit">Submit
		</button>
	</form>
 
      <h1>Hey Geek!</h1>
      <button onClick={buttonOnClick}>
         Push Notification
      </button>
	</div>
);
}

export default App;


// import addNotification from 'react-push-notification';
// import { Notifications } from 'react-push-notification';
// function App() {
//   function buttonOnClick (){
//     addNotification({
//       title: 'Warning',
//       native:true         
//     })
//   };
//   return (
//     <div className="App">
//       <Notifications />
//       <h1>Hey Geek!</h1>
//       <button onClick={buttonOnClick}>
//          Push Notification
//       </button>
//     </div>
//   );
// }
  
// export default App;