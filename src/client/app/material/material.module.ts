import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@NgModule({
	imports: [ MdSidenavModule, MdToolbarModule, MdButtonModule, MdProgressSpinnerModule ],
	exports: [ MdSidenavModule, MdToolbarModule, MdButtonModule, MdProgressSpinnerModule ]
})
export class MaterialModule { }
