import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'menuleft',
  templateUrl: './menuleft.component.html',
  styleUrls: ['./menuleft.component.css']
})
export class MenuleftComponent implements OnInit {

  menus = [
    new Menu(1, 'Dashboard', '/dashboard', 'nav-icon fas fa-tachometer-alt'),
    new Menu(2, 'Journal', '/journal', 'nav-icon fas fa-tachometer-alt'),
    new Menu(3, 'COA', '/coa', 'nav-icon fas fa-tachometer-alt'),
    new Menu(4, 'General Ledger', '/gl', 'nav-icon fas fa-tachometer-alt'),
    new Menu(5, 'Balance Sheet', '/bs', 'nav-icon fas fa-tachometer-alt'),
    new Menu(5, 'Income Statement', '/is', 'nav-icon fas fa-tachometer-alt'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
