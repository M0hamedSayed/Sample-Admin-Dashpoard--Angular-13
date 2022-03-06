import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from '../main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SideComponent,
    FooterComponent
  ]
})
export class CoreModule { }
