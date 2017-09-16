import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { MaterialModule } from './material';
import { DiaryComponent } from './diary';
import { HomeComponent } from './home';

/**
 * Some components rely on HammerJS for gestures.
 * In order to get the full feature-set of these components,
 * HammerJS must be loaded into the application.
 */
import 'hammerjs';
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
		FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
		MaterialModule,
		FlexLayoutModule,
		RouterModule.forRoot(ROUTES)
	],
	declarations: [
		AppComponent,
		DiaryComponent,
		HomeComponent
	],
	providers: [
		ENV_PROVIDERS,
		APP_PROVIDERS
	]
})
export class AppModule { }
