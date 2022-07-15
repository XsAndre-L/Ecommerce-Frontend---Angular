import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-link',
  templateUrl: './side-bar-link.component.html',
  styleUrls: ['./side-bar-link.component.scss'],
})
export class SideBarLinkComponent implements OnInit {
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
