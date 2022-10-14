import './c-appbar.scss';

interface Props {
    children: React.ReactNode;
}

const Appbar = ({ children }: Props) => {
    return (
        <header className='c-appbar'>
            {children}
        </header>
    );
};
export default Appbar;