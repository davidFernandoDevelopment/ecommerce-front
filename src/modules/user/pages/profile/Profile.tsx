import { AiOutlineEdit } from 'react-icons/ai';

import './profile.scss';
import { HeaderAction } from '../../../ecommerce';
import { Container } from '../../../../bemit/objects';
import { Card, IconButton, Image, Tab, Tabs } from '../../../../bemit/components';

const Profile = () => {
    return (
        <div className='profile'>
            <HeaderAction
                title='Mi perfil'
                className='profile__header'
            />
            <Container className='profile__container'>
                <Card className='profile__main'>
                    <div className='profile__info'>
                        <Image
                            aspectRatio='1-1'
                            className='profile__img'
                            src='https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                        />
                        <div className="profile__data">
                            <h3 className='profile__name'>David Sanchez</h3>
                            <p className='profile__email'>dsanchezd21@gmail.com</p>
                        </div>
                    </div>
                    <IconButton>
                        <AiOutlineEdit />
                    </IconButton>
                </Card>
                <Card className='profile__actions'>
                    <a className='profile__change-account'>Cambiar cuenta</a>
                    <a className='profile__logout'>Cerrar sesión</a>
                </Card>

                <h3 className='profile__subtitle'>Mis pedidos</h3>
                <Tabs className='profile__tabs'>
                    <Tab id={0} label='Todos'>
                        Todos los pedidos.
                    </Tab>
                    <Tab id={1} label='Por pagar'>
                        Los pedidos que estan pendientes de pago.
                    </Tab>
                    <Tab id={2} label='Pendientes'>
                        Pedidos pendientes de entrega.
                    </Tab>
                </Tabs>
                <section></section>
            </Container>
        </div>
    );
};
export default Profile;