import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
function App() {
  //18.this is 1st way to use the fragment in react
  // return (
  //   <React.Fragment>
    
  //     <h1>Healthy Foods</h1>
  //     <ul className="list-group">
  //       <li className="list-group-item">Apple</li>
  //       <li className="list-group-item">Banana</li>
  //       <li className="list-group-item">Orange</li>
  //     </ul>
  //     </React.Fragment>
   
  // );
  //we can add the 2nd way frigment also like this-
  // return (
  //   <>
  //     <h1>Healthy Foods</h1>
  //     <ul className="list-group">
  //       <li className="list-group-item">Apple</li>
  //       <li className="list-group-item">Banana</li>
  //       <li className="list-group-item">Orange</li>
  //     </ul>
  //   </>
  // );

  //19.here we are going to learn the use of Map
  let foodItems = ["pineapple", "Avocado", "Banana", "Orange"];

  //20.conditional based rendering in the react
   //let foodItems=[];
  // if(foodItems.length===0){
  //   return <h1>There is no food items</h1>
  // }

  //below i am using the ternary operator for conditional rendering in react
  //{foodItems.length===0 ? <h3>There is no food items</h3> : null}
  return (
    <> 
      <h1 className="food-Heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </> 
  );
}

export default App;