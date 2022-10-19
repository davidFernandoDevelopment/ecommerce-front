import './o-container.scss';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Container = ({ className, children }: Props) => {
    return (
        <div className={`o-container ${className}`}>
            {children}
        </div>
    );
};
export default Container;