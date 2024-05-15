import { Card } from 'antd';

const MyCard = () => {
  return (
    <Card
      title='Card title'
      bordered={false}
      style={{ flex: 'display', alignItems: 'center', width: '100%' }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default MyCard;
