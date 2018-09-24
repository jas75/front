import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bug',
  templateUrl: 'bug.html'
})
export class BugPage {

  tabSelected: number;


  indexScroll: number = 0;
  constructor(public navCtrl: NavController) {
    this.tabSelected = 2;
  }


  tabSelect(selection: number) {
    this.tabSelected = selection;
  }

  onScrollUp(event) {
    if(event.scrollTop < this.indexScroll) {
      console.log("scroll up !");
      var bandeau = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = '50px'
    }
    else {
      console.log("on scroll down");
      var bandeau = document.getElementsByClassName('bandeau')[0];
      bandeau.style.marginTop = 'unset';
    }
    this.indexScroll = event.scrollTop;
  }


}
