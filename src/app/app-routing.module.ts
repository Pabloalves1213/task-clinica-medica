import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { ClienteComponent } from './custom-layout/cliente/cliente.component';
import { MedicoComponent } from './custom-layout/medico/medico.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: '', component: ClienteComponent },
      { path: 'cliente', component: ClienteComponent },
      { path: 'medico', component: MedicoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
