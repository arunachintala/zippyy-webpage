
import './FaqQuestions.css'
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const getItems = (panelStyle) => [
    {
        key: '1',
        label: <h4>What is the main purpose of the shipping platform?</h4>,
        children: <p>The platform is designed to assist business shippers in efficiently shipping their products worldwide by providing access to top global carriers at attractive shipping rates.</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h4>How can I download shipping labels from global carriers using this platform?</h4>,
        children: <p>How can I download shipping labels from global carriers using this platform?</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h4>What carriers are available on the platform</h4>,
        children: <p>What carriers are available on the platform?</p>,
        style: panelStyle,
    },
    {
        key: '4',
        label: <h4>Can I track the status of each shipment in detail?</h4>,
        children: <p>Can I track the status of each shipment in detail?</p>,
        style: panelStyle,
    },
];
const FaqQuestions = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <div className='faqcontainer'>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIconPosition="end"
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: token.colorBgContainer,
                }}
                items={getItems(panelStyle)}
            />
        </div>
    );
};
export default FaqQuestions;



