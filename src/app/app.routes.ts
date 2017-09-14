import { Routes } from '@angular/router';

import { routes_constants } from './shared/constants/routes.constant';

import { HomeComponent } from './home.component';

// Auth Module
import { LoginComponent } from './auth/login/login.component';

import { TestComponent } from './test/test/test.component';
import { InitComponent } from './init/init.component';



export const appRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: InitComponent
			},
			{
				path: 'test',
				component: TestComponent
			},
		],
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
];

