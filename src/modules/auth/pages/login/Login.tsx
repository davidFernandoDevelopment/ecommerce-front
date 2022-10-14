import { FormEvent } from 'react';

import './login.scss';
import { useAuthStore } from '../../';
import { useForm } from '../../../../hooks';
import { Button, Input } from '../../../../bemit/components';


const Login = () => {
    const { startLogin } = useAuthStore();
    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startLogin(formState);
    };


    return (
        <div className='u-mt o-container'>
            <form className="login__form" onSubmit={handleSubmit}>
                <Input
                    onChange={onInputChange}
                    name='email'
                    type="email"
                    placeholder="Username"
                    autoComplete='off'
                />
                <Input
                    onChange={onInputChange}
                    name='password'
                    type="password"
                    placeholder="Password"
                    autoComplete='off'
                />
                <Button
                    type='submit'
                >
                    Iniciar sesión
                </Button>
            </form>
        </div>
    );
};

export default Login;