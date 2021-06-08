import { notification } from 'antd';
import { IconType } from 'antd/lib/notification';

const pushNotification = (message: string, type?: IconType | any): void => {
  notification.open({
    message,
    duration: 2,
    placement: 'topRight',
    type,
  });
};

export default pushNotification;
