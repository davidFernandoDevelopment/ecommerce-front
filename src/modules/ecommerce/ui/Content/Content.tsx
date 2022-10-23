import './content.scss';

interface Props {
    children: React.ReactNode;
}

const Content = ({ children }: Props) => {
    return (
        <main className='content'>
            {children}
        </main>
    );
};
export default Content;