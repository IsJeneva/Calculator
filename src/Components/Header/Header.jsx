import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Navigathion } from "../../Constans/Constants"
import { WrapperHeader, NameCalculatorApp, LinkHeader, Link, Wrapper} from "./styled"



class Header extends Component{

    render(){
        return(
            <WrapperHeader>
                <Wrapper>
                    <NameCalculatorApp>Calculator App</NameCalculatorApp>  
                <LinkHeader>  
                        { Navigathion.map(({path, name}) => (
                                <NavLink key={name} to={path}><Link>{name}</Link></NavLink>
                        )) }
                    </LinkHeader>
                </Wrapper>
            </WrapperHeader>
        )
    }
}
export default Header