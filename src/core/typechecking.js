import CoreClass from './core-class';

export function isWpopv( instance ) {
	return instance instanceof CoreClass;
}

export function isWindow( x ) {
	return !!x && x === x.window;
}

export function isDocument( x ) {
	return !!x && x.nodeType === 9;
}

export function isElement( x ) {
	return !!x && x.nodeType === 1;
}

export function isFunction( x ) {
	return typeof x === 'function';
}

export function isString( x ) {
	return typeof x === 'string';
}

export function isUndefined( x ) {
	return x === undefined;
}

export function isNull( x ) {
	return x === null;
}

export function isNumeric( x ) {
	return !isNaN( parseFloat( x ) ) && isFinite( x );
}

export function isNumber( x ) {
	return typeof x === 'number';
}

export function isPlainObject( x ) {
	if( typeof x !== 'object' || x === null ) {
		return false;
	}

	const proto = Object.getPrototypeOf( x );
	return proto === null || proto === Object.prototype;
}

export function isBoolean( x ) {
	return typeof x === 'boolean';
}
