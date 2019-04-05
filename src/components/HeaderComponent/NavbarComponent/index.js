import React, {Component} from 'react';
import {NavList, Navbar} from "./style";

export default class NavbarComponent extends Component{
    constructor(){
        super();
        this.navList = [
            {id: 0, text: 'MEN'},
            {id: 1, text: 'WOMEN'},
            {id: 2, text: 'KIDS'},
            {id: 3, text: 'HOME & LIVING'},
            {id: 4, text: 'DISCOVER'}
        ]
    }

    render(){
        return (
            <Navbar>
                <ul>
                    {this.navList.map((elem, index)=>{
                        return <NavList key={elem.id}>{elem.text}</NavList>
                    })}
                </ul>
            </Navbar>
        )
    }
}