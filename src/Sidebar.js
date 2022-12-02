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
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import consumable from "./consumables.json";



const SideBar = (props) => {
    return (
        <div class="sidebar" style={{display: "flex",  height: "100vh", position: "sticky", top: 0, overflow: "scroll initial" }}>
            <CDBSidebar  textColor="#333" backgroundColor="#e8ebfc">
            <CDBSidebarHeader >
                <h4>
                    Consume @ Brown
                </h4>
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem >
                            <h5>
                                Time
                            </h5>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            {createTimeFilters(props.selectFilterType)}
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>


                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem >
                            <h5>
                                Location
                            </h5>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            {createLocationFilters(props.selectFilterType)}
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>


                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem >
                            <h5>
                                Sort Satisfaction Level
                            </h5>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            {createSort()}
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>


                    <CDBSidebarMenu style={{display: "flex"}}>
                        <CDBSidebarMenuItem >
                                <h5 >
                                    Favorites List
                                </h5>
                        </CDBSidebarMenuItem>

                        {props.favorites.map((item, index) => (
                            <div style={{textAlign: "center"}}>
                                {item}
                            </div>
                        ))}

                        <CDBSidebarMenuItem>Favs' Total Satisfaction: {props.total}</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            <Button variant="secondary" onClick={() =>
                                {
                                    props.setFavorites([])
                                    props.setTotal(0)
                                }
                            }>Clear Favorites List</Button>
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>

                </CDBSidebarMenu>
            </CDBSidebarContent>
    
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                className="sidebar-btn-wrapper"
                style={{padding: '20px 5px'}}
                >

                </div>
            </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
  };
  
  export default SideBar;






function createTimeFilters(props) {
    return (
        <Form>
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Breakfast`}
                onSelect={props.selectFilterType}
                eventKey="breakfast"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Lunch`}
                onSelect={props.selectFilterType}
                eventKey="dinner"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Dinner`}
                onSelect={props.selectFilterType}
                eventKey="dinner"
            />
            
        </Form>

    )
}
function createLocationFilters(props) {
    return (
        <Form>
            
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`North Campus`}
                onSelect={props.selectFilterType}
                eventKey="north"
            /> 
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`Middle Campus`}
                onSelect={props.selectFilterType}
                eventKey="middle"
            />
            <Form.Check 
                type={`checkbox`}
                id={`default-checkbox`}
                label={`South Campus`}
                onSelect={props.selectFilterType}
                eventKey="south"
            /> 
            
        </Form>

    )
}

function createSort() {
    return (
        <Form>
            <Form.Check 
            type={`radio`}
            id={`default-radio`}
            label={`High -> Low`}
            />
            <Form.Check 
            type={`radio`}
            id={`default-radio`}
            label={`Low -> High`}
            />
                


        </Form>
    )
}

// export default CheckExample;