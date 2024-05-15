import React from 'react';
import { Typography } from 'antd';
import './typography.css';
const { Title, Paragraph } = Typography;

export const TypographyMessage = ({ title = '', paragraph = '' }) => {
  return (
    <Typography style={{ marginLeft: 20, marginRight: 20 }}>
      <Title level={1} className='gradient-text'>
        {title}
      </Title>

      <Paragraph>{paragraph}</Paragraph>
    </Typography>
  );
};
