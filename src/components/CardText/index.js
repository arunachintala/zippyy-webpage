
import React from 'react';
import './CardText.css';
import { Card } from 'antd';
const CardText = ({ text1, text2, imageUrl }) => {
  return (
    <Card style={{ height: '346px', width: '391px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100px' }}>
        <img style={{ borderBlock: '16px', width: '72px', height: '72px' }} src={imageUrl} alt="nothing" />
      </div>
      <div style={{ height: '200px', paddingRight: '30px' }}>
        <h1 style={{ fontSize: '22px', lineHeight: '28px' }}>{text1}</h1>
        <p1 style={{ fontSize: '16px', lineHeight: '32px', width: '324px' }}>{text2}</p1>
      </div>
    </Card>
  );
};

export default CardText; 
