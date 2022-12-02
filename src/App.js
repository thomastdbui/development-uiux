import './App.css';
import { useState } from "react";
import consumable from "./consumables.json";//categories for time: breakfast, lunch, dinner, brunch, linner, all
import Consumable from "./Consumable"
import Sidebar from "./Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
// import Sidebar from './Sidebar';
import React from "react";
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
  } from 'cdbreact';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






function App(props) {

  // const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([...new Set([])]);
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");
  const [order, setSortOrder] = useState("initial");


  function matchesFilterType(item) {
    if (type === "All" && location == "All") {
      return true;
    } 

    if (type === "All") {
      if (location === item.location) {
        return true;
      }
    }
    
    if (location === "All") {
      if (type === item.type) {
        return true;
      }
    }
    if (type === item.type && location === item.location) {
      return true;
    } 
    
    return false;

  }

  function setTypeFilter(eventKey) {
    setType(eventKey);

  }


  function setLocationFilter(eventKey) {
    setLocation(eventKey);
  }

  function setSort(eventKey) {
    setSortOrder(eventKey);
    console.log(eventKey);
  }
  
  const sortedData = consumable.sort((a,b) => {
    if (order === "ascending") { 
      return b.satisfaction - a.satisfaction
    }
    if (order === "descending"){
      return a.satisfaction - b.satisfaction
    }
  })
  

  
  return (
    <div className="App">
      <div id="page">

        <Sidebar consumable = {consumable} favorites = {favorites} setFavorites={setFavorites}
         total={total} setTotal={setTotal} setLocationFilter={setLocationFilter} 
         setTypeFilter={setTypeFilter} setSort={setSort} ></Sidebar>
        
        <div>
          <div className='title-header'>
            <h1>Consume @ Brown</h1>
          </div>
          <div className="container">
            
            
            {sortedData.filter(matchesFilterType).map((item) => (
              
              <Consumable name={item.name} location={item.location} type={item.type} 
              time={item.time} satisfaction={item.satisfaction} image={item.image} favorites={favorites} setFavorites={setFavorites}
              total={total} setTotal={setTotal}>
              </Consumable>

            ))}
          </div>

        </div>

      </div>
    
    </div>
  );
}
















export default App;
