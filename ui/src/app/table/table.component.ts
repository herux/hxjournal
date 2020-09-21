import { Component, Input } from '@angular/core';

@Component({
  selector: 'hxtable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() title: string;

  constructor() {
   }


}
