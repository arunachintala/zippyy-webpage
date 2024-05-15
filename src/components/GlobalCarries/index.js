import React from 'react';
import { Avatar, Card } from 'antd';
import './GlobalCarries.css';

const { Meta } = Card;
const GlobalCarries = ({
  title = '',
  sublist = [],
  refLink = '',
  logo = '',
}) => {
  return (
    <Card style={{ width: 500, backgroundColor: '#F8F8F8' }}>
      <Meta
        avatar={<Avatar src={logo} />}
        title={title}
        description={
          <div>
            <ul>
              <li>⁠Up to 77% off on UPS®️ Ground shipments</li>
              <li>⁠Up to 73% off on UPS 2nd Day Air®️ service</li>
            </ul>
            <a href='/viewMore'>View More</a>
          </div>
        }
      />
    </Card>
  );
};

export default GlobalCarries;
