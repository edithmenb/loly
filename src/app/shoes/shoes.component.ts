import { ShoesService } from './../shoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes = [];
  i: number = 0;
  constructor(public router: Router, public shoesService: ShoesService) {
   this.shoes = shoesService.getShoes();
  }
  ngOnInit() {
   
  }

  navergarAArticulo2(name: string, i: number){
    this.i = i;
    this.router.navigate(['article', i]);
  }

}
