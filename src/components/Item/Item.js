import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({product} ) => {
    const {name, price, description, img, stock, id} = product;
    
   return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>
                {price}
            </Card.Text>
            <Link to={`/item/${id}`}><Button>Detalle</Button></Link>
            <ItemCount initial={1} stock={stock} />
        </Card.Body>
    </Card>
   )
}

export default Item;