import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Helmet } from 'umi';

const { Header, Content } = Layout;

enum MenuKey {
	Home = 'home',
	Todo = 'todo',
}

const menuList = [
	{
		key: MenuKey.Home,
		name: MenuKey.Home,
		path: '/home',
	},
	{
		key: MenuKey.Todo,
		name: MenuKey.Todo,
		path: '/todoList',
	},
];

const BaseLayout: React.FC = ({ children }) => {
	const [menuKey, setMenuKey] = useState<string>(MenuKey.Home);
	return (
		<Layout style={{ backgroundColor: '#fff' }}>
			<Helmet>
				<title>{menuKey}</title>
			</Helmet>
			<Header style={{ backgroundColor: '#fff' }}>
				<Menu
					onSelect={({ key }) => {
						setMenuKey(key);
					}}
					selectedKeys={[menuKey]}
					mode="horizontal"
				>
					{menuList.map(({ key, name, path }) => (
						<Menu.Item key={key}>
							<Link to={path}>{name}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Header>
			<Content style={{ padding: '0 20px' }}>{children}</Content>
		</Layout>
	);
};
export default BaseLayout;
