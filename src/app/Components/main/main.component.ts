import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  product:any;

  cartItems= [];

  isCartView=false;
  pageTitle="Our Books";

  constructor(private prodService:ProductService) { }

  ngOnInit(): void {
    this.product=this.prodService.products;
  }

    // responsible for showing the cart page
    // when View cart button is clicked
    displayCartView() {
      this.isCartView = true;
      this.pageTitle = "Your Cart";
    }

    // responsible for showing products page
    // when logo is clicked
    goToHomePage() {
      this.isCartView = false;
      this.pageTitle = "Our Books";
    }

  //   getCartItems(prod) {
  //     if (this.cartItems.length > 0) {
  //       for (let i = 0; i < this.cartItems.length; i++) {
  //         if (this.cartItems[i].item.id === prod.id) {
  //           this.cartItems[i].quantity++;
  //         } else {
  //           this.cartItems.push({
  //             item: prod,
  //             quantity: 1
  //           });
  //         }
  //       }
  //     }
  //   }

  //   // if the product is already in the cart,
  //   // increase its quantity by 1
  //   // else create a new object with the
  //   // selected product info and push it
  //   // into the cartItems array.
  //   // Decrease stock quantity when item is
  //   // added to the cart
  //   addProdToCart(prod) {
  //     for (let i = 0; i < this.cartItems.length; i++) {
  //       if (this.cartItems[i].item.id === prod.id) {
  //         this.cartItems[i].quantity++;
  //         return;
  //       }
  //     }
  //     this.cartItems.push({
  //       item: prod,
  //       quantity: 1
  //     });

  //     // decrease stock when product
  //     // is added to the cart
  //     //console.log(this.cartItems);
  //     prod.inStock--;
  //   }
    
  //   // + button functionality in the 
  //   // cart: quantity goes up by 1,
  //   // in stock goes down by 1 
  //   increaseQuantity(prod) {
  //     prod.quantity++;
  //     prod.item.inStock--;
  //   },
    
  //   // when the quantity reaches 0, the item
  //   // is removed from the cart
  //   removeProdFromCart(prod) {
  //     const prodIndex = this.cartItems.indexOf(prod);
  //     this.cartItems.splice(prodIndex, 1);
  //   },
    
  //   // - button functionality in the cart: 
  //   // quantity is decreased by 1,
  //   // in stock is increased by 1,
  //   // if quantity = 0, product is removed
  //   // from the cart
  //   decreaseQuantity(prod) {
  //     prod.quantity--;
  //     prod.item.inStock++;
  //     if(prod.quantity <= 0) {
  //       this.removeProdFromCart(prod);
  //     }
  //   },
    
  //   checkout() {
  //     // remove all products from the cart
  //     this.cartItems = [];
  //   }
  // },

  // computed: {
  //   // this function keeps an eye on the quantity in 
  //   // the cart, which may vary as users add or remove
  //   // products and calculates the total each time
  //   calculateTotal() {
  //     let total = 0;
  //     for (let i = 0; i < this.cartItems.length; i++) {
  //       total += this.cartItems[i].item.price * this.cartItems[i].quantity;
  //     }
  //     return total;
  //   }
  }

