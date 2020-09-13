import { fn } from "../setup";
import { getSplitValues } from "../helper";
import { isElement, isUndefined } from "../core/typechecking";
import _each from "../core/_each";

fn.toggleClass = function( cls, force ) {
	const classes = getSplitValues( cls ), isForce = !isUndefined( force );
	return this.each( ( i, ele ) => {
		if( !isElement( ele ) ) {
			return;
		}
		_each( classes, ( i, c ) => {
			if( isForce ) {
				force ? ele.classList.add( c ) : ele.classList.remove( c );
			} else {
				ele.classList.toggle( c );
			}
		} );
	} );
};
