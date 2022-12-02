import './App.css';
import { useState } from "react";
import consumable from "./consumables.json";//categories for time: breakfast, lunch, dinner, brunch, linner, all
import Consumable from "./Consumable"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import React from "react";

import Button from 'react-bootstrap/Button';





export default function Sidebar(props)  {
    return (

      <div className='sidebar'>
        <div className='category'>
          <div className='cat-header'>
            Filter by Location:
          </div>
          <Navbar>
            <Nav onSelect={props.setLocationFilter} className='nav-filter'  >
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
            <Nav  className='nav-filter'   onSelect={props.setTypeFilter}>
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
            <Nav  className='nav-filter'  onSelect={props.setSort}>
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
            {props.favorites.map((item, index) => (
              <div class="fav-item" style={{textAlign: "center"}}>
                    {item}
                </div>
            ))}
          </div>
          <div className='fav-total'>
            Favs' Total Satisfaction: {props.total}
          </div>
         
          <div className='fav-button'>
            <Button variant="outline-secondary" onClick={() =>
                {
                    props.setFavorites([])
                    props.setTotal(0)
                }
            }>Clear Favorites List</Button>
          </div>
        </div>
      </div>
    );
  };