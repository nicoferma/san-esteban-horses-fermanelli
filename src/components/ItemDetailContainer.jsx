import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        let mounted = true;
        setFinished(false);
        getProductById(id).then(product => {
            if (mounted) {
                setProduct(product);
                setFinished(true);
            }
        });
        return () => mounted = false;
    }, [id]);

    return (
        <>
            {finished ?
                (typeof product == 'undefined' ?
                    'El producto no existe'
                    :
                    <ItemDetail product={product} />)
                :
                'Cargando...'
            }

        </>
    );
};

export default ItemDetailContainer;
