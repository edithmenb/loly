import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SHOES } from '../shoesCatalog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number;
  shoes = SHOES;
  constructor(public activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.shoes);
  }

  ngOnInit() {
  }

}
