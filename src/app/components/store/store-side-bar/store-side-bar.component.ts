import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-side-bar',
  templateUrl: './store-side-bar.component.html',
  styleUrls: ['./store-side-bar.component.scss'],
})
export class StoreSideBarComponent implements OnInit {
  links: string[] = ['all', 'fruit', 'vegetables', 'cars', 'furniture'];

  constructor() {}

  ngOnInit(): void {}
}
