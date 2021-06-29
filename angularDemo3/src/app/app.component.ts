import { Product } from './models/product.model';
import { Observable } from 'rxjs';
import { Component, SimpleChanges } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Title App';
  products$!: Observable<any>;
  isUpdate = false;
  id = null;
  product = {
    name: '',
    price: '',
    image: '',
  };
  constructor(private _dataService: DataService) {}
  clickFromHello(event: any) {
    this.title = event;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.products$ = this._dataService.getAll();
  }

  addProduct() {
    if (!this.isUpdate) {
      this._dataService.add(this.product).subscribe();
      this.product = {
        name: '',
        price: '',
        image: '',
      };
    } else {
      this._dataService.update(this.id, this.product).subscribe();
      this.id = null;
      this.isUpdate = false;

      this.product = {
        name: '',
        price: '',
        image: '',
      };
      this.getProduct();
    }
  }

  edit(id: any) {
    this.isUpdate = true;
    this.id = id;

    this._dataService.getById(id).subscribe((response) => {
      this.product.name = response.name;
      this.product.image = response.image;
      this.product.price = response.price;
    });
  }

  deleteProduct(id: any) {
    this._dataService.delete(id).subscribe();
    this.getProduct();
  }
}

// DataBinding
// 1. PropertyBinding
// 2. EvenBinding
// {{}} : String Interpolation (curly bracket)
