import Notification from '@/components/Notification';
import { AliwangwangOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Layout, Menu } from 'antd';
import Chinese from 'antd/lib/locale/zh_CN';
import cls from 'classnames';
import React, { useEffect, useState } from 'react';
import { Helmet, history, Link, useLocation } from 'umi';

import { clearAuthorization } from '@/constants/auth';
import styles from './style.less';

const { Sider, Content, Header } = Layout;

enum MenuKey {
  Home = 'home',
  Todo = 'todo',
  User = 'user',
  Strategy = 'strategy',
}

const menuList = [
  {
    key: MenuKey.Todo,
    name: MenuKey.Todo,
    path: '/todo',
  },
  {
    key: MenuKey.User,
    name: MenuKey.User,
    path: '/user',
  },
  {
    key: MenuKey.Strategy,
    name: MenuKey.Strategy,
    path: '/strategy',
  },
];

const BaseLayout: React.FC = ({ children }) => {
  const location: any = useLocation();
  const [menuKey, setMenuKey] = useState<string>('');

  useEffect(() => {
    let curKey = MenuKey.Todo;
    for (const item of menuList) {
      if (location.pathname === item.path) {
        curKey = item.key;
      }
    }
    setMenuKey(curKey);
  }, [location.pathname]);

  return (
    <ConfigProvider locale={Chinese}>
      <Layout style={{ minHeight: '100vh' }}>
        <Notification />
        <Header className={cls({ [styles.header]: true, 'flex justify-between items-center': true })}>
          <AliwangwangOutlined className="text-2xl" />
          <Dropdown
            overlay={
              <Menu
                className="min-w-100"
                items={[
                  {
                    key: '1',
                    label: (
                      <div
                        onClick={() => {
                          clearAuthorization();
                          history.push('/login');
                        }}
                      >
                        退出
                      </div>
                    ),
                  },
                ]}
              />
            }
            placement="bottom"
            arrow
          >
            <UserOutlined className="text-xl" />
          </Dropdown>
        </Header>
        <Layout style={{ backgroundColor: '#fff' }}>
          <Helmet>
            <title>jcl</title>
          </Helmet>
          <Sider className={styles.sider}>
            <Menu
              onSelect={({ key }) => {
                setMenuKey(key);
              }}
              selectedKeys={[menuKey]}
              mode="inline"
            >
              {menuList.map(({ key, name, path }) => (
                <Menu.Item key={key}>
                  <Link to={path}>{name}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 20px' }}>{children}</Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default BaseLayout;
