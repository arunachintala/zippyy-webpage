import React from 'react';
import "./Footer.css"
import truck from "../../assets/images/Truck.png"
import { Card } from 'antd';

const Footer = () => {
    return (
        <Card style={{ marginLeft: '5%', marginRight: '5%', backgroundColor: 'black', height: '300px', borderRadius: '25px', marginBottom: '300px', marginTop: '100px' }}>
            <div className='card-row'>
                <div style={{ color: 'white', height: '250px', width: '50%', marginInline: '48px' }}>
                    <h1>Shipping Redefined:<br />Smarter,Faster,Better.</h1>
                    <p1>Streamline your Shipping process from Checkout to returns and surpass customer expactations by providing a contemporary delivery experience.</p1>
                    <div style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }}>
                        <button style={{ color: 'white', backgroundColor: '#F44E32', borderRadius: '24px', padding: '11px 36px', margin: '10px' }}>Start for free</button>
                        <button className='start-for-free-button'>Start for free</button>
                    </div>
                </div>
                <div style={{ height: '250px', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '555px', height: '280px', marginInline: '20px' }} alt="empty" src={truck} />
                </div>
            </div>

        </Card>
    );
}
export default Footer;
