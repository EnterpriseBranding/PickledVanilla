import { fn } from "../setup";
import isUndefined from "../typechecking/isUndefined";
import _slice from "../core/vars/_slice";

fn.get = function( index ) {
	if( isUndefined( index ) ) {
		return _slice.call( this );
	}
	index = Number( index );
	return this[ index < 0 ? index + this.length : index ];
};
