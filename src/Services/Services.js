import './services.css';
import webDevelopmentImage from '../assets/images/web development bg.jpg';
import photoEditingImage from '../assets/images/photoshop bg.jpg';
import graphcsDesignImage from '../assets/images/cedric-streit-H7qMwOxf6Z8-unsplash.jpg';

const services = [
    {
        imageSrc: webDevelopmentImage,
        title: 'Web Development',
        description: 'Crafting modern, responsive websites using the latest web technologies. Our web development service ensures a seamless user experience with high performance and security.',
        hashtags: ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'React', 'JQuery', 'Library Generation']
      },
      {
        imageSrc: photoEditingImage,
        title: 'Photo Editing',
        description: 'Enhance your images with professional photo editing. From basic adjustments to complex retouching, our services make your photos stand out with quality and precision.',
        hashtags: ['Photoshop', 'Conceptual Arts', 'Removing Background', 'Filter Images']
      },
      {
        imageSrc: graphcsDesignImage,
        title: 'Graphics Designing',
        description: 'Creating visually stunning graphics for your brand. Our design services include logos, banners, and marketing materials, ensuring your brand is memorable and impactful.',
        hashtags: ['Photoshop', 'Illustrator', 'Banner Design', 'Logo Design']
      }
];

const ServiceBox = ({ service }) => (
    <div className='service-box pad-0-5'>
        <div className='service-image'>
            <img src={service.imageSrc} alt={service.title} />
        </div>
        <div className='service-head pad-0-5'>
            {service.title}
        </div>
        <div className='service-detail pad-0-5'>
            <p>{service.description}</p>
            <div className='service-hashtags d-flex gap-1 pad-y-1'>
                {service.hashtags.map((hashtag, index) => (
                    <div className='pad-y-0-5s pad-x-1' key={index}>{hashtag}</div>
                ))}
            </div>
        </div>
    </div>
);

function Services() {
    return (
        <div className="Services">
            <div className="services-container d-flex aic jcc h-100 pad-3">
                <div className='services-wrapper gap-5 pad-2'>
                    {services.map((service, index) => (
                        <ServiceBox key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;