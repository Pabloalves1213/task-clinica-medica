import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ClienteComponent } from './custom-layout/cliente/cliente.component';
import { MedicoComponent } from './custom-layout/medico/medico.component';
import { MatButtonModule } from '@angular/material/button';
import { PagesComponent } from './pages/pages.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ModalClienteComponent } from './pages/modal/modal-cliente/modal-cliente.component';
import { ModalMedicoComponent } from './pages/modal/modal-medico/modal-medico.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    ClienteComponent,
    MedicoComponent,
    PagesComponent,
    ModalComponent,
    ModalClienteComponent,
    ModalMedicoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    ReactiveFormsModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
