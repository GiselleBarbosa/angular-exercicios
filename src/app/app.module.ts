import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Page1Component } from './componentes/pages/page1/page1.component';
import { Page2Component } from './componentes/pages/page2/page2.component';
import { Page3Component } from './componentes/pages/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
