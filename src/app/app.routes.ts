import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Nav } from './components/nav/nav';
import { Registro } from './pages/registro/registro';
import { Home } from './pages/home/home';
import { QuienSoy } from './pages/quien-soy/quien-soy';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'nav',
        component:Nav
    },
    {
        path: 'registro',
        component: Registro
    },
    {
        path:'home',
        component:Home
    },
    {
        path:'quienSoy',
        component:QuienSoy
    }
];
