import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from '../shoes.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number;
  shoes = [];
  constructor(public activatedRoute: ActivatedRoute, public shoesService: ShoesService) {
    this.shoes = shoesService.getShoes();
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.shoes);
  }

  ngOnInit() {
  }

}
