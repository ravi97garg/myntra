import React from 'react';
import {IconImage, IconText, StyledTopCorner} from "./style";

export default class TopCornerComponent extends React.Component{

    state = {
        icons: [
            {
                offsetX: "-603px",
                offsetY: "-117px",
                width: "34px",
                height: "32px",
                text: "Profile"
            },
            {
                offsetX: "-650px",
                offsetY: "-117px",
                width: "25px",
                height: "32px",
                text: "Wishlist"
            },
            {
                offsetX: "-688px",
                offsetY: "-117px",
                width: "35px",
                height: "32px",
                text: "Bag"
            }

        ]
    }

    render() {
        return (
            <StyledTopCorner>
                {this.state.icons.map((icon, index) => {
                    return (
                        <li key={index}>
                            <IconImage icon={icon} />
                            <IconText>{icon.text}</IconText>
                        </li>

                    )
                })}
            </StyledTopCorner>
        )
    }

}