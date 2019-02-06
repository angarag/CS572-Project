import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})

export class ResultItemComponent implements OnInit {

  @ Input() result;
  @ Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
