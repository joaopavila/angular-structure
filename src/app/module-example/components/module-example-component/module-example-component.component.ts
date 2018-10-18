import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-module-example-component',
  templateUrl: './module-example-component.component.html',
  styleUrls: ['./module-example-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ModuleExampleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
