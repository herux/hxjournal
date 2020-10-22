import { Component, Input, OnInit } from '@angular/core';
import { Toolaction } from '../models/toolaction';

@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string
  @Input() data: any[]
  @Input() toolactions: Toolaction[]

  constructor() {}

  ngOnInit(): void {
    console.log('data: ', this.toolactions); 
  }

  

}
