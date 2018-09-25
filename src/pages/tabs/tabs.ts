import {Component, ViewChild} from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {BugPage} from "../bug/bug";
import {ModalController} from "ionic-angular";
import {AddPage} from "../add/add";
import {ProfilePage} from "../profile/profile";

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AddPage;
  tab4Root = BugPage;
  tab5Root = ProfilePage


  constructor(public modalCtrl: ModalController) {

  }

  openModal() {
    let profileModal = this.modalCtrl.create(this.tab3Root, { userId: 8675309 });
    profileModal.present();
  }
}
