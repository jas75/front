import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-text',
  templateUrl: 'add-text.html'
})
export class AddTextPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  logForm() {
    console.log("logged")
  }

}
