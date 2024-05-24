import MyImage from '../assets/images/My professional photo 2.png';
import './me.css';

function Me() {
    return (
        <div className="Me">
            <div className="me-container d-flex aic jcc h-100 flex-direction-col pad-6 gap-6">
                <div className='me-details-container font-style-italic pad-x-10'>
                    <p className='text-center'>
                    Hello, I'm  <b style={{color: 'var(--color1-1)'}}>Abrar Patel</b>, a versatile professional with a passion for creativity and technology. I work as a  <span style={{color: 'var(--color1-1)'}}>web developer</span>,  <span style={{color: 'var(--color1-1)'}}>graphics designer</span>, and  <span style={{color: 'var(--color1-1)'}}>freelancer</span>, with a keen interest in conceptual art and photo editing. With professional experience as a full-stack web developer, I specialize in  <span style={{color: 'var(--color1-1)'}}>Javascript</span> and <span style={{color: 'var(--color1-1)'}}>PHP</span>, delivering dynamic and engaging web solutions.
                    </p>
                </div>
                <div className="me-image-container d-flex jcc">
                    <img src={MyImage} alt='My Image' className='user-select-none mar-t-1 mar-l-1'/>
                </div>
            </div>
        </div>
    );
}

export default Me;