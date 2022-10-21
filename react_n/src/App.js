          // tutorial
// import React from 'react';

// // const App = () => {
// //   return (
// //     <div>
// //       <h1> welcome to nitya app</h1>
// //     </div> 
// //   );
// // }
// const App = () => {
//   return (
//     <React.Fragment>   
//       <MyName/>
//       <p className='para'>hello world {3+3} </p>
//       <h1> welcome to nitya app</h1>
//       <MyName/>
//     </React.Fragment> 
//   );
//   // instread of react fragment we can also write <> </> 
// };
// const MyName =  ()=>{  // why myname is not working? 
//   return <h1>nitya nitya</h1>;
// };


// // const App = () => { // fat arrow function
// //   return React.createElement("h1",{},"hello world");
// // }

// // const App = () => { // fat arrow function with a h1 inside a div
// //   return React.createElement(
// //     "div",{},React.createElement("h1",{},"hello world")
// //   );
// // }

// export default App



//  project work
import React from 'react';
// import Resturants from './components/basics/Resturants'; // if we export resturant as default
import {Resturants} from './components/basics/Resturants';
import Todo from './todoreact/todo'

const App = () => {
  return (
    // <Resturants></Resturants>
    <Todo/>
  )
}

export default App