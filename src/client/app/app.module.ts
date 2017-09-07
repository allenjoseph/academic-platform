import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ENV_PROVIDERS } from './environment';
import { AppComponent } from './app.component';

import '../styles/main.scss';

const APP_PROVIDERS = [
	/**
	 * App providers.
	 */
];

@NgModule({
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule // <-- import the FormsModule before binding with [(ngModel)]
	],
	declarations: [
		AppComponent
	],
	providers: [
		ENV_PROVIDERS,
		APP_PROVIDERS
	]
})
export class AppModule { }
