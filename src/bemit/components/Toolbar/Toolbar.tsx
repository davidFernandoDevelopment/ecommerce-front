import './c-toolbar.scss';

interface Props {
    children: React.ReactNode;
}

const Toolbar = ({ children }: Props) => {
    return (
        <div className='c-toolbar o-container'>
            {children}
        </div>
    );
};
export default Toolbar;