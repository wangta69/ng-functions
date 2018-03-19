import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
	constructor() {
	}

	range(input, min:number, max:number): any{//@Pipe({name: 'range'}) 와 동일 (range.pipe.ts)
		for (var i=min; i<=max; i++)
			input.push(i);
		return	input;
	};//init:function(){

	guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
	};

}
