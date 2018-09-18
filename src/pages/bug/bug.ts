import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bug',
  templateUrl: 'bug.html'
})
export class BugPage {

  tabSelected: number;

  constructor(public navCtrl: NavController) {
    this.tabSelected = 2;
  }


  tabSelect(selection: number) {
    this.tabSelected = selection;
  }



}
