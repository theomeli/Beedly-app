import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ToastController,
  AlertController,
} from "ionic-angular";
import firebase from "firebase";
import { FeedPage } from "../feed/feed";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {}

  signup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((user: firebase.User) => {
        console.log(user);

        user
          .updateProfile({
            displayName: this.name,
            photoURL: "",
          })
          .then(() => {
            console.log("Updated");
            this.alertCtrl
              .create({
                title: "Account Created",
                message: "Your account has been created successfully",
                buttons: [
                  {
                    text: "OK",
                    handler: () => {
                      this.navCtrl.setRoot(FeedPage);
                    },
                  },
                ],
              })
              .present();
          })
          .catch((err) => {
            console.log(err);
            this.toastCtrl
              .create({
                message: err.message,
                duration: 3000,
              })
              .present();
          });
      })
      .catch((err) => {
        console.log(err);
        this.toastCtrl
          .create({
            message: err.message,
            duration: 3000,
          })
          .present();
      });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
