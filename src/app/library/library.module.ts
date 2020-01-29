import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidsComponent } from './vids/vids.component';
import { LibraryRoutingModule } from './library-routing.module';



@NgModule({
  declarations: [VidsComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
