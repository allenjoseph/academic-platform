import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	public feeds: Promise<any>;
	public loadingFeeds: boolean;

	constructor(public http: Http) {
		this.loadingFeeds = true;
		this.feeds = this.getFeeds();
	}

	public getFeeds(): Promise<any> {
		return this.http
			.post('/graphql', {
				query: '{ feeds { title description } }'
			})
			.toPromise()
			.then( res => {
				this.loadingFeeds = false;
				return res.json().data.feeds;
			})
			.catch( err => console.log(err) );
	}
}
