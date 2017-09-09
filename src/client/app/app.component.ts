import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
	/**
	 * The selector is what angular internally uses
	 * for `document.querySelectorAll(selector)` in our index.html
	 * where, in this case, selector is the string 'home'.
	 */
	selector: 'app',
	/**
	 * Every Angular template is first compiled by the browser before Angular runs it's compiler.
	 */
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	public openSidenav = true;

	constructor(media: ObservableMedia) {
		media.asObservable().subscribe((change: MediaChange) => {
			this.openSidenav = ['md', 'lg', 'xl'].some((o) => o === change.mqAlias);
		});
	}

	public ngOnInit() {
		console.log('Initial App State');
	}
}
