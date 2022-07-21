import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out-success-page',
  templateUrl: './check-out-success-page.component.html',
  styleUrls: ['./check-out-success-page.component.scss'],
})
export class CheckOutSuccessPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  back(): void {
    this.router.navigate(['/']);
  }
}
