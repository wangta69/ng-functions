import { NgModule } from '@angular/core';
import { CommonService } from './common.service';

@NgModule({
  providers: [
    CommonService
  ]
})
export class CommonServiceModule {}

export { CommonService }   from './common.service';
