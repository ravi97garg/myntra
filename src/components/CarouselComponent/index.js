import React from 'react';
import {Carousel} from 'react-bootstrap';
import imagesJson from '../../images';
import {Image} from "./style";

export default class ControlledCarousel extends React.Component {

    render() {

        const carouselImages = imagesJson["carousel-images"];

        return (

            <Carousel
                style={{margin: '14px'}}
                interval={3000}
                controls={false}
            >
                {carouselImages.map((image, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Image src={carouselImages[index]}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        );
    }
}

