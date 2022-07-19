import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  userOrders: Order[] = [];

  constructor() {}

  // addItem(): Observable<OrderItem> {}

  fetchDetail(): Observable<Order> {
    return of({
      id: 1,
      user_id: 1,
      status: 'cart',
    });
  }

  submitOrder(order: Order) {
    this.userOrders.push(order);
  }

  getOrders(): Order[] {
    return this.userOrders;
  }
}
