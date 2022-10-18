import { FormEvent } from 'react';


import './login.scss';
import { Credentials, useAuthStore } from '../../';
import { FormValidation, useForm } from '../../../../hooks';
import { Button, TextField } from '../../../../bemit/components';

const formValidation: FormValidation<Credentials> = {
    email: [(value: string) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value: string) => value.length >= 6, 'La contraseña debe tener como minimo 6 caracteres']
};


const Login = () => {
    const { startLogin } = useAuthStore();
    const {
        formState,
        touched,
        checkAllTouched,
        isFormValid,
        emailValid,
        passwordValid,
        onInputChange,
        onBlurChange
    } = useForm({
        email: '',
        password: ''
    }, formValidation);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkAllTouched();
        if (!isFormValid) return;

        startLogin(formState);
    };


    return (
        <div className='u-mt o-container'>
            <form className="login__form" onSubmit={handleSubmit}>
                <TextField
                    onBlur={onBlurChange}
                    onChange={onInputChange}
                    name='email'
                    type="email"
                    label="Email"
                    autoComplete='off'
                    error={touched.email && !!emailValid}
                    helperText={emailValid}
                />
                <TextField
                    password
                    onBlur={onBlurChange}
                    onChange={onInputChange}
                    name='password'
                    label="Password"
                    autoComplete='off'
                    error={touched.password && !!passwordValid}
                    helperText={passwordValid}
                />
                <Button
                    type='submit'
                    disabled={!isFormValid}
                >
                    Iniciar sesión
                </Button>
            </form>
        </div>
    );
};

export default Login;