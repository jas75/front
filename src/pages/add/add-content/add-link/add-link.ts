import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-link',
  templateUrl: 'add-link.html'
})
export class AddLinkPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
