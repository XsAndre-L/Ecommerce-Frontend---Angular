import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  // orders: Order[] = [];

  constructor(public orderService: OrderService) {}

  ngOnInit(): void {
    // this.orders.push({
    //   id: 1,
    //   user_id: 1,
    //   status: 'pending',
    // });
    // this.orders.push({
    //   id: 2,
    //   user_id: 1,
    //   status: 'pending',
    // });
  }
}
