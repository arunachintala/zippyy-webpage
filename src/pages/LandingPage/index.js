import React, { useState } from 'react';
import { Banner, Navbar } from '../../components';
import { TypographyMessage } from '../../components/Typography';
import { Card, Row, Col } from 'antd';


import cardImg_1 from '../../assets/images/Frame 1511127641.svg';
import cardImg_3 from '../../assets/images/Group 1321314553.svg';
import cardImg_4 from '../../assets/images/Tracking_detailed.png';
import cardImg_5 from '../../assets/images/Sign up - Add your details.jpg';
import cardImg_2 from '../../assets/images/Orders - Default Compare view.svg';
import CardWithText from '../../components/CardWithText';
import GlobalCarries from '../../components/GlobalCarries';

import upsLogo from '../../assets/images/ups.svg';
import uhplLogo from '../../assets/images/dhl.svg';
import uspsLogo from '../../assets/images/usps.svg';
import fedexLogo from '../../assets/images/fedex.svg';
import Footer from '../../components/Footer';
import CardText from '../../components/CardText';
import ChooseCarriers from '../../components/ChooseCarriers';
import Carrier from '../../components/Carrier';
import image1 from '../../assets/images/efficient 1.png';
import image2 from '../../assets/images/procedure 1.png';
import image3 from '../../assets/images/management 1.png';
import image4 from '../../assets/images/cart 1.png';
import group from "../../assets/images/group.png";
import InputField from '../../components/InputField';
import arrow from '../../assets/images/arrow1.png';
import FaqQuestions from '../../components/FaqQuestions';
import truck6 from '../../assets/images/truck6.png';
import truck2 from '../../assets/images/truck2.png';
import truck3 from '../../assets/images/truck3.png';
import Track from '../../components/Track';
const cardFlow = [
  {
    id: 0,
    title: 'Connect checkout',
    description_1:
      'Empower customers with the freedom to select preferred carriers ',
    description_2: 'Streamline carrier options through automated rules',
    description_3:
      'Minimize cart abandonments by offering flexible shipping choices',
    cardImg: cardImg_1,
  },
  {
    id: 1,
    title: 'Connect to Get Orders',
    description_1:
      'Empower customers with the freedom to select preferred carriers ',
    description_2: 'Streamline carrier options through automated rules',
    description_3:
      'Minimize cart abandonments by offering flexible shipping choices',
    cardImg: cardImg_2,
  },
  {
    id: 2,
    title: 'Compare carriers and Ship',
    description_1:
      'Empower customers with the freedom to select preferred carriers ',
    description_2: 'Streamline carrier options through automated rules',
    description_3:
      'Minimize cart abandonments by offering flexible shipping choices',
    cardImg: cardImg_3,
  },
  {
    id: 3,
    title: 'Track',
    description_1:
      'Empower customers with the freedom to select preferred carriers ',
    description_2: 'Streamline carrier options through automated rules',
    description_3:
      'Minimize cart abandonments by offering flexible shipping choices',
    cardImg: cardImg_4,
  },
  {
    id: 4,
    title: 'Schedule returns',
    description_1:
      'Empower customers with the freedom to select preferred carriers ',
    description_2: 'Streamline carrier options through automated rules',
    description_3:
      'Minimize cart abandonments by offering flexible shipping choices',
    cardImg: cardImg_5,
  },
];
// const { Title, Text } = Typography;

function LandingPage() {
  const [activeTab, setActiveTab] = useState(1); // State to track active tab

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <Navbar />
      <Banner children={

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '40px' }}>Experience Zippyy Shipping</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Track update="Quick quote" track={truck6} id='1'
              active={activeTab === 1}
              onClick={() => handleTabClick(1)}
            />
            <Track update="Track" track={truck2} id='2'
              active={activeTab === 2}
              onClick={() => handleTabClick(2)}
            />
            <Track update="Ship" track={truck3} id='3'
              active={activeTab === 3}
              onClick={() => handleTabClick(3)}
            />
          </div>
        </div>
      } />

      <div style={{ margintop: '300px' }}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Calculate Zippyy Shipping Rates</h2>
        </div>

        <div style={{ margintop: '300px', display: 'flex', flexDirection: 'row', marginLeft: '60px', marginRight: '60px' }}>
          <InputField type="text" placeholder="From" />
          <img style={{ marginTop: '20px', width: '72px', height: '42px' }} src={arrow} alt="nothing" />
          <InputField type="text" placeholder="To" />
          <button style={{ width: '372px', height: '37px', color: 'white', backgroundColor: '#F44E32', borderRadius: '32px', marginTop: '20px', borderBlockColor: 'white' }}>GetRates</button>
        </div>

      </div>


      <TypographyMessage
        title={'Why Choose Zippyy?'}
        paragraph={
          'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.'
        }
      />
      <>
        <Row gutter={[16, 16]} style={{ margin: '10' }}>
          {cardFlow.map((res, index) => (
            <Col key={index} span={24} style={{ padding: '0 1rem 1rem 0' }}>
              <CardWithText item={res} />
            </Col>
          ))}
        </Row>
      </>
      <TypographyMessage title='Get best discounts from top global carriers' />

      <Card style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* First Row */}
        <Row gutter={[16, 16]} justify='center'>
          <Col span={12}>
            <GlobalCarries title='UPS' logo={upsLogo} />
          </Col>
          <Col span={12}>
            <GlobalCarries title='UHPL' logo={uhplLogo} />
          </Col>
        </Row>

        {/* Second Row */}
        <Row gutter={[16, 16]} justify='center' style={{ marginTop: '1rem' }}>
          <Col span={12}>
            <GlobalCarries title='USPS' logo={uspsLogo} />
          </Col>
          <Col span={12}>
            <GlobalCarries title='FedeX' logo={fedexLogo} />
          </Col>
        </Row>
      </Card>

      <TypographyMessage title='Connect your sales channels and access 100+ carriers options' />
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>

          <ChooseCarriers />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={group} alt="nothing" style={{ width: '320px', height: '216px', marginLeft: '150px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
          <Carrier />
        </div>
      </div>
      <TypographyMessage title='We help your brand in going global' />
      <div style={{ marginLeft: '103px', display: 'flex', flexDirection: 'row', gap: '20px', paddingBottom: '20px', marginRight: '103px', marginBottom: '20px' }}>
        <CardText text1='Enhance Efficiency' text2='Automate routine shipping tasks to minimize errors, save time, and boost revenue.' imageUrl={image1} />
        <CardText text1='Optimize Workflows' text2='Streamline processes for quicker order fulfilment, utilizing fewer resources.' imageUrl={image2} />
        <CardText text1='Expand Your Business' text2='Increase shipping capabilities to ensure customer retention through an outstanding experience.' imageUrl={image3} />
      </div>
      <div style={{ marginBottom: '150px', display: 'flex', flexDirection: 'row', marginRight: '103px', gap: '20px', marginLeft: '103px' }}>
        <CardText text1='Rapid Global Expansion' text2='Effortlessly activate carriers, automate customs documentation, and swiftly enter new markets.' imageUrl={image4} />
        <CardText text1='Decrease Support Requests' text2='Deliver proactive notifications to satisfy customers, reducing the need for extensive email and WISMO call responses.' imageUrl={image4} />
        <CardText text1='Fortify Brand Presence' text2='Establish a uniform brand experience at every interaction point to foster customer loyalty.' imageUrl={image4} />
      </div>
      {/* <Carrier text1="Choose from 100+ carriers" text2="options" imageUrl1={Icon_7} imageUrl2={Icon_8} imageUrl3={Icon_9} imageUrl4={Icon_10} imageUrl5={Icon_11} imageUrl6={Icon_12} /> */}
      <TypographyMessage style={{ position: 'center' }} title='Frequently Asked Questions' />
      <FaqQuestions />

      <Footer />
    </>
  );
}

export default LandingPage;
