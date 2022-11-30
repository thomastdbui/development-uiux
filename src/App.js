// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import consumable from "./consumables.json";//categories for time: breakfast, lunch, dinner, brunch, linner, all
import Consumable from "./Consumable"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem } from 'react-bootstrap';

// consumable.forEach((item) => {
//   item.image = require(item.image);
// });



function App() {

  // const [total, setTotal] = useState(0);
  // const [items, setItems] = useState([]);


  return (
    <div className="App">
      <h1>What to Consume at Brown</h1>
      <div className="container">
        {consumable.map((item) => (
          
          <Consumable name={item.name} location={item.location} type={item.type} 
          time={item.time} satisfaction={item.satisfaction} image={item.image}
          ></Consumable>


        ))}
      </div>
      
      {/* <img src={require("./assets/images/waffles.jpeg")} alt="spicy with"></img> */}
    </div>
  );
}

export default App;
