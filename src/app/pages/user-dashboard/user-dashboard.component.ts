import { Component, OnInit } from '@angular/core';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<LightInfoInput> = [];

  ngOnInit(): void {
    this.iniializeAccountInfo();
  }

  private iniializeAccountInfo() {
    this.accountInfoList = [
      {
        title: 'Account balance',
        amount: 21560,
        infoStyle: 'bg-primary'
      },
      {
        title: 'Highest transfer',
        amount: 560,
        infoStyle: 'bg-warning'
      },
      {
        title: 'Highest deposit',
        amount: 21,
        infoStyle: 'bg-success'
      }
    ]
  }
}
