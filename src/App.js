import './App.css';
import { useState } from "react";
import consumable from "./consumables.json";//categories for time: breakfast, lunch, dinner, brunch, linner, all
import Consumable from "./Consumable"
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




  function createTimeFilters() {
    return (
        <Form onSelect={setTypeFilter}>
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Breakfast`}
                // onSelect={setTimeFilter}
                eventKey="breakfast"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Lunch`}
                // onSelect={setTimeFilter}
                eventKey="dinner"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Dinner`}
                // onSelect={setTimeFilter}
                eventKey="dinner"
            />
            
        </Form>

    )
  }
  function createLocationFilters() {
    return (
        <Form onSelect={setLocationFilter}>
            
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`North Campus`}
                // onSelect={setLocationFilter}
                eventKey="north"
            /> 
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Middle Campus`}
                // onSelect={setLocationFilter}
                eventKey="middle"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`South Campus`}
                // onSelect={setLocationFilter}
                eventKey="south"
            /> 
            
        </Form>

    )
  }

  function createSort() {
    // return (
  //       <Form>
  //           <Form.Check 
  //           type={`radio`}
  //           id={`default-radio`}
  //           label={`High -> Low`}
  //           />
  //           <Form.Check 
  //           type={`radio`}
  //           id={`default-radio`}
  //           label={`Low -> High`}
  //           />
                


  //       </Form>
    // )
  }

    const SideBar = () => {
      return (
  //       <div class="sidebar" style={{display: "flex",  height: "100vh", position: "sticky", top: 0, overflow: "scroll initial" }}>
  //           <CDBSidebar  textColor="#333" backgroundColor="#e8ebfc">
  //           <CDBSidebarHeader >
  //               <h4>
  //                   Consume @ Brown
  //               </h4>
  //           </CDBSidebarHeader>
  //           <CDBSidebarContent>
  //               <CDBSidebarMenu>
  //                   <CDBSidebarMenu>
  //                       <CDBSidebarMenuItem >
  //                           <h5>
  //                               Time
  //                           </h5>
  //                       </CDBSidebarMenuItem>
  //                       <CDBSidebarMenuItem>
  //                           {createTimeFilters()}
  //                       </CDBSidebarMenuItem>
  //                   </CDBSidebarMenu>


  //                   <CDBSidebarMenu>
  //                       <CDBSidebarMenuItem >
  //                           <h5>
  //                               Location
  //                           </h5>
  //                       </CDBSidebarMenuItem>
  //                       <CDBSidebarMenuItem>
  //                           {createLocationFilters()}
  //                       </CDBSidebarMenuItem>
  //                   </CDBSidebarMenu>


  //                   <CDBSidebarMenu>
  //                       <CDBSidebarMenuItem >
  //                           <h5>
  //                               Sort Satisfaction Level
  //                           </h5>
  //                       </CDBSidebarMenuItem>
  //                       <CDBSidebarMenuItem>
  //                           {createSort()}
  //                       </CDBSidebarMenuItem>
  //                   </CDBSidebarMenu>


  //                   <CDBSidebarMenu style={{display: "flex"}}>
  //                       <CDBSidebarMenuItem >
  //                               <h5 >
  //                                   Favorites List
  //                               </h5>
  //                       </CDBSidebarMenuItem>

  //                       {favorites.map((item, index) => (
  //                           <div style={{textAlign: "center"}}>
  //                               {item}
  //                           </div>
  //                       ))}

  //                       <CDBSidebarMenuItem>Favs' Total Satisfaction: {props.total}</CDBSidebarMenuItem>
  //                       <CDBSidebarMenuItem>
  //                           <Button variant="secondary" onClick={() =>
  //                               {
  //                                   setFavorites([])
  //                                   setTotal(0)
  //                               }
  //                           }>Clear Favorites List</Button>
  //                       </CDBSidebarMenuItem>
  //                   </CDBSidebarMenu>

  //               </CDBSidebarMenu>
  //           </CDBSidebarContent>
    
  //           <CDBSidebarFooter style={{ textAlign: 'center' }}>
  //               <div
  //               className="sidebar-btn-wrapper"
  //               style={{padding: '20px 5px'}}
  //               >

  //               </div>
  //           </CDBSidebarFooter>
  //           </CDBSidebar>
  //       </div>
        <div className='sidebar'>
          <div className='category'>
            <div className='cat-header'>
              Filter by Location:
            </div>
            <Navbar>
              <Nav onSelect={setLocationFilter} className='nav-filter'  >
                <Nav.Item className="filter-pill"><Nav.Link eventKey="All">All Locations</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="north">North Campus</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="middle">Middle Campus</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="south">South Campus</Nav.Link></Nav.Item>
              </Nav>
            </Navbar>
          </div>
          <div className='category'>
            <div className='cat-header'>
              Filter by Type:
            </div>
            <Navbar>
              <Nav  className='nav-filter'   onSelect={setTypeFilter}>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="All">All Types</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="food">Food</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="drink">Drink</Nav.Link></Nav.Item>
              </Nav>
            </Navbar>
          </div>

          <div className='category'>
            <div className='cat-header'>
              Sort by:
            </div>
            <Navbar>
              <Nav  className='nav-filter'  onSelect={setSort}>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="ascending">High to Low</Nav.Link></Nav.Item>
                <Nav.Item className="filter-pill"><Nav.Link eventKey="descending">Low to High</Nav.Link></Nav.Item>
              </Nav>
            </Navbar>
          </div>

          <div className='category'>
            <div className='cat-header'>
              Favorites List:
            </div>
            <div className='fav-list'>
              {favorites.map((item, index) => (
                <div class="fav-item" style={{textAlign: "center"}}>
                      {item}
                  </div>
              ))}
            </div>
            <div className='fav-total'>
              Favs' Total Satisfaction: {total}
            </div>

            <Button variant="secondary" onClick={() =>
                {
                    setFavorites([])
                    setTotal(0)
                }
            }>Clear Favorites List</Button>
          </div>
        </div>
      );
    };

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
        {/* <SideBar></SideBar> */}
        <SideBar consumable = {consumable} favorites = {favorites} setFavorites={setFavorites} total={total} setTotal={setTotal} ></SideBar>
        {/* <SideBar consumable = {consumable} favorites = {favorites} setFavorites={setFavorites} total={total} setTotal={setTotal} ></SideBar> */}
        {/* SideBar(consumable = {consumable} favorites = {favorites} setFavorites={setFavorites} total={total} setTotal={setTotal} selectFilterType={selectFilterType}) */}
        {/* <Sidebar></Sidebar> */}
        <div>
          <h1>Consume @ Brown</h1>
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
