import { Component, OnInit } from '@angular/core';
import { SHOES } from '../shoesCatalog';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  shoes = SHOES;
  constructor() { }

  ngOnInit() {
  }

}
