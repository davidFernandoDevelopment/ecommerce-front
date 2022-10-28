import './o-section.scss';


interface Props {
    title?: string;
    children: React.ReactNode;
}


const Section = ({ children, title }: Props) => {
    return (
        <section className='o-section'>
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