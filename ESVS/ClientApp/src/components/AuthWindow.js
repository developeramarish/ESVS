import React, { Component } from 'react';
import Modal from 'react-bootstrap/es/Modal';
import Form from 'react-bootstrap/es/Form';
import styled from 'styled-components';
import { ModalHeader, ModalTitle, ModalButton } from '../components/Misc';

const ModalWrapper = styled.div`
  background-color: #dadfe1;
`;

const ErrorMessage = styled.p`
  background-color: rgba(255,76,59,0.1);
  border: 2px solid rgba(255,76,59,0.5);
  border-radius: .25rem;
  padding: 6px;
  text-align: center;
  margin-bottom: 0;
`;

const Checkbox = styled(Form.Check)`
  label:valid {
    color: black;
  }
`;


export class AuthWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: true,
      isLoading: false,
      badRequest: false,
    };
    this.formRef = React.createRef();
    this.API = 'http://localhost:33333/api/Account/Login';
    this.authorize = this.authorize.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({badRequest: false});

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const form = this.formRef.current;
    this.setState({ validated: true, fetchFailed: false });
    return form.checkValidity();
  }

  authorize() {
    if (!this.handleSubmit()) { return; }
    this.setState({ isLoading: true, badRequest: false }, () => {
      let loginData = {
        "email" : this.state.email,
        "password" : this.state.password,
        "rememberMe" : this.state.rememberMe
      };
      fetch(this.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
        .then(res => {
          res.ok ? console.log(res.json()) : this.setState({ badRequest: true });
          this.setState({ isLoading: false });
        })
        .catch(err => {
          console.log('Дружок-пирожок, ошибочка: ', err);
          this.setState( { isLoading: false, fetchFailed: true } );
        })
    })
  }

  render() {
    const { isLoading, email, password, rememberMe, badRequest, fetchFailed } = this.state;

    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
      <ModalHeader closeButton>
        <ModalTitle>Авторизация</ModalTitle>
      </ModalHeader>
        <Form ref={this.formRef}>
          <ModalWrapper>
            <Modal.Body>
              <Form.Group> <Form.Control name="email"
                                         type="login"
                                         placeholder="Логин"
                                         value={email}
                                         onChange={this.handleInputChange}
                                         required />
              </Form.Group>
              <Form.Group> <Form.Control name="password"
                                         type="password"
                                         placeholder="Пароль"
                                         value={password}
                                         onChange={this.handleInputChange}
                                         required />
              </Form.Group>
              <Form.Group> <Checkbox  name="rememberMe"
                                      type="checkbox"
                                      label="Запомнить этот компьютер"
                                      checked={rememberMe}
                                      onChange={this.handleInputChange} />
              </Form.Group>
              { badRequest &&
                <ErrorMessage>Неверный логин или пароль</ErrorMessage>
              }
              { fetchFailed &&
                <ErrorMessage>Не удалось соединиться с сервером</ErrorMessage>
              }
            </Modal.Body>
            <Modal.Footer>
              <ModalButton disabled={isLoading} onClick={!isLoading ? this.authorize : null}>
                {isLoading ? 'Входим...' : 'Войти'}
              </ModalButton>
            </Modal.Footer>
          </ModalWrapper>
        </Form>
      </Modal>
    );
  }
}
