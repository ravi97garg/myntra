import React, {Component} from 'react';
import {Searchbar} from "./style";

export default class SearchbarComponent extends Component {
    render () {
        return (
            <Searchbar>
                <span className={'searchIcon'}/>
                <input type={"text"} placeholder='Search for products, brands and more'/>
            </Searchbar>

        )

    }

}