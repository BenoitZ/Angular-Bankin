import { Component, Input } from '@angular/core';

export interface LightInfoInput {
  title?: String;
  amount?: Number;
  infoStyle?: 'bg-primary' | 'bg-success' | 'bg-warning' | 'bg-danger';
}

@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.scss']
})

export class LightInfoComponent {
  @Input() infoInput: LightInfoInput = {};
}
