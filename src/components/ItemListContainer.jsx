import ItemCount from "./ItemCount";

const ItemListContainer = ({filter}) => {
    return (
        <>
            <h3>Hola, este es el contenedor de {filter}</h3>
            <ItemCount initial={0} stock={23} />
        </>
    );
}

export default ItemListContainer;