import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { IndexColaboradorComponent } from './components/colaborador/index-colaborador/index-colaborador.component';
import { CreateColaboradorComponent } from './components/colaborador/create-colaborador/create-colaborador.component';
import { EditColaboradorComponent } from './components/colaborador/edit-colaborador/edit-colaborador.component';
import { SkandiaComponent } from './components/skandia/skandia.component';

import { AdminGuard } from './guards/admin.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'colaborador',
    component: IndexColaboradorComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'colaborador/create',
    component: CreateColaboradorComponent,
  },
  {
    path: 'colaborador/:id',
    component: EditColaboradorComponent,
    canActivate: [AdminGuard],
  },
  { path: 'skandia', component: SkandiaComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
