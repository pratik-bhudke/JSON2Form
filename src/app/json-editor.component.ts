import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html'
})
export class JsonEditorComponent {
  @Input() data: any;
  @Input() parent: any = null;
  @Input() parentKey: any = null;

  uid = Math.random().toString(36).substr(2, 9);

  isArray(v: any) { return Array.isArray(v); }
  isObject(v: any) { return v !== null && typeof v === 'object' && !Array.isArray(v); }
  isPrimitive(v: any) { return v === null || typeof v !== 'object'; }

  keys(obj: any): string[] {
    if (!obj.__keyOrder) {
      Object.defineProperty(obj, '__keyOrder', {
        enumerable: false,
        writable: true,
        value: Object.keys(obj)
      });
    }
    return obj.__keyOrder;
  }

  uniqueKey(obj: any, base: string): string {
    let i = 1;
    let k = base + '_copy';
    while (obj[k]) {
      k = base + '_copy' + i++;
    }
    return k;
  }

  onKeyChange(obj: any, oldKey: string, newKey: string) {
    if (!newKey || oldKey === newKey) return;
    const idx = obj.__keyOrder.indexOf(oldKey);
    const val = obj[oldKey];
    delete obj[oldKey];
    obj[newKey] = val;
    obj.__keyOrder[idx] = newKey;
  }

  addField(obj: any) {
    const k = this.uniqueKey(obj, 'newKey');
    obj[k] = '';
    obj.__keyOrder.push(k);
  }

  copyObject() {
    if (!this.parent) return;
    const key = this.uniqueKey(this.parent, this.parentKey);
    this.parent[key] = JSON.parse(JSON.stringify(this.data));
    this.parent.__keyOrder.splice(
      this.parent.__keyOrder.indexOf(this.parentKey) + 1, 0, key
    );
  }

  removeObject() {
    if (!this.parent) return;
    delete this.parent[this.parentKey];
    this.parent.__keyOrder.splice(this.parent.__keyOrder.indexOf(this.parentKey), 1);
  }

  copyArray(obj: any, key: string) {
    const newKey = this.uniqueKey(obj, key);
    obj[newKey] = JSON.parse(JSON.stringify(obj[key]));
    obj.__keyOrder.splice(obj.__keyOrder.indexOf(key) + 1, 0, newKey);
  }

  removeArray(obj: any, key: string) {
    delete obj[key];
    obj.__keyOrder.splice(obj.__keyOrder.indexOf(key), 1);
  }

  duplicateArrayItem(arr: any[], i: number) {
    arr.splice(i + 1, 0, JSON.parse(JSON.stringify(arr[i])));
  }

  removeArrayItem(arr: any[], i: number) {
    arr.splice(i, 1);
  }

  addArrayItem(arr: any[]) {
    arr.push('');
  }
}
