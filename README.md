# ng-functions
Tested for angular5

## Installation
```
npm install ng-functions
```
## How to use

### imports
```app.module.ts
import { CommonServiceModule }  from "ng-functions";
@NgModule({
  imports: [CommonServiceModule]
})
```
```
import { CommonService }  from "ng-functions";
constructor(protected commonSvc: CommonService) {
let prefix_unique = commonSvc.guid();
}
```
