import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { getProductsByCategory, getAllProducts } from "../services/Products";

const ItemListContainer = ({ filter }) => {

    const [items, setItems] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let mounted = true;
        setFinished(false);
        if (filter) {
            getProductsByCategory(filter).then(products => {
                if (mounted) {
                    setItems(products);
                    setFinished(true);
                }
            })
        } else {
            getAllProducts().then(products => {
                if (mounted) {
                    setItems(products);
                    setFinished(true);
                }
            })
        }

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