import { Routes } from '@angular/router';
import { DiaryComponent } from './diary';
import { HomeComponent } from './home';

export const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'diary', component: DiaryComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const SIDE_NAV: any[] = [
	{ path: 'home', name: 'Novedades', icon: 'start' },
	{ path: 'diary', name: 'Agenda', icon: 'today' }
];
