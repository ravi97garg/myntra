import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from '../../images';
import {Image} from "../CarouselComponent/style";

export default class OfferCarouselComponent extends React.Component{

    render() {
        const carouselImgs = images["offer-carousel-images"];
        return (
            <Carousel
                style={{margin: '14px'}}
                fade={true}
                interval={3000}
                controls={false}
            >
                {carouselImgs.map((image, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Image src={image.image}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}