import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SiembraComponent } from './pages/siembra/siembra.component';
import { CosechaComponent } from './pages/cosecha/cosecha.component';
import { VentaComponent } from './pages/venta/venta.component';
import { SiembraAddComponent } from './pages/siembra/siembra-add/siembra-add.component';
import { CosechaAddComponent } from './pages/cosecha/cosecha-add/cosecha-add.component';
import { VentaAddComponent } from './pages/venta/venta-add/venta-add.component';
import { PrediccionComponent } from './pages/prediccion/prediccion.component';
import { PrediccionAddComponent } from './pages/prediccion/prediccion-add/prediccion-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SiembraComponent,
    CosechaComponent,
    VentaComponent,
    SiembraAddComponent,
    CosechaAddComponent,
    VentaAddComponent,
    PrediccionComponent,
    PrediccionAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
