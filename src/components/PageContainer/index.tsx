import React from 'react';
import { Link } from 'umi';
import { PageHeader, Card } from 'antd';
import type { BreadcrumbProps } from 'antd';
import type { Route } from 'antd/lib/breadcrumb/Breadcrumb';

import styles from './style.less';

interface Props {
  title?: string;
  routes?: Route[];
  footer?: React.ReactNode;
}

const itemRender: BreadcrumbProps['itemRender'] = (route, params, routes) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );
};

const PageContainer: React.FC<Props> = (props) => {
  const { title, routes, footer, children } = props;

  return (
    <div className={styles.pageContainer}>
      <PageHeader title={title} breadcrumb={{ routes, itemRender }} />
      <Card className={styles.contentContainter}>{children}</Card>
      <div className={styles.footerContainer}>{footer}</div>
    </div>
  );
};
export default PageContainer;
