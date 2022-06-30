import { initNotification } from '@/utils/notification';
import { useBoolean } from 'ahooks';
import { message, Modal } from 'antd';
import React, { useEffect } from 'react';
import socket from '@/utils//websocket'

interface Props {
  title?: string;
  options?: NotificationOptions | undefined;
}

interface NotificationApi {
  notification?: Notification;
  notify?: (title?: string, options?: NotificationOptions | undefined) => Notification;
}

const defaultTitle = '代办通知';

// 暴露的基础api
export const notificationApi: NotificationApi = {
  notification: undefined,
  notify(title = defaultTitle, options) {
    notificationApi.notification = new window.Notification(title, options);
    return notificationApi.notification;
  },
};

const Notification: React.FC<Props> = ({ title = defaultTitle, options }) => {
  const [isOpenModal, { setTrue: openModal, setFalse: closeModal }] = useBoolean(false);

  useEffect(() => {
    console.log(11111111111);

    socket.emit('start')

    socket.on('startedTodo', (d) => {
        console.log(22222, d)
    })
  }, [])

  useEffect(() => {
    initNotification().then((result) => {
      if (!result) {
        message.error('未开启nitification');
      } else {
        Object.assign(notificationApi, {
          notify() {
            openModal();
            notificationApi.notification = new window.Notification(title, options);
            return notificationApi.notification;
          },
        });
      }
    });
  }, []);

  return (
    <div>
      <Modal title={title} visible={isOpenModal} onCancel={closeModal} onOk={closeModal}>
        Notification
      </Modal>
    </div>
  );
};
export default Notification;
