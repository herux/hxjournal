import { Component, OnInit, EventEmitter, Output, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'hxmodals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Output() onOk: EventEmitter<any> = new EventEmitter();
  @Input() title: string;
  @Input() content: any;
  @Input() size: string;
  onCancel: EventEmitter<any> = new EventEmitter();
  style: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  okClicked(event: any) {
    this.onOk.emit();
  }

  cancelClicked(event: any) {
    this.onCancel.emit();
  }

  show() {
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
