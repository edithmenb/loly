import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SHOES } from '../shoesCatalog';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes = SHOES;
  i: number = 0;
  constructor(public router: Router) {
   
  }
  ngOnInit() {
   
  }

  navergarAArticulo2(name: string, i: number){
    this.i = i;
    this.router.navigate(['article', i]);
  }

}
