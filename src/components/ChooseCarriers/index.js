import React from 'react';
import './ChooseCarriers.css'
import { Card } from 'antd';
import Icon_1 from '../../assets/images/Icon_1.png';
import Icon_2 from '../../assets/images/Icon_2.png';
import Icon_3 from '../../assets/images/Icon_3.png';
import Icon_4 from '../../assets/images/Icon_4.png';
import Icon_5 from '../../assets/images/Icon_5.png';
import Icon_6 from '../../assets/images/Icon_6.png';
const Carrier = () => {
    return (
        <Card style={{ marginLeft: '10px', marginTop: '10px', height: '244px', width: '616px' }}>
            <div style={{ paddingBottom: '20px' }}>
                <h1>Choose from 50+<br />integrations</h1>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <img src={Icon_1} alt="empty" />
                <img src={Icon_2} alt="empty" />
                <img src={Icon_3} alt="empty" />
                <img src={Icon_4} alt="empty" />
                <img src={Icon_5} alt="empty" />
                <img src={Icon_6} alt="empty" />
            </div>
        </Card>
    )

}

export default Carrier;
