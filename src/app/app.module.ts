import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MedicoComponent } from './pages/medico/medico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModalClienteComponent } from './pages/modal/modal-cliente/modal-cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MatInputModule } from '@angular/material/input';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { IconModule } from '@visurel/iconify-angular';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent,
    MedicoComponent,
    ModalClienteComponent,
    InicioComponent,
    ClienteComponent,
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
    CustomLayoutModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    VexModule,
    MatSlideToggleModule,
    MatInputModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    IconModule,
    NgxMaskModule.forRoot()



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
