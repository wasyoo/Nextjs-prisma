import React, { Component } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: calc(1.5em + .75rem + 2px);
  width: 50%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  border: 1px solid #ced4da;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
`;

const Label = styled.label`
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
`

class UserForm extends Component {
  state = {
    id: this.props.id,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    phone: this.props.phone,
    address: this.props.address,
    password: this.props.password,
  }

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { onSubmit } = this.props;
    const { firstName, lastName, email, phone, address, password } = this.state
    return (
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit({
          variables: {
            data: {
              firstName,
              lastName,
              email,
              phone,
              address,
              password,
            }
          }
        })
      }}>
        <FormGroup>
          <Label htmlFor="lastName">Nom</Label>
          <Input type="text" name="lastName" id="lastName" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstName">Prénom</Label>
          <Input type="text" name="firstName" id="firstName" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" name="password" id="password" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Phone">N° Tel</Label>
          <Input type="text" name="Phone" id="Phone" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Adresse</Label>
          <Input type="text" name="address" id="address" onChange={this.handleChange}/>
        </FormGroup>
        <Button>
          Valider
        </Button>
      </form>
    );
  }
}

export default UserForm;
