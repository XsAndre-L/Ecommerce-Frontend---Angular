import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-store-nav',
  templateUrl: './store-nav.component.html',
  styleUrls: ['./store-nav.component.scss'],
})
export class StoreNavComponent implements OnInit {
  currCategory: string | undefined;
  @Output() categoryChange: EventEmitter<string> = new EventEmitter();

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.queryParams
      .pipe(
        map((params) => {
          if (!params['category']) {
            this.categoryChange.emit('all');
            return 'All';
          }
          const category = String(params['category']);
          this.categoryChange.emit(category);

          return category['charAt'](0).toUpperCase() + category['slice'](1);
        })
      )
      .subscribe((param) => {
        this.currCategory = param;
      });
  }
}
