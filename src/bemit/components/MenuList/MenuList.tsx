import './c-menu-list.scss';


interface Props {
    children: React.ReactNode;
}

const List = ({ children }: Props) => {
    return (
        <ul className='c-menu-list'>
            {children}
        </ul>
    );
};
export default List;