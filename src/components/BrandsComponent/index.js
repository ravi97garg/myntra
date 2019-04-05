import React, {Component} from 'react';
import {BrandCard, BrandDesc, BrandFooter, BrandsWrapper, BrandTitle, ImageCaption} from "./style";
import images from '../../images';

export default class BrandsComponent extends Component {

    render(){
        const brandImages = images["brands-focus-images"];
        return (
            <BrandsWrapper>
                {brandImages.map((brand, index) => {
                    return (
                        <BrandCard image={brand.image}>
                            <ImageCaption brand-title={brand["brand-name"]} text={brand.message}>
                                <BrandTitle>{brand['brand-name']}</BrandTitle>
                                <BrandDesc>{brand.message}</BrandDesc>
                                <BrandFooter>+ EXPLORE</BrandFooter>
                            </ImageCaption>
                        </BrandCard>
                    )
                })}
            </BrandsWrapper>
        )
    }

}