import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import api from'./api';


const PUSH_ENDPOINT = 'http://192.168.100.70:3333/notification/token';

const registerForPushNotifications = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      alert('No notification permissions!');
      return;
    }
  
    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
  
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // return fetch(PUSH_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     token: {
    //       value: token,
    //     }
    //   }),
    // });

    return api.post('notification/token', {token: { value: token }});

  }
  export default registerForPushNotifications;