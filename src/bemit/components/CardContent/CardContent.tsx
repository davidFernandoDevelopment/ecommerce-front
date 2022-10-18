import './c-card-content.scss';

interface Props {
    children: React.ReactNode;
}

const CardContent = ({ children }: Props) => {
    return (
        <div className='c-card-content'>
            {children}
        </div>
    );
};
export default CardContent;