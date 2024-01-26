import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import {ProductComponent} from "./product/product.component";
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DataViewModule,
    CardModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
