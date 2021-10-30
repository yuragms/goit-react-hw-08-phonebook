import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth/auth-operations';
import {LoginForm, Loginlabel} from './LoginView.styled'

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
      };





    return (
<div>
      <h1>Страница логина</h1>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <Loginlabel >
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Loginlabel>

        <Loginlabel >
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="7"
            title="Пароль должен быть не менее 7 символов"
          />
        </Loginlabel>

        <button type="submit">Войти</button>
      </LoginForm>
    </div>
    );
};