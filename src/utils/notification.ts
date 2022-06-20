export const initNotification = async () => {
  if (!Notification) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  const result = await Notification.requestPermission();
  return result === 'granted';
};
