import React from 'react';
import './Services.css';

const servicesData = [
  {
    img: 'vacuumbag.webp',
    description: ' Vacuum Packing \n✅ Keeps food fresh longer \n✅ Isolated from bacteria and viruses \n✅ Locks in flavor and nutrients \n✅ Maintains color and taste',
    reverse: false,
  },
  {
    img: 'sealpack.webp',
    description: 'Seal Packing \n✅ Airtight seal keeps contents 100% moisture-free \n✅ Keeps dry goods crisp and fresh longer \n✅ Prevents contamination and leaks \n✅ Suitable for liquids and solids',
    reverse: true,
  },
  {
    img: 'bubblewrap.jpg',
    description: 'Bubble Wrapping \n✅ Cushions fragile items against impact \n✅ Protects from scratches and dents \n✅ Ideal for shipping and storage. \n✅ Adds an extra layer of security during transit',
    reverse: false,
  },
  {
    img: 'clothespack.webp',
    description: 'Clothes Packing \n✅ Compact design saves storage space \n✅ Keeps garments clean and dust-free \n✅ Suitable for delicate and heavy fabrics. \n✅ Preserves fabric quality during shipping and handling',
    reverse: true,
  },
  {
    img: 'shrink wrap.jpg',
    description: 'Customize Packing \n✅ Tailored solutions to fit any product shape and size \n✅ Enhances brand identity with personalized packaging \n✅ Flexible designs for retail, gifts, or bulk orders \n✅ Ensures compliance with industry-specific packaging standards',
    reverse: false,
  },
];
const Services = () => {
    return (
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-block ${service.reverse ? 'reverse' : ''}`}
          >
            <img src={service.img} alt={`Service ${index + 1}`} />
            <div className="description-text">
              {service.description.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p> 
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };


export default Services;
