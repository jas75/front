import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  tabSelected: number = 1;
  constructor(public navCtrl: NavController) {

  }

  tabSelect(selection: number) {
    this.tabSelected = selection;
  }

}
