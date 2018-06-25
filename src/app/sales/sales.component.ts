import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shoes.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  shoes = [];
  constructor(public shoesService: ShoesService) { 
    this.shoes = shoesService.getShoes();
  }

  ngOnInit() {
  }

}
