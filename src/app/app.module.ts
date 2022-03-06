import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { AddSeakerComponent } from './components/add-seaker/add-seaker.component';
import { SpaekersComponent } from './components/spaekers/spaekers.component';
import { SharedModule } from './shared/shared.module';
import { PowerToXPipe } from './pipes/power-to-x.pipe';
import { StringConvertPipe } from './pipes/string-convert.pipe';
import { ArrayFiterPipe } from './pipes/array-fiter.pipe';
import { HighLightDirective } from './directives/high-light.directive';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddSeakerComponent,
    SpaekersComponent,
    PowerToXPipe,
    StringConvertPipe,
    ArrayFiterPipe,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    RatingModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
