import { Component } from '@angular/core';
import { CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCart: CartItem[] = [
    { price: 20 },
    { price: 45 },
    { price: 67 },
    { price: 1305 }
  ];

}
