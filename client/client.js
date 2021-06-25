const publicVapidKey = process.env.REACT_APP_PUBLIC_VAPID_KEY;

if ("serviceWorkerRegistration" in navigator) {
  send().catch((err) => console.error(err));
}

async function send() {
  console.log("registering service worker...");
  const register = await navigator.serviceWorker.register(
    "/client/src/service-worker.js",
    {
      scope: "/",
    }
  );
  console.log("service worker registered");

  console.log("Registering Push");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
