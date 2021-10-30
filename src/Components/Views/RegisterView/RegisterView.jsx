import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth/auth-operations';
import {RegisterForm, Registerlabel} from './RegisterView.styled'



export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          case 'name':
            return setName(value);
          case 'email':
            return setEmail(value);
          case 'password':
            return setPassword(value);
          default:
            return;
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
      };

    return (
<div>
    <h1>Страница регистрации</h1>
    <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <Registerlabel>
        Имя
        <input
           type="text"
           name="name"
           value={name}
           onChange={handleChange}
        />
        </Registerlabel>
        <Registerlabel>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Registerlabel>
        <Registerlabel>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="7"
            title="Пароль должен быть не менее 7 символов"
          />
        </Registerlabel>
        <button type="submit">Зарегистрироваться</button>
    </RegisterForm>
</div>
    );
};