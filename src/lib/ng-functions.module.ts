import { NgModule } from '@angular/core';
import { CommonService } from './common.service';
@NgModule({
  imports: [
  ],
  providers: [CommonService],
  declarations: [],
  exports: []
})
export class CommonServiceModule { }
/*
import { NgModule } from '@angular/core';
import { NgFunctionsComponent } from './ng-functions.component';
@NgModule({
  imports: [
  ],
  declarations: [NgFunctionsComponent],
  exports: [NgFunctionsComponent]
})
export class NgFunctionsModule { }
*/
