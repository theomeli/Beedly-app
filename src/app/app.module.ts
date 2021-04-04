import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
// import { AngularFirestore } from 'angularfire2/firestore';
// import * as admin from "firebase-admin";

import { MyApp } from "./app.component";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { FeedPage } from "../pages/feed/feed";

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvU1om-KW2QpA13WwLIYjplSkpY5iACOI",
  authDomain: "feedlyapp-9a2ee.firebaseapp.com",
  projectId: "feedlyapp-9a2ee",
  storageBucket: "feedlyapp-9a2ee.appspot.com",
  messagingSenderId: "916866036591",
  appId: "1:916866036591:web:8c6389bdc81ec055a3ee9a",
  measurementId: "G-99B90328KM",
};
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({
//   timestampsInSnapshots: true,
// });
// const adminApp = admin.initializeApp();
// const firestore = admin.firestore(adminApp);
// firestore.settings({ timestampsInSnapshots: true });

@NgModule({
  declarations: [MyApp, LoginPage, SignupPage, FeedPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, SignupPage, FeedPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
