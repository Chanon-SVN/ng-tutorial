import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent} from './general-components/not-found/not-found.component';
import { LoginComponent } from './general-components/login/login.component';

const appRoutes: Routes = [
  { path: "", redirectTo:"/login", pathMatch:"full" },
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent },
];

export const AppRoutingProviders: any[] = [LoginComponent];
export const AppRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);
