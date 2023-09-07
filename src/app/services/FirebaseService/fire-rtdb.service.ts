import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ProductsData } from 'src/app/models/products-data.model';

@Injectable({
  providedIn: 'root'
})

export class FireRTDBService {

  private dbPath: string = '/Projects';

  productsRef: AngularFireList<ProductsData>;

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<ProductsData> {
    return this.productsRef;
  }



}
