import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  jsonText = '[\n  "one",\n  "two",\n  { "a": 1 }\n]';
  data: any = null;
  show = false;

  preview() {
    this.data = JSON.parse(this.jsonText);
    this.show = true;
  }

  format() {
    try {
      const obj = JSON.parse(this.jsonText);
      this.jsonText = JSON.stringify(obj, null, 4);
    } catch (e) {
      alert('Invalid JSON');
    }
  }

  save() {
    this.jsonText = JSON.stringify(this.data, null, 2);
    this.show = false;
  }
}
