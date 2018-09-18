import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
