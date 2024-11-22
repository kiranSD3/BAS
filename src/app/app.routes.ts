import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './LoginPages/login/login.component';
import { ResetpasswordComponent } from './LoginPages/resetpassword/resetpassword.component';
import { AsidebarComponent } from './DashboardContent/asidebar/asidebar.component';
import { DashboardComponent } from './DashboardContent/dashboard/dashboard.component';
import { TransactionComponent } from './DashboardContent/transaction/transaction.component';
import { ReportsComponent } from './DashboardContent/reports/reports.component';
import { SettingsComponent } from './DashboardContent/settings/settings.component';
import { ExitComponent } from './DashboardContent/exit/exit.component';

export const routes: Routes = [

    {
        path:'', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'resetpassword', component: ResetpasswordComponent
    },
    {
        path: 'aside', component: AsidebarComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'transaction', component: TransactionComponent
            },
            {
                path: 'reports', component: ReportsComponent
            },
            {
                path: 'settings', component: SettingsComponent
            },
            {
                path: 'exit', component:ExitComponent
            }
        ]
    }
];
