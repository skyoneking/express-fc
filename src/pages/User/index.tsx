import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';

import PageContainer from '@/components/PageContainer';
import { DateTimeFormat, OperateType } from '@/constants/global';
import * as service from '@/services/todo/user';
import moment from 'moment';
import { useRequest } from 'umi';
import Operate from './Operate';
import styles from './style.less';

const User: React.FC = () => {
  const [userList, setUserList] = useState<API.User[]>([]);

  const { run: userFindAll, loading: userFindAllLoading } = useRequest(service.UsersControllerFindAll, {
    manual: true,
    onSuccess(data) {
      setUserList(data);
    },
  });
  const { run: userDelete, loading: userDeleteLoading } = useRequest(service.UsersControllerDelete, {
    manual: true,
    onSuccess() {
      userFindAll();
    },
  });
  const { run: userCreate, loading: userCreateLoading } = useRequest(service.UsersControllerCreate, {
    manual: true,
    onSuccess() {
      userFindAll();
    },
  });
  const { run: userUpdate, loading: userUpdateLoading } = useRequest(service.UsersControllerUpdate, {
    manual: true,
    onSuccess() {
      userFindAll();
    },
  });

  useEffect(() => {
    userFindAll();
  }, []);

  const columns: ColumnsType<API.User> = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '密码',
      dataIndex: 'password',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      align: 'center',
      render: (v) => moment(v).format(DateTimeFormat),
    },
    {
      title: '操作',
      dataIndex: 'operate',
      align: 'center',
      render: (_, record) => (
        <>
          <Operate userItem={record} operateType={OperateType.READ} />
          <Operate
            userItem={record}
            operateType={OperateType.WRITE}
            onOk={(userItem) => {
              userUpdate({ ...userItem, id: record.id });
            }}
          />
          <Button
            type="link"
            onClick={() => {
              userDelete({ id: String(record.id) });
            }}
          >
            删除
          </Button>
        </>
      ),
    },
  ];

  return (
    <PageContainer
      title="用户管理"
      routes={[
        { path: '/home', breadcrumbName: '首页' },
        { path: '/user', breadcrumbName: '用户列表' },
      ]}
    >
      <div className={styles.createBox}>
        <Operate
          operateType={OperateType.CREATE}
          onOk={(userItem) => {
            userCreate(userItem);
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={userList}
        loading={userFindAllLoading || userDeleteLoading || userCreateLoading || userUpdateLoading}
        rowKey="id"
      />
    </PageContainer>
  );
};
export default User;
