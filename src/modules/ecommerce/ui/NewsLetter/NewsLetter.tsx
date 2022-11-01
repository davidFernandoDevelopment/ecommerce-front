import { Button, TextField } from '../../../../bemit/components';
import './news-letter.scss';

const NewsLetter = () => {
    return (

        <section className="news-letter">
            <div className="news-letter__bg">
                <div className="news-letter__info">
                    <h2 className="news-letter__title">
                        Suscribete a nuestras <br /> Noticias
                    </h2>
                    <p className="news-letter__description">
                        Suscribete a nuestras noticias y recibe las
                        mejores ofertas y promociones cada semana.

                    </p>
                </div>
                <form className="news-letter__form">
                    <TextField
                        label='Email'
                    />
                    <Button>
                        Suscribete
                    </Button>
                </form>
            </div>
        </section>
    );
};
export default NewsLetter;