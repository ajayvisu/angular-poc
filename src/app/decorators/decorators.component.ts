import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css'],
})
export class DecoratorsComponent implements OnInit {
  @Input() name = '';
  @Output() newNameEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewName(value: string) {
    this.newNameEvent.emit(value);
  }
}
