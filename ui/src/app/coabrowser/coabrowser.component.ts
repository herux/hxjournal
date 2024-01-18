// import { Component, OnInit, Inject } from '@angular/core';
import { Component, OnInit, EventEmitter, Output, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component';

@Component({
  selector: 'hxcoabrowse',
  templateUrl: './coabrowser.component.html',
  styleUrls: ['./coabrowser.component.css']
})
export class CoabrowserComponent extends ModalsComponent implements OnInit { // extends ModalsComponent

  constructor(@Inject(DOCUMENT) document: Document) { 
    super(document)
  }

  ngOnInit(): void {
    
  }

}
