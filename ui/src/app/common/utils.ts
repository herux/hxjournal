import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }
  
    public removePropExceptsArray(objects: any = [], exceptProps: any = []) {
        for (let i = 0; i < objects.length; i++) {
          this.removePropExcepts(objects[i], exceptProps);
        }
    }
    
    public removePropExceptsArrayByOrder(objects: any = [], exceptProps: any = []) {
      for (let i = 0; i < objects.length; i++) {
        this.removePropExcepts(objects[i], exceptProps);
      }
  }

    public renamePropArray(objects: any = [], from: string, to: string) {
        for (let i = 0; i < objects.length; i++) {
          this.renameProp(objects[i], from, to);
        }
    }

    public removePropExcepts(object: any, exceptProps: any = []) {
      for (var k in object) {
        if (object.hasOwnProperty(k) && !exceptProps.includes(k)) {
          delete object[k];
        }
      }
    }

    public orderProps(object: any, props: any = []): any {
      let newObject = {}
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