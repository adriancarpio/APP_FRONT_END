import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiembraComponent } from './pages/siembra/siembra.component';
import { CosechaComponent } from './pages/cosecha/cosecha.component';
import { VentaComponent } from './pages/venta/venta.component';
import { SiembraAddComponent } from './pages/siembra/siembra-add/siembra-add.component';
import { PrediccionComponent } from './pages/prediccion/prediccion.component';
import { CosechaAddComponent } from './pages/cosecha/cosecha-add/cosecha-add.component';
import { VentaAddComponent } from './pages/venta/venta-add/venta-add.component';

const routes: Routes = [
  {
    path: 'pages/siembra',
    component: SiembraComponent,
  },
  {
    path: 'pages/cosecha',
    component: CosechaComponent,
  },
  {
    path: 'pages/venta',
    component: VentaComponent,
  },
  {
    path: 'pages/prediccion',
    component: PrediccionComponent,
  },
  {
    path: 'pages/siembra/siembra-add',
    component: SiembraAddComponent,
  },
  {
    path: 'pages/cosecha/cosecha-add',
    component: CosechaAddComponent,
  },
  {
    path: 'pages/venta/venta-add',
    component: VentaAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
