import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Globals } from '../global/global';
import { Order } from '../models/order';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  userOrders: Order[] = [];

  constructor(private http: HttpClient, private userService: UserService) {}

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

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${Globals.endPoint}/order`, {
      headers: new HttpHeaders({ Authorization: '' + this.userService.token }),
    });
  }
}
