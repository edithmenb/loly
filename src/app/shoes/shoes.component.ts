import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes= [
    {
      img: "Sara.jpg",
      name: "SARA",
      price: 749.00
    },
    {
      img: "dayana.jpg",
      name: "DAYANA",
      price: 719.00
    },
    {
      img: "naomi.jpg",
      name: "NAOMI",
      price: 749.00
    },
    {
      img: "juliana.jpg",
      name: "JULIANA",
      price: 749.00
    },
    {
      img: "fabiana.jpg",
      name: "FABIANA",
      price: 749.00
    }
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navergarAArticulo2(name:string){
    this.router.navigate(['article', name]);
  }

}
