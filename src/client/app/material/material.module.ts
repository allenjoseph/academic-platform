import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';

@NgModule({
	imports: [
		MdSidenavModule,
		MdToolbarModule,
		MdButtonModule,
		MdProgressSpinnerModule,
		MdListModule
	],
	exports: [ MdSidenavModule,
		MdToolbarModule,
		MdButtonModule,
		MdProgressSpinnerModule,
		MdListModule
	]
})
export class MaterialModule { }
