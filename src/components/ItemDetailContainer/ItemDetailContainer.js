import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    return (<>
<h1>ItemDetailContainer</h1>
<h3>El id de este producto es el numero {id} </h3>
    
    </>
    )
}

export default ItemDetailContainer;