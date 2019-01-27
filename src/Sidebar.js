import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">{this.props.kyrgyzairlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.turkishairlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.emiratesairlines}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">{this.props.russianairlines}</NavLink>
                    </NavItem>
                </Nav>
                <hr/>
            </div>
        );
    }
}