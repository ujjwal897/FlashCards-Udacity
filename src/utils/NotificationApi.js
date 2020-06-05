import { AsyncStorage } from "react-native";
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const MY_NOTIFICATION_KEY = "Jaspreet-37349Notifications";

export const clearNotification = () => {
  return AsyncStorage.removeItem(MY_NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};


export const createNotification = () => ({
  title: "You missed to attempt your daily quiz today!",
  body: "Remember! Regular Study is a key to Success.",
  ios: {
    sound: false
  },
  android: {
    sound: false,
    vibrate: false,
    priority: "high",
    sticky: false
  }
});


export const setNotification = () => {  
  return AsyncStorage.getItem(MY_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(2);
            tomorrow.setMinutes(30);
            console.log("Notification Set")
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(MY_NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
      else
      {
        console.log("Notification Already Set")
      }
    });
};
