import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string
  @Input() data: any[]
  
  constructor() { }

  ngOnInit(): void {
  }

}
