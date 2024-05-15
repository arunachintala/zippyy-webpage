import React from 'react';
import { Card } from 'antd';
import './Track.css';

const Track = ({ update, track, id, active, onClick }) => {
    return (
        <Card
            style={{ width: '320px', cursor: 'pointer', height: '180px', alignItems: 'center', backgroundColor: active ? 'red' : 'white' }}
            onClick={onClick}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '70%', height: 'auto' }}>
                    <img
                        src={track}
                        alt='Truck'
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '0 8px 8px 0',
                        }}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p>{update}</p>
                </div>
            </div>
        </Card>
    );
};

export default Track;
