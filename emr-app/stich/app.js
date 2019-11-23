import { Stitch } from "mongodb-stitch-browser-sdk";

// Add your Stitch app's App ID
const APP_ID = "hackwester-emr-iaxfo";

// Initialize the app client
const app =titch.hasAppClient(APP_ID)
? Stitch.getAppClient(APP_ID)
: Stitch.initializeAppClient(APP_ID);

export { app };