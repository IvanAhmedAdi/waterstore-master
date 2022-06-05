import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({product} ) => {
    const {name, price, description, img, stock} = product;
    
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
            <ItemCount initial={1} stock={stock} />
        </Card.Body>
    </Card>
   )
}

export default Item;