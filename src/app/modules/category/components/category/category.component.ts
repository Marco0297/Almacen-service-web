import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from "../../../shared/services/category.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  //categories: any[] = [];

  constructor(private categoryService: CategoryService) { }
  //private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.getProducts();
  }
  displayedColumns : string[] = ['id', 'fchIn', 'productoAlmacen', 'proveedorAlmacen', 'color', 'observaciones',
  'caracteristicas','cantidadAlmacen', 'precioUnitario', 'valorTotalProductoAlmacen'];

  dataSource = new MatTableDataSource<any>();

  getProducts():void{
    this.categoryService.getCategories()
      .subscribe((data:any) =>{
        this.dataSource = new MatTableDataSource(data);
        console.log("respuesta productos: ", data);
      },
        (error: any) => {
        console.error("Ocurrio un error: ", error);
        })

  }

}
