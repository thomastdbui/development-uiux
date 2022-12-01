// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import consumable from "./consumables.json";//categories for time: breakfast, lunch, dinner, brunch, linner, all
import Consumable from "./Consumable"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem } from 'react-bootstrap';
import Sidebar from './Sidebar';
// import { ProSidebarProvider } from 'react-pro-sidebar';
// import { BrowserRouter as Router } from 'react-router-dom';


// consumable.forEach((item) => {
//   item.image = require(item.image);
// });

// import 'react-bootstrap-drawer/lib/style.css';
// // import React, { useState } from 'react';
// import {
//     Col,
//     Collapse,
//     Container,
//     Row,
// } from 'react-bootstrap';
// import { Drawer } from 'react-bootstrap-drawer';

// const ApplicationDrawer = (props) => {
//     const [open, setOpen] = useState(false);

//     const handleToggle = () => setOpen(!open);

//     return (
//         <Drawer { ...props }>
//             <Drawer.Toggle onClick={ handleToggle } />

//             <Collapse in={ open }>
//                 <Drawer.Overflow>
//                     <Drawer.ToC>
//                         <Drawer.Header href="/">Application</Drawer.Header>

//                         <Drawer.Nav>
//                             <Drawer.Item href="/settings">Settings</Drawer.Item>
//                         </Drawer.Nav>
//                     </Drawer.ToC>
//                 </Drawer.Overflow>
//             </Collapse>
//         </Drawer>
//     );
// };



function App(props) {

  // const [total, setTotal] = useState(0);
  // const [items, setItems] = useState([]);


  return (
    <div className="App">
      <div id="page">
        <Sidebar id="sidebar"></Sidebar>
        <div>
          <h1>What to Consume at Brown</h1>
          <div className="container">
            {consumable.map((item) => (
              
              <Consumable name={item.name} location={item.location} type={item.type} 
              time={item.time} satisfaction={item.satisfaction} image={item.image}>
              </Consumable>

            ))}
          </div>

        </div>

      </div>
      {/* <Container fluid>
          <Row className="flex-xl-nowrap">
              <Col as={ ApplicationDrawer } xs={ 12 } md={ 3 } lg={ 2 } />
              <Col xs={ 12 } md={ 9 } lg={ 10 }>{ props.children }</Col>
          </Row>
      </Container> */}
      {/* <Router>
        <div className="App"></div>
      </Router> */}


      
      
      {/* <img src={require("./assets/images/waffles.jpeg")} alt="spicy with"></img> */}
    </div>
  );
}

export default App;
