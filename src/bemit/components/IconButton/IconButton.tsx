import './c-icon-button.scss';

interface Props {
    children: React.ReactNode;
}

const IconButton = ({ children }: Props) => {
    return (
        <button className='c-icon-button'>
            {children}
        </button>
    );
};
export default IconButton;