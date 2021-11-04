import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }
  
    public removePropExceptsArray(objects: any = [], exceptProps: any = []) {
        for (let i = 0; i < objects.length; i++) {
          const object = objects[i];
          this.removePropExcepts(object, exceptProps);
        }
    }    

    public renamePropArray(objects: any = [], from: string, to: string) {
        for (let i = 0; i < objects.length; i++) {
          const object = objects[i];
          this.renameProp(object, from, to);
        }
    }

    public removePropExcepts(object: any, exceptProps: any = []) {
        for (var k in object) {
          if (object.hasOwnProperty(k) && !exceptProps.includes(k)) {
            delete object[k];
          }
        }
    }

    public lowerPropValue(object: any) {
        for (var k in object) {
          if (object.hasOwnProperty(k) && typeof object[k] == 'string') {
            object[k] = object[k].toLowerCase();
          }
        }
    }
    
    public renameProp(object: any, from: string, to: string) {
    if (object.hasOwnProperty(from)) {
        let fromVal = object[from];
        object[to] = fromVal;
        delete object[from];
    }
    }
  
  }