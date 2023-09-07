import { Component, OnInit } from '@angular/core';
import { ProductsData } from '../../models/products-data.model'
import { FireRTDBService } from '../../services/FirebaseService/fire-rtdb.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {

  products?: ProductsData[];
  currentProduct: ProductsData;
  currentIndex = -1;
  title = '';


  constructor(private fireRTDBService: FireRTDBService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }


  retrieveProducts(): void {
    this.fireRTDBService.getAll().snapshotChanges().subscribe(data => {
      this.products = data.map(e => {
        const id = e.payload.key;
        const values = e.payload.val();
        return {
          id: id,
          ...values
        } as ProductsData;
      });
      this.products.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) {
          return -1;
        } else if (!a.isFeatured && b.isFeatured) {
          return 1;
        } else {
          return 0;
        }
      });

      console.log(this.products);
    }
    );
  }
}
