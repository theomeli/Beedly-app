import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import firebase from "firebase";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
