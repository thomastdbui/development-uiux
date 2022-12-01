import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './App.css';

// import img from props.image;


export default function Consumable(props) {
    return (

        <Card style={{ width: '18rem' }}>
            
            <img id="props-image" src={"../assets/images/" + props.image}></img>

            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Location on Campus: {props.location}</ListGroup.Item>
                    <ListGroup.Item>Consumable Type: {props.type}</ListGroup.Item>
                    <ListGroup.Item>Satisfaction Level: {props.satisfaction}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Add to Favorites</Button>
            </Card.Body>
        </Card>

    );
}