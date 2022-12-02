import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './App.css';
import { useState } from "react";
// import img from props.image;


export default function Consumable(props) {

    // const [canAdd, setAdd] = useState(true);

    return (

        <Card style={{ width: '18rem' }}>
            
            <img id="props-image" src={"../assets/images/" + props.image}></img>

            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Location on Campus: {props.location}</ListGroup.Item>
                    <ListGroup.Item>Consumable Type: {props.type}</ListGroup.Item>
                    <ListGroup.Item>Satisfaction Level: {props.satisfaction}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" 
                    onClick={() => {

                        const inFavs = false;
                        props.favorites.forEach(element => {
                            if (element === props.name) {
                               inFavs = true;
                            }
                        });

                        if (!inFavs) {
                            props.setTotal(props.total + props.satisfaction)
                        }

                        const newFavs = [...new Set([...props.favorites, props.name])]
                        props.setFavorites(newFavs)
                    }}>
                    Add to Favorites
                </Button>
            </Card.Body>
        </Card>

    );
}