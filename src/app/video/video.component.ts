import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
  <h2>{{title}}</h2>
  <button (click)='childFunction()'> Hey Child </button>
  `
})
export class VideoComponent {

  // @Input() title: string; Receives value from parent component

  // To intercept data changes in parent component in child component for the first
  // time, use setter and getter. For continuos changes, use ngOnChanges life cycle hook.
  title: string;

  // Used to raise event in child component and captured in parent component
  @Output() myEvent = new EventEmitter();

  childFunction() {
    // console.log('I am handled in child');
    this.myEvent.emit('Hey, I am data from child');
  }
  
  @Input()
  set setData(m: string) {
    this.title = m + " appended data in child"; // You can manipulate data before using it in child component
  }

  get setData() {
    return this.title;
  }
  
}
