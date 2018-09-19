import { Component } from '@angular/core';
import {ModalController, NavController, ViewController} from 'ionic-angular';
import {AddLinkPage} from "./add-content/add-link/add-link";
import {AddTextPage} from "./add-content/add-text/add-text";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }

  linkTab = AddLinkPage;
  textTab = AddTextPage;


  dismiss() {
    this.viewCtrl.dismiss();
  }


  openModal(tab) {
    let profileModal = this.modalCtrl.create(tab, { userId: 8675309 });
    profileModal.present();
  }


}
