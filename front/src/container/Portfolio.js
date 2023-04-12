import React, { useState } from "react";
import { Card, Divider, Modal } from 'antd'
import { PortFolioData } from '../data/PortfolioData'

import { GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './Portfolio.css'

const Portfolio = () => {
  const { Meta } = Card
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Content">
      <h1 className='portfolioGeneral'>Portfolio</h1>
      <Divider />
      <div className='portfolioProjects'>
        {PortFolioData.map((data => {
          return (
            <Card
              className='portfolioCards'
              cover={
                <img
                  className='portfolioPictures'
                  alt="example"
                  src={data.picture}
                  onClick={() => window.open(data.linkRedirect, 'redirect')}
                />
              }
              actions={[
                <GithubOutlined key='source' onClick={() => window.open(data.codeSource, 'source')} />,
                <QuestionCircleOutlined key='details' onClick={showModal} />
              ]}
            >
              <Meta
                title={data.title}
                description={data.description}
              />
              <Modal title={data.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{data.title}</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </Card>
          )
        }))}
      </div>
    </div>
  );
};

export default Portfolio;
