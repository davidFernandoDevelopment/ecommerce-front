import './o-container.scss';

interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <div className='o-container'>
            {children}
        </div>
    );
};
export default Container;