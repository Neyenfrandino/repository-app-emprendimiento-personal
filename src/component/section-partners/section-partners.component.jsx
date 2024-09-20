
import './section-partners.style.scss';

const SectionPartners = ( {logos} ) => {

    return (
        <div className='section-partners__container'>
            
            <div className='section-partners__content__logo'> <span>partners...</span></div> 

            <div className='section-partners__content__line'/>

            <div className='section-partners__logos'>
                {
                    Object.keys(logos).map(key => {
                        return <img className={`logosImg`} src={logos[key]} alt={key} key={key} />
                    })
                }
            </div>
        </div>
    )
}

export default SectionPartners;