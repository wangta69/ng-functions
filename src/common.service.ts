import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
	constructor() {
	}

	guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
	};

	/**
	* create random string as given length
	*/
	randomString(len) {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
	};

	range(input, min:number, max:number): any{//@Pipe({name: 'range'}) 와 동일 (range.pipe.ts)
		for (var i=min; i<=max; i++)
			input.push(i);
		return	input;
	};//init:function(){

	in_array(needle, haystack) {
	    for(var i in haystack) {
	        if(haystack[i] == needle) return true;
	    }
	    return false;
	};

	copy_array(arr){
		return arr.slice();
	}

	/**
	* remove item from array by value
	*/
	remove_item(value, haystack){
		return haystack.filter(v => v != value);
	}

	array_search(needle, haystack) {
	    for(var i in haystack) {
	        if(haystack[i] == needle) return i;
	    }
	    return false;
	};

	add_comma(input){
		return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	rm_comma(input){
		return input.toString().replace(/,/g , "");
	}

}
