import { Component, OnInit } from '@angular/core';
import { BagsService } from '../bags.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
  bags = [];
  
  constructor(public bagsService: BagsService) { 
    this.bags = this.bagsService.getBags();
  }

  ngOnInit() {
  }

  
}
