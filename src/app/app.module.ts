import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';


// Cambiar el local zone de la app
import localEsPE from '@angular/common/locales/es-PE';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsPE);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-PE' // esto es para cambiar el idioma de manera global
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
