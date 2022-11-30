import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import './App.css';

// import img from props.image;


export default function Consumable(props) {
    return (

        <Card style={{ width: '18rem' }}>
            
            <img id="props-image" src={"../" + props.image}></img>

            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Add to Favorites</Button>
            </Card.Body>
        </Card>

    );
}