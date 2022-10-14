import './c-menu-item.scss';

interface Props {
    children: React.ReactNode;
}

const MenuItem = ({ children }: Props) => {
    return (
        <div className='c-menu-item'>
            {children}
        </div>
    );
};
export default MenuItem;