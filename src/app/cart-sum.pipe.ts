import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from './models';

@Pipe({
  name: 'cartSum'
})
export class CartSumPipe implements PipeTransform {

  transform(cart: CartItem[] = []): any {
    return cart.reduce((a, b) => a + (+b.price || 0), 0);
  }

}
