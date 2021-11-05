import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'hxmenuleft',
  templateUrl: './menuleft.component.html',
  styleUrls: ['./menuleft.component.css']
})
export class MenuleftComponent implements OnInit {

  menus = [
    new Menu(0, 'Finance', '', '', 'nav-header'),
    new Menu(1, 'Dashboard', '/dashboard', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(2, 'Journal', '/journal', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(3, 'COA', '/coa', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(4, 'General Ledger', '/gl', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(5, 'Balance Sheet', '/bs', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(6, 'Income Statement', '/is', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(0, 'Transaction', '', '', 'nav-header'),
    new Menu(7, 'Student', '/student', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
    new Menu(8, 'Student Payment', '/studentpayment', 'nav-icon fas fa-tachometer-alt', 'nav-item'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
