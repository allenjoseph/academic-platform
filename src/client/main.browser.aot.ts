/**
 * Angular bootstrapping
 */
import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app/environment';
/**
 * App Module
 * our top level module that holds all of our components.
 */
import { AppModuleNgFactory } from '../compiled/src/client/app/app.module.ngfactory';
/**
 * Some components rely on HammerJS for gestures.
 * In order to get the full feature-set of these components,
 * HammerJS must be loaded into the application.
 */
import 'hammerjs';
/**
 * Bootstrap our Angular app with a top level NgModule.
 */
export function main(): Promise<any> {
	return platformBrowser()
		.bootstrapModuleFactory(AppModuleNgFactory)
		.then(decorateModuleRef)
		.catch((err) => console.error(err));
}

switch (document.readyState) {
	case 'loading':
		document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
		break;
	case 'interactive':
	case 'complete':
	default:
		main();
}

function _domReadyHandler() {
	document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
	main();
}
