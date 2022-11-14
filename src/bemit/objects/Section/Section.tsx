import './o-section.scss';
import classnames from 'classnames';


interface Props {
    title?: string;
    className?: string;
    children: React.ReactNode;
}


const Section = ({ children, title, className }: Props) => {

    const classes = classnames([
        className,
        'o-section',
    ]);

    return (
        <section className={classes}>
            {
                title &&
                <h2 className='o-section__title'>
                    {title}
                </h2>
            }
            <div className='o-section__content'>
                {children}
            </div>
        </section>
    );
};
export default Section;