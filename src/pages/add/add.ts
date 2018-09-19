import { Component } from '@angular/core';
import {ModalController, NavController, ViewController} from 'ionic-angular';
import {AddLinkPage} from "./add-content/add-link/add-link";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }

  linkTab = AddLinkPage;


  dismiss() {
    this.viewCtrl.dismiss();
  }


  openModal(tab) {
    let profileModal = this.modalCtrl.create(tab, { userId: 8675309 });
    profileModal.present();
  }


}
