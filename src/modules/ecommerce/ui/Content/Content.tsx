import { Container } from '../../../../bemit/objects';
import './content.scss';

interface Props {
    children: React.ReactNode;
}

const Content = ({ children }: Props) => {
    return (
        <main className='content'>
            <Container>
                {children}
            </Container>
        </main>
    );
};
export default Content;