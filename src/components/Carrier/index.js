
import React from 'react';
import './Carrier.css'
import { Card } from 'antd';
import Icon_7 from '../../assets/images/Icon_7.png';
import Icon_8 from '../../assets/images/Icon_8.png';
import Icon_9 from '../../assets/images/Icon_9.png';
import Icon_10 from '../../assets/images/Icon_10.png';
import Icon_11 from '../../assets/images/Icon_11.png';
import Icon_12 from '../../assets/images/Icon_12.png';
const Carrier = () => {
    return (
        <Card style={{ marginLeft: '65%', marginTop: '10px', height: '244px', width: '616px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ paddingBottom: '20px' }}>
                <h1>Choose from 100+ carriers<br />options</h1>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <img src={Icon_7} alt="empty" />
                <img src={Icon_8} alt="empty" />
                <img src={Icon_9} alt="empty" />
                <img src={Icon_10} alt="empty" />
                <img src={Icon_11} alt="empty" />
                <img src={Icon_12} alt="empty" />
            </div>
        </Card>
    )

}

export default Carrier;

