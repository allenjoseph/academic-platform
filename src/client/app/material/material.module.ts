import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';

@NgModule({
	imports: [
		MdSidenavModule,
		MdToolbarModule,
		MdButtonModule,
		MdProgressSpinnerModule,
		MdListModule,
		MdCardModule,
		MdGridListModule
	],
	exports: [ MdSidenavModule,
		MdToolbarModule,
		MdButtonModule,
		MdProgressSpinnerModule,
		MdListModule,
		MdCardModule,
		MdGridListModule
	]
})
export class MaterialModule { }
