import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { getProductsFromCategory } from "../services/Products";

const ItemListContainer = ({ filter }) => {

    const [items, setItems] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let mounted = true;
        setFinished(false);
        getProductsFromCategory(filter).then(products => {
            if (mounted) {
                setItems(products);
                setFinished(true);
            }
        })
        return () => mounted = false;
    }, [filter]);

    return (
        <>

            <Container className="mb-5">
                {finished ?
                    <ItemList items={items} /> :
                    'Cargando...'
                }

            </Container>
        </>
    );
}

export default ItemListContainer;