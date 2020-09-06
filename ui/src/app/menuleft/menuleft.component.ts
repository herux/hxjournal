import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'menuleft',
  templateUrl: './menuleft.component.html',
  styleUrls: ['./menuleft.component.css']
})
export class MenuleftComponent implements OnInit {

  menus = [
    new Menu(1, 'Dashboard', '/dashboard'),
    new Menu(2, 'Journal', '/journal'),
    new Menu(3, 'COA', '/coa'),
    new Menu(4, 'General Ledger', '/gl'),
    new Menu(5, 'Balance Sheet', '/bs'),
    new Menu(5, 'Income Statement', '/is'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
