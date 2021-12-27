import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'hxmodals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Output() onOk: EventEmitter<any> = new EventEmitter();
  onCancel: EventEmitter<any> = new EventEmitter();
  style: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  okClicked() {
    this.onOk.emit();
  }

  cancelClicked() {
    this.onCancel.emit();
  }

  show() {
    console.log('component show');
    this.document.body.classList.add('modal-open');
    this.style = { 'display': 'block' };
  }

  hide() {
    this.document.body.classList.remove('modal-open');
    this.style = { 'display': 'none' };
  }

  ngOnInit(): void {
  }

}
