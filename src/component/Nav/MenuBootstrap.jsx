import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'


export default class MenoBoot extends Component {
    render() {
        return (
            <div className={s.fixed }>
 <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container fluid >

                <Navbar.Brand href="#">Alco-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <NavLink className={s.tittle__menu} to="/">MAIN PAGE</NavLink>
                        <NavLink className={s.tittle__menu} to="/Shop">SHOP</NavLink>
                        <NavLink className={s.tittle__menu} to="/MemberShip">MEMBERSHIP</NavLink>
                        <NavLink className={s.tittle__menu} to="/OurStory">OUR STORY</NavLink>
                        <NavLink className={s.tittle__menu} to="/Newsletter">NEWSLETTER</NavLink>
                        <NavLink className={s.tittle__menu} to="/Account">ACCOUNT</NavLink>
                        <NavLink className={s.tittle__menu} to="/Cart">CART</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
           



        )
    }
}


