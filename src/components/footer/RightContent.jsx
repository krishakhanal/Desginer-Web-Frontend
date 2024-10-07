import React from 'react';


import './footer.css'


const RightContent = () => {
    const cardData = [
        {
            header: 'Our Location',
            p1: 'Sunny Isles Beach',
            p2: 'Florida 33160',
            p3:'United States'

            



        },
        {
            header: 'CustomerCare',
            p1: '010-020-0340',
            p2: '090-080-0760',
            p3:'info@company.com'
        }
      
    ];

    return (
        <div className="about-company">
            {cardData.map((item, index) => (
                // <RightCard key={index} header={item.header} p1={item.p1}  p2={item.p2} p3={item.p3}/>
                <div className='right-card'>
                    <h3>{item.header}</h3>
                    <p>{item.p1}</p>
                    <p>{item.p2}</p>
                    <p>{item.p3}</p>
               
                   
            </div>
            
            ))}
        </div>
    ); 
};

export default RightContent ;
