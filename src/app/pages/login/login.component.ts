import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  urlParam = "Not Yet Defined";
  queryParam = "Not Yet available";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute);
    this.urlParam = this.activatedRoute.snapshot.params['someText'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['x'];
  }

  ngOnInit(): void {
  }

  async register() {
    await this.router.navigate(['register']);
  }


}
