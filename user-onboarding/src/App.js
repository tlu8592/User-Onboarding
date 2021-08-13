import React, { useState, useEffect } from 'react';
import Form from './Form';
import UserInfo from './UserInfo';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import './App.css';

// initial states
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsAgreed: false
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsAgreed: false
}

const initialUsers = [];

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        const newUsers = response.data;
        console.log(response.data)
        setUsers(response.data.data);
      })
      .catch(error => console.log(error))
  };
  console.log(users)
  const postNewUser = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, newUser]);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const changeHandler = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors, 
        [name]: ""
      })
    })
    .catch(error => {
      setFormErrors({
        ...formErrors,
        [name]: error.message
      })
    });

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const submit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsAgreed: formValues.termsAgreed
    };

    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema
    .isValid(formValues)
    .then(schemaIsValid => {
      setDisabled(!schemaIsValid);
    })
  }, [formValues])

  return (
    <div className="App">
      <header>
        <h1>WELCOME!</h1>
      </header>
      
      <Form 
        values={formValues}
        change={changeHandler}
        submit={submit}
        disable={disabled}
        errors={formErrors}
      />

      {
          users.map(user => {
            return (
              <UserInfo key={user.id} userDetails={user} />
            )
          })
      }
    </div>
  );
}

export default App;
