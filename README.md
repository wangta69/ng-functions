# ng-functions
Tested for angular6

## Installation
```
npm install ng-functions
```

## Installation [angular 5.x]
```
npm install ng-functions@1.0.1
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

```
randomString(number);//return alphaNumeric random string as given number length;
in_array(needle, haystack);//if needle is in array return true else return false
array_search(needle, haystack);//if needle is in array return index else return false
```
