import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsapiService} from "../../../../services/newsapi.service";
import {Article} from "../../../../interfaces/article";

@Component({
  selector: 'page-bug-news',
  templateUrl: 'bug-news.html'
})
export class BugNewsPage {

  articles: Array<Article>;

  constructor(public navCtrl: NavController, public newsService: NewsapiService) {
    this.newsService.getLatestNews().subscribe(data => {
      this.articles = data.articles;
      console.log(this.articles);
    })
  }




}
