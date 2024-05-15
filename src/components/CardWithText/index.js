import { Row, Col, Card, Typography } from 'antd';

const { Title } = Typography;

const CardWithText = ({ item }) => {
  const { id, cardImg, title, description_1, description_2, description_3 } =
    item;
  const isEvenId = id % 2 === 0;

  return (
    <Card style={{ height: '100%', marginLeft: '10%', marginRight: '10%' }}>
      <Row gutter={[16, 16]} align='middle'>
        {/* Conditionally render columns based on id */}
        {isEvenId ? (
          <>
            {/* Right column with image */}
            <Col span={12}>
              <img
                src={cardImg}
                alt='Your Card'
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            {/* Left column with text */}
            <Col span={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Title level={3}>{title}</Title>
                <ul>
                  <li>{description_1}</li>
                  <li>{description_2}</li>
                  <li>{description_3}</li>
                </ul>
              </div>
            </Col>
          </>
        ) : (
          <>
            {/* Left column with text */}
            <Col span={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Title level={3}>{title}</Title>
                <ul>
                  <li>{description_1}</li>
                  <li>{description_2}</li>
                  <li>{description_3}</li>
                </ul>
              </div>
            </Col>
            {/* Right column with image */}
            <Col span={12}>
              <img
                src={cardImg}
                alt='Your Card'
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
          </>
        )}
      </Row>
    </Card>
  );
};

export default CardWithText;
