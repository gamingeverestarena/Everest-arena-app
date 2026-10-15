// firebase-messaging-sw.js
// Host this file at your site's ROOT (e.g. https://yourdomain.com/firebase-messaging-sw.js) —
// it must NOT be nested in a subfolder, or the browser Push API can't scope it correctly.
// This handles push notifications that arrive while the app isn't open/focused.
// Notifications received while the app IS open are handled in-page (see
// BACKEND.messaging.onMessage in the main file) and don't go through this file.

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDu2VfrRBPyddFwzYVYi9arc8vsW-zmlTs",
  authDomain: "everest-arena-app.firebaseapp.com",
  projectId: "everest-arena-app",
  storageBucket: "everest-arena-app.firebasestorage.app",
  messagingSenderId: "115479886036",
  appId: "1:115479886036:web:2cd8de130cee85179ca341",
  measurementId: "G-G4XJ4K9PT1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "Everest Arena";
  const body = (payload.notification && payload.notification.body) || "";
  self.registration.showNotification(title, {
    body,
    icon: undefined, // optional: point this at a hosted icon URL once you have one
    badge: undefined,
  });
});
