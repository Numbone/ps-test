'use client';

import LogoIcon from '@/shared/assets/icon/logo.svg';
import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Space, Typography } from 'antd';
import './Header.scss';
const { Title } = Typography;

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <LogoIcon/>
        <Title level={4} className="header__title">
          Консоль управления
        </Title>
      </div>

      <Space>
        <Avatar/>
        <Flex>
           <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>A</Avatar>
            <Flex>

            </Flex>
        </Flex>
      </Space>
    </header>
  );
}
