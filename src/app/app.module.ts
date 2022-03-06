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
import { HeaderComponent } from './core/header/header.component';
import { HighLightDirective } from './directives/high-light.directive';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
