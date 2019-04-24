import React, { Component } from 'react';
import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from 'react-bootstrap/es/NavItem';
import { AuthWindow } from './AuthWindow';

const AuthBar = styled(Navbar).attrs({
  className: "navigation py-0 flex-row-reverse"
})`
  background-color: #35495d;
`;

const AuthBarLink = styled(NavItem).attrs({
  className: "py-1 px-2"
})`
  &&& {
    color: white;
    :hover {
      color: #5cace1;
      cursor: pointer;
    }
  }
`;

export class AuthorizationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <AuthBar>
        <Nav>
          <AuthBarLink onClick={() => this.setState({ modalShow: true })}>Вход</AuthBarLink>
          <LinkContainer to={'register'} exact>
            <AuthBarLink>Регистрация</AuthBarLink>
          </LinkContainer>
        </Nav>
        <AuthWindow show={this.state.modalShow} onHide={modalClose} />
      </AuthBar>
    );
  }
}
