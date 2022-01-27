import { Carousel } from "react-bootstrap";

const ItemCarouselImages = ({ images }) => {
    return (
        <Carousel
            variant="dark"
            indicators={images.length === 1 ? false : true}
            controls={images.length === 1 ? false : true}
            interval={null}>
            {
                images.map(image => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt="slide"
                        />
                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
};

export default ItemCarouselImages;
