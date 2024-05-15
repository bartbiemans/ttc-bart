import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed={"top"} bg="dark" variant={"dark"}>
                <Navbar.Brand href={'/'}>TTC-bart merksem</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/board'>Bestuur</Nav.Link>
                        <NavDropdown title="Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/historiek">Historiek</NavDropdown.Item>
                            <NavDropdown.Item href="/club-tournament">Clubkampioenschap</NavDropdown.Item>
                            <NavDropdown.Item href="/newmembers">Nieuwe leden</NavDropdown.Item>
                            <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                            <NavDropdown.Item href="/ploegen">Ploegen</NavDropdown.Item>
                            <NavDropdown.Item href="/jeugd">Jeugd</NavDropdown.Item>
                            <NavDropdown.Item href="/senioren">Senioren</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/calendar'>Kalender</Nav.Link>
                        <Nav.Link href='/documents'>Documenten</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}