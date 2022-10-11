import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name: string = '';
  intervalVariable = null;

  constructor() {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');

    if (this.intervalVariable) {
      clearInterval(this.intervalVariable);
    }
  }

  ngOnInit(): void {
    console.log('ngOnit called');

    this.intervalVariable = setInterval(() => {
      console.log(new Date());
    }, 1000);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }
}
