(function(scope){
'use strict';
var XMLHttpRequest = require("xhr2");
function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



// SEND REQUEST

var _Http_toTask = F2(function(request, maybeProgress)
{
	return _Scheduler_binding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		_Http_configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_Scheduler_fail($elm$http$Http$NetworkError));
		});
		xhr.addEventListener('timeout', function() {
			callback(_Scheduler_fail($elm$http$Http$Timeout));
		});
		xhr.addEventListener('load', function() {
			callback(_Http_handleResponse(xhr, request.expect.a));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_Scheduler_fail($elm$http$Http$BadUrl(request.url)));
		}

		_Http_configureRequest(xhr, request);

		var body = request.body;
		xhr.send($elm$http$Http$Internal$isStringBody(body)
			? (xhr.setRequestHeader('Content-Type', body.a), body.b)
			: body.a
		);

		return function() { xhr.abort(); };
	});
});

function _Http_configureProgress(xhr, maybeProgress)
{
	if (!$elm$core$Maybe$isJust(maybeProgress))
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_Scheduler_rawSpawn(maybeProgress.a({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}

	xhr.responseType = request.expect.b;
	xhr.withCredentials = request.withCredentials;

	$elm$core$Maybe$isJust(request.timeout) && (xhr.timeout = request.timeout.a);
}


// RESPONSES

function _Http_handleResponse(xhr, responseToResult)
{
	var response = _Http_toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _Scheduler_fail($elm$http$Http$BadStatus(response));
	}

	var result = responseToResult(response);

	if ($elm$core$Result$isOk(result))
	{
		return _Scheduler_succeed(result.a);
	}
	else
	{
		response.body = xhr.responseText;
		return _Scheduler_fail(A2($elm$http$Http$BadPayload, result.a, response));
	}
}

function _Http_toResponse(xhr)
{
	return {
		url: xhr.responseURL,
		status: { code: xhr.status, message: xhr.statusText },
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders()),
		body: xhr.response
	};
}

function _Http_parseHeaders(rawHeaders)
{
	var headers = $elm$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function _Http_expectStringResponse(responseToResult)
{
	return {
		$: 0,
		b: 'text',
		a: responseToResult
	};
}

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		b: expect.b,
		a: function(response) {
			var convertedResponse = expect.a(response);
			return A2($elm$core$Result$map, func, convertedResponse);
		}
	};
});


// BODY

function _Http_multipart(parts)
{


	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}

	return $elm$http$Http$Internal$FormDataBody(formData);
}
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Main$config = {
	capabilities: A2(
		$elm$core$Result$withDefault,
		$elm$json$Json$Encode$null,
		A2($elm$json$Json$Decode$decodeString, $elm$json$Json$Decode$value, '{ \"desiredCapabilities\": {' + ('\"browserName\": \"chrome\"' + '}}'))),
	instances: 10,
	url: 'http://localhost:4444/wd/hub'
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$log = _Platform_outgoingPort('log', $elm$json$Json$Encode$string);
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $author$project$Main$msgFromTask = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map(
		$elm$core$Task$perform($elm$core$Basics$identity)),
	$elm$core$Platform$Cmd$batch);
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$lifeCycle = function (income) {
	if (income.$ === 'Ok') {
		if (income.a.b.$ === 'Tasks') {
			var _v1 = income.a;
			var model = _v1.a;
			var tasks = _v1.b.a;
			return _Utils_Tuple2(
				$elm$core$Result$Ok(model),
				$author$project$Main$msgFromTask(tasks));
		} else {
			var _v2 = income.a;
			var model = _v2.a;
			var report = _v2.b.a;
			return _Utils_Tuple2(
				$elm$core$Result$Ok(model),
				$elm$core$Platform$Cmd$none);
		}
	} else {
		var e = income.a;
		return _Utils_Tuple2(
			$elm$core$Result$Err(e),
			$author$project$Main$log(e));
	}
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $justgook$elm_webdriver$WebDriver$Setup$SuiteState = function (a) {
	return {$: 'SuiteState', a: a};
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $justgook$elm_webdriver$WebDriver$Setup$RunTimeSkip = {$: 'RunTimeSkip'};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $justgook$elm_webdriver$Util$List$Extra$mapAccumr = F3(
	function (f, acc0, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, _v0) {
					var acc1 = _v0.a;
					var ys = _v0.b;
					var _v1 = A2(f, acc1, x);
					var acc2 = _v1.a;
					var y = _v1.b;
					return _Utils_Tuple2(
						acc2,
						A2($elm$core$List$cons, y, ys));
				}),
			_Utils_Tuple2(acc0, _List_Nil),
			list);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $justgook$elm_webdriver$WebDriver$Setup$Waiting = function (a) {
	return {$: 'Waiting', a: a};
};
var $elm$core$Basics$not = _Basics_not;
var $justgook$elm_webdriver$WebDriver$Setup$status = F2(
	function (_v0, f) {
		var onlyMode = _v0.onlyMode;
		var only = _v0.only;
		var skip = _v0.skip;
		return (skip || (onlyMode && (!only))) ? $justgook$elm_webdriver$WebDriver$Setup$RunTimeSkip : $justgook$elm_webdriver$WebDriver$Setup$Waiting(f);
	});
var $justgook$elm_webdriver$WebDriver$Setup$unwrap = F4(
	function (info, suite, path, config) {
		return $elm$core$Result$andThen(
			function (acc) {
				var onlyMode = acc.a;
				var queues = acc.b;
				switch (suite.$) {
					case 'UnitTest':
						var f = suite.a;
						var newItem = {
							desc: path,
							info: info,
							status: A2(
								$justgook$elm_webdriver$WebDriver$Setup$status,
								{only: config.only, onlyMode: onlyMode, skip: config.skip},
								f)
						};
						var _v1 = A3(
							$justgook$elm_webdriver$Util$List$Extra$mapAccumr,
							F2(
								function (found_, _v2) {
									var info_ = _v2.a;
									var items = _v2.b;
									return _Utils_eq(info, info_) ? _Utils_Tuple2(
										true,
										_Utils_Tuple2(
											info_,
											_Utils_ap(
												items,
												_List_fromArray(
													[newItem])))) : _Utils_Tuple2(
										found_,
										_Utils_Tuple2(info_, items));
								}),
							false,
							queues);
						var found = _v1.a;
						var newQueue = _v1.b;
						var resultQueue = found ? newQueue : _Utils_ap(
							queues,
							_List_fromArray(
								[
									_Utils_Tuple2(
									info,
									_List_fromArray(
										[newItem]))
								]));
						return $elm$core$Result$Ok(
							_Utils_Tuple2(onlyMode, resultQueue));
					case 'Browser':
						var infos = suite.a;
						var rest = suite.b;
						return A3(
							$elm$core$List$foldl,
							F2(
								function (info_, acc_) {
									return A5($justgook$elm_webdriver$WebDriver$Setup$unwrap, info_, rest, path, config, acc_);
								}),
							$elm$core$Result$Ok(acc),
							infos);
					case 'Labeled':
						var label = suite.a;
						var rest = suite.b;
						return A5(
							$justgook$elm_webdriver$WebDriver$Setup$unwrap,
							info,
							rest,
							_Utils_ap(
								path,
								_List_fromArray(
									[label])),
							config,
							$elm$core$Result$Ok(acc));
					case 'Skipped':
						var rest = suite.a;
						return A5(
							$justgook$elm_webdriver$WebDriver$Setup$unwrap,
							info,
							rest,
							path,
							_Utils_update(
								config,
								{skip: true}),
							$elm$core$Result$Ok(acc));
					case 'Only':
						var rest = suite.a;
						var newQueue = onlyMode ? queues : A2(
							$elm$core$List$map,
							$elm$core$Tuple$mapSecond(
								$elm$core$List$map(
									function (i) {
										return _Utils_update(
											i,
											{status: $justgook$elm_webdriver$WebDriver$Setup$RunTimeSkip});
									})),
							queues);
						return A5(
							$justgook$elm_webdriver$WebDriver$Setup$unwrap,
							info,
							rest,
							path,
							_Utils_update(
								config,
								{only: true}),
							$elm$core$Result$Ok(
								_Utils_Tuple2(true, newQueue)));
					case 'Batch':
						var suites = suite.a;
						return A3(
							$elm$core$List$foldl,
							F2(
								function (suite_, acc_) {
									return A5($justgook$elm_webdriver$WebDriver$Setup$unwrap, info, suite_, path, config, acc_);
								}),
							$elm$core$Result$Ok(acc),
							suites);
					default:
						var e = suite.a;
						return $elm$core$Result$Err(e);
				}
			});
	});
var $justgook$elm_webdriver$WebDriver$Setup$setup_ = F2(
	function (info, suite) {
		return A2(
			$elm$core$Result$map,
			$justgook$elm_webdriver$WebDriver$Setup$SuiteState,
			A2(
				$elm$core$Result$map,
				$elm$core$Tuple$second,
				A5(
					$justgook$elm_webdriver$WebDriver$Setup$unwrap,
					info,
					suite,
					_List_Nil,
					{only: false, skip: false},
					$elm$core$Result$Ok(
						_Utils_Tuple2(false, _List_Nil)))));
	});
var $justgook$elm_webdriver$WebDriver$Setup$Tasks = function (a) {
	return {$: 'Tasks', a: a};
};
var $justgook$elm_webdriver$Util$List$Extra$mapAccuml = F3(
	function (f, acc0, list) {
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (x, _v1) {
					var acc1 = _v1.a;
					var ys = _v1.b;
					var _v2 = A2(f, acc1, x);
					var acc2 = _v2.a;
					var y = _v2.b;
					return _Utils_Tuple2(
						acc2,
						A2($elm$core$List$cons, y, ys));
				}),
			_Utils_Tuple2(acc0, _List_Nil),
			list);
		var accFinal = _v0.a;
		var generatedList = _v0.b;
		return _Utils_Tuple2(
			accFinal,
			$elm$core$List$reverse(generatedList));
	});
var $justgook$elm_webdriver$WebDriver$Setup$Reference = function (a) {
	return {$: 'Reference', a: a};
};
var $justgook$elm_webdriver$WebDriver$Setup$Running = {$: 'Running'};
var $justgook$elm_webdriver$WebDriver$Internal$Browser$ErrorHandler = F2(
	function (a, b) {
		return {$: 'ErrorHandler', a: a, b: b};
	});
var $justgook$elm_webdriver$WebDriver$Internal$Browser$SessionIdHandler = F2(
	function (a, b) {
		return {$: 'SessionIdHandler', a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$Element = function (a) {
	return {$: 'Element', a: a};
};
var $justgook$elm_webdriver$WebDriver$Internal$Value$Handle = function (a) {
	return {$: 'Handle', a: a};
};
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$Status = F2(
	function (build, os) {
		return {build: build, os: os};
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$ValueBuild = function (version) {
	return {version: version};
};
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$decodeValueBuild = A2(
	$elm$json$Json$Decode$map,
	$justgook$elm_webdriver$WebDriver$Internal$Value$Status$ValueBuild,
	A2($elm$json$Json$Decode$field, 'version', $elm$json$Json$Decode$string));
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$ValueOs = F3(
	function (arch, name, version) {
		return {arch: arch, name: name, version: version};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$decodeValueOs = A4(
	$elm$json$Json$Decode$map3,
	$justgook$elm_webdriver$WebDriver$Internal$Value$Status$ValueOs,
	A2($elm$json$Json$Decode$field, 'arch', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'version', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map2 = _Json_map2;
var $justgook$elm_webdriver$WebDriver$Internal$Value$Status$decode = A3(
	$elm$json$Json$Decode$map2,
	$justgook$elm_webdriver$WebDriver$Internal$Value$Status$Status,
	A2($elm$json$Json$Decode$field, 'build', $justgook$elm_webdriver$WebDriver$Internal$Value$Status$decodeValueBuild),
	A2($elm$json$Json$Decode$field, 'os', $justgook$elm_webdriver$WebDriver$Internal$Value$Status$decodeValueOs));
var $justgook$elm_webdriver$WebDriver$Internal$Value$Timeouts$Timeouts = F3(
	function (implicit, pageLoad, script) {
		return {implicit: implicit, pageLoad: pageLoad, script: script};
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $justgook$elm_webdriver$WebDriver$Internal$Value$Timeouts$decode = A4(
	$elm$json$Json$Decode$map3,
	$justgook$elm_webdriver$WebDriver$Internal$Value$Timeouts$Timeouts,
	A2($elm$json$Json$Decode$field, 'implicit', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'pageLoad', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'script', $elm$json$Json$Decode$int));
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeError = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['value', 'message']),
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $justgook$elm_webdriver$WebDriver$Internal$Value$reduceErrors = A2(
	$elm$core$Basics$composeR,
	$elm$json$Json$Decode$maybe,
	$elm$json$Json$Decode$andThen(
		function (a) {
			if (a.$ === 'Just') {
				var result = a.a;
				return $elm$json$Json$Decode$succeed(result);
			} else {
				return A2($elm$json$Json$Decode$andThen, $elm$json$Json$Decode$fail, $justgook$elm_webdriver$WebDriver$Internal$Value$decodeError);
			}
		}));
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer = function (decodeValue) {
	var statusDecode = $elm$json$Json$Decode$int;
	var sessionId = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$string,
				$elm$json$Json$Decode$null('')
			]));
	var firefox = A2(
		$elm$json$Json$Decode$map,
		function (value) {
			return {value: value};
		},
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['value', 'capabilities']),
					decodeValue),
					A2($elm$json$Json$Decode$field, 'value', decodeValue)
				])));
	var chrome = A2(
		$elm$json$Json$Decode$andThen,
		function (status) {
			if (!status) {
				return A2(
					$elm$json$Json$Decode$map,
					function (value) {
						return {value: value};
					},
					A2($elm$json$Json$Decode$field, 'value', decodeValue));
			} else {
				return A2($elm$json$Json$Decode$andThen, $elm$json$Json$Decode$fail, $justgook$elm_webdriver$WebDriver$Internal$Value$decodeError);
			}
		},
		A2($elm$json$Json$Decode$field, 'status', statusDecode));
	return $justgook$elm_webdriver$WebDriver$Internal$Value$reduceErrors(
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[chrome, firefox])));
};
var $justgook$elm_webdriver$WebDriver$Internal$Value$Cookie = F7(
	function (name, value, domain, expiry, httpOnly, path, secure) {
		return {domain: domain, expiry: expiry, httpOnly: httpOnly, name: name, path: path, secure: secure, value: value};
	});
var $elm$json$Json$Decode$map7 = _Json_map7;
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeCookie = A8(
	$elm$json$Json$Decode$map7,
	$justgook$elm_webdriver$WebDriver$Internal$Value$Cookie,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'value', $elm$json$Json$Decode$string),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'domain', $elm$json$Json$Decode$string)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'expiry', $elm$json$Json$Decode$int)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'httpOnly', $elm$json$Json$Decode$bool)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string)),
	$elm$json$Json$Decode$maybe(
		A2($elm$json$Json$Decode$field, 'secure', $elm$json$Json$Decode$bool)));
var $elm$json$Json$Decode$list = _Json_decodeList;
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeCookies = $elm$json$Json$Decode$list($justgook$elm_webdriver$WebDriver$Internal$Value$decodeCookie);
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeElement = A2(
	$elm$json$Json$Decode$andThen,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$head,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map(
				A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm$json$Json$Decode$succeed)),
			$elm$core$Maybe$withDefault(
				$elm$json$Json$Decode$fail('Cannot get value for element')))),
	$elm$json$Json$Decode$keyValuePairs($elm$json$Json$Decode$string));
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeEmptyObject = A2(
	$elm$json$Json$Decode$andThen,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$head,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map(
				function (_v0) {
					return $elm$json$Json$Decode$fail('Expected to to get empty Object');
				}),
			$elm$core$Maybe$withDefault(
				$elm$json$Json$Decode$succeed(_Utils_Tuple0)))),
	$elm$json$Json$Decode$keyValuePairs(
		$elm$json$Json$Decode$null(_Utils_Tuple0)));
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map4 = _Json_map4;
var $justgook$elm_webdriver$WebDriver$Internal$Value$rect = F4(
	function (a, b, c, d) {
		return {height: a, width: b, x: c, y: d};
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeRect = A5(
	$elm$json$Json$Decode$map4,
	$justgook$elm_webdriver$WebDriver$Internal$Value$rect,
	A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'x', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'y', $elm$json$Json$Decode$float));
var $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder = {
	bool: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($elm$json$Json$Decode$bool),
	cookie: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$decodeCookie),
	cookies: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$decodeCookies),
	decodeRect: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$decodeRect),
	element: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		A2($elm$json$Json$Decode$map, $justgook$elm_webdriver$WebDriver$Internal$Value$Element, $justgook$elm_webdriver$WebDriver$Internal$Value$decodeElement)),
	elements: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		$elm$json$Json$Decode$list(
			A2($elm$json$Json$Decode$map, $justgook$elm_webdriver$WebDriver$Internal$Value$Element, $justgook$elm_webdriver$WebDriver$Internal$Value$decodeElement))),
	empty: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					$elm$json$Json$Decode$null(_Utils_Tuple0),
					$justgook$elm_webdriver$WebDriver$Internal$Value$decodeEmptyObject
				]))),
	getTimeouts: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$Timeouts$decode),
	listSring: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	setTimeouts: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$Timeouts$decode),
	status: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($justgook$elm_webdriver$WebDriver$Internal$Value$Status$decode),
	string: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($elm$json$Json$Decode$string),
	value: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer($elm$json$Json$Decode$value),
	windowHandle: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		A2($elm$json$Json$Decode$map, $justgook$elm_webdriver$WebDriver$Internal$Value$Handle, $elm$json$Json$Decode$string)),
	windowHandles: $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswer(
		$elm$json$Json$Decode$list(
			A2($elm$json$Json$Decode$map, $justgook$elm_webdriver$WebDriver$Internal$Value$Handle, $elm$json$Json$Decode$string)))
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $justgook$elm_webdriver$WebDriver$Step$Action$encodePause = function (duration) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('pause')),
				_Utils_Tuple2(
				'duration',
				$elm$json$Json$Encode$int(duration))
			]));
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $justgook$elm_webdriver$WebDriver$Step$Action$encodeKeyActivity = function (activity) {
	switch (activity.$) {
		case 'KeyDown':
			var k = activity.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('keyDown')),
						_Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$string(
							$elm$core$String$fromChar(k)))
					]));
		case 'KeyUp':
			var k = activity.a;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('keyUp')),
						_Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$string(
							$elm$core$String$fromChar(k)))
					]));
		default:
			var duration = activity.a;
			return $justgook$elm_webdriver$WebDriver$Step$Action$encodePause(duration);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $justgook$elm_webdriver$WebDriver$Step$Action$encodeOrigin = function (o) {
	switch (o.$) {
		case 'OriginElement':
			var e = o.a.a;
			return $elm$json$Json$Encode$string(e);
		case 'OriginViewport':
			return $elm$json$Json$Encode$string('viewport');
		default:
			return $elm$json$Json$Encode$string('pointer');
	}
};
var $justgook$elm_webdriver$WebDriver$Step$Action$encodePointerActivity = function (activity) {
	switch (activity.$) {
		case 'PointerDown':
			var button = activity.a.button;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('pointerDown')),
						_Utils_Tuple2(
						'button',
						$elm$json$Json$Encode$int(button))
					]));
		case 'PointerUp':
			var button = activity.a.button;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('pointerUp')),
						_Utils_Tuple2(
						'button',
						$elm$json$Json$Encode$int(button))
					]));
		case 'PointerMove':
			var duration = activity.a.duration;
			var origin = activity.a.origin;
			var x = activity.a.x;
			var y = activity.a.y;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('pointerMove')),
						_Utils_Tuple2(
						'duration',
						$elm$json$Json$Encode$int(duration)),
						_Utils_Tuple2(
						'origin',
						$justgook$elm_webdriver$WebDriver$Step$Action$encodeOrigin(origin)),
						_Utils_Tuple2(
						'x',
						$elm$json$Json$Encode$int(x)),
						_Utils_Tuple2(
						'y',
						$elm$json$Json$Encode$int(y))
					]));
		case 'PointerPause':
			var duration = activity.a;
			return $justgook$elm_webdriver$WebDriver$Step$Action$encodePause(duration);
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $justgook$elm_webdriver$WebDriver$Step$Action$pointerEncodeWrap = F2(
	function (pointerType, _v0) {
		var id = _v0.id;
		var actions = _v0.actions;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('pointer')),
					_Utils_Tuple2(
					'id',
					$elm$json$Json$Encode$string(id)),
					_Utils_Tuple2(
					'parameters',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'pointerType',
								$elm$json$Json$Encode$string(pointerType))
							]))),
					_Utils_Tuple2(
					'actions',
					A2($elm$json$Json$Encode$list, $justgook$elm_webdriver$WebDriver$Step$Action$encodePointerActivity, actions))
				]));
	});
var $justgook$elm_webdriver$WebDriver$Step$Action$encode = function (action) {
	switch (action.$) {
		case 'MouseAction':
			var data = action.a;
			return A2($justgook$elm_webdriver$WebDriver$Step$Action$pointerEncodeWrap, 'mouse', data);
		case 'PenAction':
			var data = action.a;
			return A2($justgook$elm_webdriver$WebDriver$Step$Action$pointerEncodeWrap, 'pen', data);
		case 'TouchAction':
			var data = action.a;
			return A2($justgook$elm_webdriver$WebDriver$Step$Action$pointerEncodeWrap, 'touch', data);
		case 'KeyAction':
			var id = action.a.id;
			var actions = action.a.actions;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('key')),
						_Utils_Tuple2(
						'id',
						$elm$json$Json$Encode$string(id)),
						_Utils_Tuple2(
						'actions',
						A2($elm$json$Json$Encode$list, $justgook$elm_webdriver$WebDriver$Step$Action$encodeKeyActivity, actions))
					]));
		default:
			var id = action.a.id;
			var actions = action.a.actions;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('none')),
						_Utils_Tuple2(
						'id',
						$elm$json$Json$Encode$string(id)),
						_Utils_Tuple2(
						'actions',
						A2(
							$elm$json$Json$Encode$list,
							function (_v1) {
								var a = _v1.a;
								return $justgook$elm_webdriver$WebDriver$Step$Action$encodePause(a);
							},
							actions))
					]));
	}
};
var $elm$http$Http$Internal$StringBody = F2(
	function (a, b) {
		return {$: 'StringBody', a: a, b: b};
	});
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		$elm$http$Http$Internal$StringBody,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $elm$http$Http$BadPayload = F2(
	function (a, b) {
		return {$: 'BadPayload', a: a, b: b};
	});
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$Internal$FormDataBody = function (a) {
	return {$: 'FormDataBody', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$http$Http$Internal$isStringBody = function (body) {
	if (body.$ === 'StringBody') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = _Http_expectStringResponse;
var $elm$http$Http$expectJson = function (decoder) {
	return $elm$http$Http$expectStringResponse(
		function (response) {
			var _v0 = A2($elm$json$Json$Decode$decodeString, decoder, response.body);
			if (_v0.$ === 'Err') {
				var decodeError = _v0.a;
				return $elm$core$Result$Err(
					$elm$json$Json$Decode$errorToString(decodeError));
			} else {
				var value = _v0.a;
				return $elm$core$Result$Ok(value);
			}
		});
};
var $elm$http$Http$Internal$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$request = $elm$http$Http$Internal$Request;
var $elm$http$Http$post = F3(
	function (url, body, decoder) {
		return $elm$http$Http$request(
			{
				body: body,
				expect: $elm$http$Http$expectJson(decoder),
				headers: _List_Nil,
				method: 'POST',
				timeout: $elm$core$Maybe$Nothing,
				url: url,
				withCredentials: false
			});
	});
var $justgook$elm_webdriver$WebDriver$Step$actions = F2(
	function (settings, action) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/actions')),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'actions',
							A2($elm$json$Json$Encode$list, $justgook$elm_webdriver$WebDriver$Step$Action$encode, action))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$addCookie = F3(
	function (settings, name, data_) {
		var data = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'cookie',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'name',
								$elm$json$Json$Encode$string(name)),
								_Utils_Tuple2(
								'value',
								$elm$json$Json$Encode$string(data_))
							])))
				]));
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/cookie')),
			$elm$http$Http$jsonBody(data),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$alertAccept = function (settings) {
	return A3(
		$elm$http$Http$post,
		settings.url + ('/session/' + (settings.sessionId + '/alert/accept')),
		$elm$http$Http$jsonBody(
			$elm$json$Json$Encode$object(_List_Nil)),
		$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $justgook$elm_webdriver$WebDriver$Step$alertDismiss = function (settings) {
	return A3(
		$elm$http$Http$post,
		settings.url + ('/session/' + (settings.sessionId + '/alert/dismiss')),
		$elm$http$Http$jsonBody(
			$elm$json$Json$Encode$object(_List_Nil)),
		$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $elm$http$Http$Internal$EmptyBody = {$: 'EmptyBody'};
var $elm$http$Http$emptyBody = $elm$http$Http$Internal$EmptyBody;
var $elm$http$Http$get = F2(
	function (url, decoder) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$emptyBody,
				expect: $elm$http$Http$expectJson(decoder),
				headers: _List_Nil,
				method: 'GET',
				timeout: $elm$core$Maybe$Nothing,
				url: url,
				withCredentials: false
			});
	});
var $justgook$elm_webdriver$WebDriver$Step$alertText = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/alert/text')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
};
var $justgook$elm_webdriver$WebDriver$Step$requestElemntProp_ = F4(
	function (path, decoder, settings, _v0) {
		var elem = _v0.a;
		return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + ('/' + path))))), decoder);
	});
var $justgook$elm_webdriver$WebDriver$Step$attribute = F3(
	function (settings, attr, elem) {
		return A4($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'attribute/' + attr, $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string, settings, elem);
	});
var $justgook$elm_webdriver$WebDriver$Step$history_ = F2(
	function (path, settings) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/' + path))),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(_List_Nil)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$back = $justgook$elm_webdriver$WebDriver$Step$history_('back');
var $justgook$elm_webdriver$WebDriver$Step$clear = F2(
	function (settings, _v0) {
		var elem = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + '/clear')))),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(_List_Nil)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$click = F2(
	function (settings, _v0) {
		var elem = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + '/click')))),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(_List_Nil)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete = F2(
	function (url, decoder) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$emptyBody,
				expect: $elm$http$Http$expectJson(decoder),
				headers: _List_Nil,
				method: 'DELETE',
				timeout: $elm$core$Maybe$Nothing,
				url: url,
				withCredentials: false
			});
	});
var $justgook$elm_webdriver$WebDriver$Step$close = function (settings) {
	return A2($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete, settings.url + ('/session/' + (settings.sessionId + '/window')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.windowHandles);
};
var $justgook$elm_webdriver$WebDriver$Step$cookie = F2(
	function (settings, name) {
		return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + ('/cookie/' + name))), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.cookie);
	});
var $justgook$elm_webdriver$WebDriver$Step$cookies = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/cookie')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.cookies);
};
var $justgook$elm_webdriver$WebDriver$Step$css = F3(
	function (settings, prop, elem) {
		return A4($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'css/' + prop, $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string, settings, elem);
	});
var $justgook$elm_webdriver$WebDriver$Step$deleteCookie = F2(
	function (settings, name) {
		return A2($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete, settings.url + ('/session/' + (settings.sessionId + ('/cookie/' + name))), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$deleteCookies = function (settings) {
	return A2($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete, settings.url + ('/session/' + (settings.sessionId + '/cookie')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$jsonFromSelector = function (selector) {
	return $elm$json$Json$Encode$object(
		function (_v1) {
			var a = _v1.a;
			var b = _v1.b;
			return _List_fromArray(
				[a, b]);
		}(
			A3(
				$elm$core$Tuple$mapBoth,
				function (using) {
					return _Utils_Tuple2(
						'using',
						$elm$json$Json$Encode$string(using));
				},
				function (value) {
					return _Utils_Tuple2(
						'value',
						$elm$json$Json$Encode$string(value));
				},
				function () {
					switch (selector.$) {
						case 'CSSselector':
							var q = selector.a;
							return _Utils_Tuple2('css selector', q);
						case 'LinkText':
							var q = selector.a;
							return _Utils_Tuple2('link text', q);
						case 'PartialLinkText':
							var q = selector.a;
							return _Utils_Tuple2('partial link text', q);
						case 'TagName':
							var q = selector.a;
							return _Utils_Tuple2('tag name', q);
						default:
							var q = selector.a;
							return _Utils_Tuple2('xpath', q);
					}
				}())));
};
var $justgook$elm_webdriver$WebDriver$Step$element = F2(
	function (settings, selector) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/element')),
			$elm$http$Http$jsonBody(
				$justgook$elm_webdriver$WebDriver$Internal$Value$jsonFromSelector(selector)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.element);
	});
var $justgook$elm_webdriver$WebDriver$Step$elementInElement = F3(
	function (settings, selector, _v0) {
		var elem = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + '/element')))),
			$elm$http$Http$jsonBody(
				$justgook$elm_webdriver$WebDriver$Internal$Value$jsonFromSelector(selector)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.element);
	});
var $justgook$elm_webdriver$WebDriver$Step$elementScreenshot = A2($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'screenshot', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
var $justgook$elm_webdriver$WebDriver$Step$elements = F2(
	function (settings, selector) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/elements')),
			$elm$http$Http$jsonBody(
				$justgook$elm_webdriver$WebDriver$Internal$Value$jsonFromSelector(selector)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.elements);
	});
var $justgook$elm_webdriver$WebDriver$Step$elementsInElement = F3(
	function (settings, selector, _v0) {
		var elem = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + '/elements')))),
			$elm$http$Http$jsonBody(
				$justgook$elm_webdriver$WebDriver$Internal$Value$jsonFromSelector(selector)),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.elements);
	});
var $justgook$elm_webdriver$WebDriver$Step$enabled = A2($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'enabled', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.bool);
var $justgook$elm_webdriver$WebDriver$Step$Internal$execute_ = F4(
	function (path, settings, _function, args) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + path)),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'script',
							$elm$json$Json$Encode$string(_function)),
							_Utils_Tuple2(
							'args',
							A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, args))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.value);
	});
var $justgook$elm_webdriver$WebDriver$Step$execute = $justgook$elm_webdriver$WebDriver$Step$Internal$execute_('/execute/sync');
var $justgook$elm_webdriver$WebDriver$Step$Selenium$execute = $justgook$elm_webdriver$WebDriver$Step$Internal$execute_('/execute');
var $justgook$elm_webdriver$WebDriver$Step$executeAsync = $justgook$elm_webdriver$WebDriver$Step$Internal$execute_('/execute/async');
var $justgook$elm_webdriver$WebDriver$Step$Selenium$executeAsync = $justgook$elm_webdriver$WebDriver$Step$Internal$execute_('/execute_async');
var $justgook$elm_webdriver$WebDriver$Step$forward = $justgook$elm_webdriver$WebDriver$Step$history_('forward');
var $justgook$elm_webdriver$WebDriver$Step$frame = F2(
	function (settings, id) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/frame')),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2('id', id)
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$frameParent = function (settings) {
	return A3(
		$elm$http$Http$post,
		settings.url + ('/session/' + (settings.sessionId + '/frame/parent')),
		$elm$http$Http$jsonBody(
			$elm$json$Json$Encode$object(_List_Nil)),
		$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $justgook$elm_webdriver$WebDriver$Step$window_ = F3(
	function (path, decoder, settings) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/window/' + path))),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(_List_Nil)),
			decoder);
	});
var $justgook$elm_webdriver$WebDriver$Step$fullscreen = A2($justgook$elm_webdriver$WebDriver$Step$window_, 'fullscreen', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
var $justgook$elm_webdriver$WebDriver$Step$getTimeouts = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/timeouts')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.getTimeouts);
};
var $justgook$elm_webdriver$WebDriver$Step$getUrl = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/url')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
};
var $justgook$elm_webdriver$WebDriver$Step$getWindowRect = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/window/rect')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.decodeRect);
};
var $justgook$elm_webdriver$WebDriver$Step$maximize = A2($justgook$elm_webdriver$WebDriver$Step$window_, 'maximize', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
var $justgook$elm_webdriver$WebDriver$Step$minimize = A2($justgook$elm_webdriver$WebDriver$Step$window_, 'minimize', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.decodeRect);
var $justgook$elm_webdriver$WebDriver$Step$promptText = F2(
	function (settings, data) {
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/alert/text')),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'text',
							$elm$json$Json$Encode$string(data))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$property = F3(
	function (settings, prop, elem) {
		return A4($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'property/' + prop, $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string, settings, elem);
	});
var $justgook$elm_webdriver$WebDriver$Step$rect = F2(
	function (settings, elem) {
		return A4($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'rect', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.decodeRect, settings, elem);
	});
var $justgook$elm_webdriver$WebDriver$Step$refresh = $justgook$elm_webdriver$WebDriver$Step$history_('refresh');
var $justgook$elm_webdriver$WebDriver$Step$release = function (settings) {
	return A2($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete, settings.url + ('/session/' + (settings.sessionId + '/actions')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $justgook$elm_webdriver$WebDriver$Step$screenshot = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/screenshot')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
};
var $justgook$elm_webdriver$WebDriver$Step$selected = A2($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'selected', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.bool);
var $justgook$elm_webdriver$WebDriver$Step$setTimeouts = F2(
	function (settings, data) {
		return function (body) {
			return A3($elm$http$Http$post, settings.url + ('/session/' + (settings.sessionId + '/timeouts')), body, $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.setTimeouts);
		}(
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'script',
							$elm$json$Json$Encode$int(data.script)),
							_Utils_Tuple2(
							'pageLoad',
							$elm$json$Json$Encode$int(data.pageLoad)),
							_Utils_Tuple2(
							'implicit',
							$elm$json$Json$Encode$int(data.implicit))
						]))));
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $justgook$elm_webdriver$WebDriver$Step$setWindowRect = F2(
	function (settings, _v0) {
		var height = _v0.height;
		var width = _v0.width;
		var x = _v0.x;
		var y = _v0.y;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/window/rect')),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'height',
							$elm$json$Json$Encode$float(height)),
							_Utils_Tuple2(
							'width',
							$elm$json$Json$Encode$float(width)),
							_Utils_Tuple2(
							'x',
							$elm$json$Json$Encode$float(x)),
							_Utils_Tuple2(
							'y',
							$elm$json$Json$Encode$float(y))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.decodeRect);
	});
var $justgook$elm_webdriver$WebDriver$Step$source = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/url')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
};
var $justgook$elm_webdriver$WebDriver$Step$status = function (settings) {
	return A2($elm$http$Http$get, settings.url + '/status', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.status);
};
var $justgook$elm_webdriver$WebDriver$Step$tagName = A2($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'name', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
var $justgook$elm_webdriver$WebDriver$Step$text = A2($justgook$elm_webdriver$WebDriver$Step$requestElemntProp_, 'text', $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
var $justgook$elm_webdriver$WebDriver$Step$title = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/title')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.string);
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			$elm$core$Task$onError,
			A2($elm$core$Basics$composeL, $elm$core$Task$fail, convert),
			task);
	});
var $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$responseToEnglish = function (response) {
	return 'I tried to connect to ' + (response.url + (' but the response gave me the error code: ' + ($elm$core$String$fromInt(response.status.code) + (' which is known as: \"' + (response.status.message + '\".')))));
};
var $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$stringifyError = function (error) {
	switch (error.$) {
		case 'BadUrl':
			var url = error.a;
			return 'I was expecting a valid URL, but I got the url: ' + url;
		case 'Timeout':
			return 'It took too long to get a response from the server!';
		case 'NetworkError':
			return 'Unable to make a connection. Is your network working?';
		case 'BadStatus':
			var response = error.a;
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$responseToEnglish(response);
		default:
			var errorMessage = error.a;
			var response = error.b;
			return 'I failed because of the following error: ' + (errorMessage + (' and ' + $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$responseToEnglish(response)));
	}
};
var $elm$http$Http$toTask = function (_v0) {
	var request_ = _v0.a;
	return A2(_Http_toTask, request_, $elm$core$Maybe$Nothing);
};
var $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask = A2(
	$elm$core$Basics$composeR,
	$elm$http$Http$toTask,
	$elm$core$Task$mapError($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$stringifyError));
var $justgook$elm_webdriver$WebDriver$Step$url = F2(
	function (settings, url_) {
		return function (body) {
			return A3($elm$http$Http$post, settings.url + ('/session/' + (settings.sessionId + '/url')), body, $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
		}(
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'url',
							$elm$json$Json$Encode$string(url_))
						]))));
	});
var $justgook$elm_webdriver$WebDriver$Step$value = F3(
	function (settings, data, _v0) {
		var elem = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + ('/element/' + (elem + '/value')))),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'value',
							A2(
								$elm$json$Json$Encode$list,
								$elm$json$Json$Encode$string,
								_List_fromArray(
									[data])))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$window = F2(
	function (settings, _v0) {
		var handle = _v0.a;
		return A3(
			$elm$http$Http$post,
			settings.url + ('/session/' + (settings.sessionId + '/window')),
			$elm$http$Http$jsonBody(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'name',
							$elm$json$Json$Encode$string(handle))
						]))),
			$justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
	});
var $justgook$elm_webdriver$WebDriver$Step$windowHandle = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/window')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.windowHandle);
};
var $justgook$elm_webdriver$WebDriver$Step$windowHandles = function (settings) {
	return A2($elm$http$Http$get, settings.url + ('/session/' + (settings.sessionId + '/window/handles')), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.windowHandles);
};
var $justgook$elm_webdriver$WebDriver$Step$functions = function (options) {
	return {
		actions: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$actions, options, data));
		},
		addCookie: F2(
			function (name, data) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$addCookie, options, name, data));
			}),
		alertAccept: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$alertAccept(options)),
		alertDismiss: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$alertDismiss(options)),
		alertText: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$alertText(options)),
		attribute: F2(
			function (string, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$attribute, options, string, elm));
			}),
		back: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$back(options)),
		clear: function (elm) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$clear, options, elm));
		},
		click: function (elm) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$click, options, elm));
		},
		close: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$close(options)),
		cookie: function (name) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$cookie, options, name));
		},
		cookies: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$cookies(options)),
		css: F2(
			function (string, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$css, options, string, elm));
			}),
		deleteCookie: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$deleteCookie, options, data));
		},
		deleteCookies: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$deleteCookies(options)),
		element: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$element, options, data));
		},
		elementInElement: F2(
			function (selector, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$elementInElement, options, selector, elm));
			}),
		elementScreenshot: function (elm) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$elementScreenshot, options, elm));
		},
		elements: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$elements, options, data));
		},
		elementsInElement: F2(
			function (selector, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$elementsInElement, options, selector, elm));
			}),
		enabled: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$enabled, options, data));
		},
		execute: F2(
			function (script, args) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$execute, options, script, args));
			}),
		executeAsync: F2(
			function (script, args) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$executeAsync, options, script, args));
			}),
		forward: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$forward(options)),
		frame: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$frame, options, data));
		},
		frameParent: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$frameParent(options)),
		fullscreen: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$fullscreen(options)),
		getTimeouts: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$getTimeouts(options)),
		getUrl: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$getUrl(options)),
		getWindowRect: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$getWindowRect(options)),
		maximize: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$maximize(options)),
		minimize: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$minimize(options)),
		promptText: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$promptText, options, data));
		},
		property: F2(
			function (string, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$property, options, string, elm));
			}),
		rect: function (elm) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$rect, options, elm));
		},
		refresh: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$refresh(options)),
		release: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$release(options)),
		screenshot: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$screenshot(options)),
		selected: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$selected, options, data));
		},
		selenium: {
			execute: F2(
				function (script, args) {
					return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
						A3($justgook$elm_webdriver$WebDriver$Step$Selenium$execute, options, script, args));
				}),
			executeAsync: F2(
				function (script, args) {
					return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
						A3($justgook$elm_webdriver$WebDriver$Step$Selenium$executeAsync, options, script, args));
				})
		},
		setTimeouts: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$setTimeouts, options, data));
		},
		setWindowRect: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$setWindowRect, options, data));
		},
		source: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$source(options)),
		status: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$status(
				{url: options.url})),
		tagName: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$tagName, options, data));
		},
		text: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$text, options, data));
		},
		title: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$title(options)),
		url: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$url, options, data));
		},
		value: F2(
			function (string, elm) {
				return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					A3($justgook$elm_webdriver$WebDriver$Step$value, options, string, elm));
			}),
		window: function (data) {
			return $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2($justgook$elm_webdriver$WebDriver$Step$window, options, data));
		},
		windowHandle: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$windowHandle(options)),
		windowHandles: $justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
			$justgook$elm_webdriver$WebDriver$Step$windowHandles(options))
	};
};
var $justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswerWithSession = function (decodeValue) {
	var statusDecode = $elm$json$Json$Decode$int;
	var sessionId = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$string,
				$elm$json$Json$Decode$null('')
			]));
	var firefox = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (sessionId_, value) {
				return {sessionId: sessionId_, value: value};
			}),
		A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['value', 'sessionId']),
			sessionId),
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$at,
					_List_fromArray(
						['value', 'capabilities']),
					decodeValue),
					A2($elm$json$Json$Decode$field, 'value', decodeValue)
				])));
	var chrome = A2(
		$elm$json$Json$Decode$andThen,
		function (status) {
			if (!status) {
				return A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (sessionId_, value) {
							return {sessionId: sessionId_, value: value};
						}),
					A2($elm$json$Json$Decode$field, 'sessionId', sessionId),
					A2($elm$json$Json$Decode$field, 'value', decodeValue));
			} else {
				return A2($elm$json$Json$Decode$andThen, $elm$json$Json$Decode$fail, $justgook$elm_webdriver$WebDriver$Internal$Value$decodeError);
			}
		},
		A2($elm$json$Json$Decode$field, 'status', statusDecode));
	return $justgook$elm_webdriver$WebDriver$Internal$Value$reduceErrors(
		$elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[chrome, firefox])));
};
var $justgook$elm_webdriver$WebDriver$Step$sessionStart = F2(
	function (settings, capabilities) {
		return function (body) {
			return A3(
				$elm$http$Http$post,
				settings.url + '/session',
				body,
				$justgook$elm_webdriver$WebDriver$Internal$Value$decodeAnswerWithSession($elm$json$Json$Decode$value));
		}(
			$elm$http$Http$jsonBody(capabilities));
	});
var $elm$core$Process$sleep = _Process_sleep;
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $justgook$elm_webdriver$WebDriver$Step$sessionStop = function (settings) {
	return A2($justgook$elm_webdriver$WebDriver$Internal$HttpHelper$delete, settings.url + ('/session/' + settings.sessionId), $justgook$elm_webdriver$WebDriver$Internal$Value$answerDecoder.empty);
};
var $justgook$elm_webdriver$WebDriver$Internal$Browser$stop = F4(
	function (driverUrl, sessionId, value, result) {
		return A2(
			$elm$core$Task$onError,
			function (err) {
				return $elm$core$Task$succeed(
					$elm$core$Result$Err(
						{context: value, critical: true, error: 'Problem STOP Webdriver host (' + (err + ')')}));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v0) {
					return $elm$core$Task$succeed(
						A2(
							$elm$core$Result$mapError,
							function (error) {
								return {context: value, critical: false, error: error};
							},
							A2(
								$elm$core$Result$map,
								$elm$core$Basics$always(value),
								result)));
				},
				$justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
					$justgook$elm_webdriver$WebDriver$Step$sessionStop(
						{sessionId: sessionId, url: driverUrl}))));
	});
var $justgook$elm_webdriver$WebDriver$Internal$Browser$browser = F3(
	function (driverUrl, capabilities, tests) {
		var restart = A2(
			$elm$core$Task$andThen,
			function (_v2) {
				var sessionId = _v2.sessionId;
				var value = _v2.value;
				return $elm$core$Task$succeed(
					A2($justgook$elm_webdriver$WebDriver$Internal$Browser$SessionIdHandler, sessionId, value));
			},
			$justgook$elm_webdriver$WebDriver$Internal$HttpHelper$toTask(
				A2(
					$justgook$elm_webdriver$WebDriver$Step$sessionStart,
					{url: driverUrl},
					capabilities)));
		var exitOnError = function (value) {
			return $elm$core$Task$onError(
				function (err) {
					return $elm$core$Task$succeed(
						A2($justgook$elm_webdriver$WebDriver$Internal$Browser$ErrorHandler, 'Problem START Webdriver host (' + (err + ')'), value));
				});
		};
		return A2(
			$elm$core$Task$andThen,
			function (result) {
				if (result.$ === 'SessionIdHandler') {
					var sessionId = result.a;
					var value = result.b;
					var func = $justgook$elm_webdriver$WebDriver$Step$functions(
						{sessionId: sessionId, url: driverUrl});
					return A2(
						$elm$core$Task$andThen,
						A3($justgook$elm_webdriver$WebDriver$Internal$Browser$stop, driverUrl, sessionId, value),
						tests(func));
				} else {
					var err = result.a;
					var value = result.b;
					return $elm$core$Task$succeed(
						$elm$core$Result$Err(
							{context: value, critical: true, error: err}));
				}
			},
			A2(
				exitOnError,
				$elm$json$Json$Encode$null,
				A2(
					$elm$core$Task$onError,
					function (_v0) {
						return A2(
							$elm$core$Task$andThen,
							$elm$core$Basics$always(restart),
							$elm$core$Process$sleep(300));
					},
					restart)));
	});
var $justgook$elm_webdriver$Util$List$Extra$count = function (predicate) {
	return A2(
		$elm$core$List$foldl,
		F2(
			function (x, acc) {
				return predicate(x) ? (acc + 1) : acc;
			}),
		0);
};
var $justgook$elm_webdriver$Util$List$Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i + 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$List$foldl,
			step,
			_Utils_Tuple2(0, acc),
			list).b;
	});
var $justgook$elm_webdriver$WebDriver$Setup$runnable = function (item) {
	var _v0 = item.status;
	switch (_v0.$) {
		case 'Done':
			return $elm$core$Maybe$Nothing;
		case 'Waiting':
			var f = _v0.a;
			return $elm$core$Maybe$Just(f);
		case 'Running':
			return $elm$core$Maybe$Nothing;
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$take = F2(
	function (validator, queue) {
		return A3(
			$justgook$elm_webdriver$Util$List$Extra$indexedFoldl,
			F3(
				function (index, item, _v0) {
					var acc1 = _v0.a;
					var acc2 = _v0.b;
					var running = A2(
						$justgook$elm_webdriver$Util$List$Extra$count,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.status;
							},
							$elm$core$Basics$eq($justgook$elm_webdriver$WebDriver$Setup$Running)),
						acc2);
					var _v1 = _Utils_Tuple2(
						$justgook$elm_webdriver$WebDriver$Setup$runnable(item),
						A2(validator, running, item.info));
					if (_v1.a.$ === 'Just') {
						if (_v1.b.$ === 'Just') {
							var exec = _v1.a.a;
							var url = _v1.b.a.url;
							var capabilities = _v1.b.a.capabilities;
							return _Utils_Tuple2(
								_Utils_ap(
									acc1,
									_List_fromArray(
										[
											A2(
											$elm$core$Task$map,
											function (r) {
												return $justgook$elm_webdriver$WebDriver$Setup$Reference(
													{index: index, info: item.info, result: r});
											},
											A3($justgook$elm_webdriver$WebDriver$Internal$Browser$browser, url, capabilities, exec))
										])),
								_Utils_ap(
									acc2,
									_List_fromArray(
										[
											_Utils_update(
											item,
											{status: $justgook$elm_webdriver$WebDriver$Setup$Running})
										])));
						} else {
							var f = _v1.a.a;
							var _v2 = _v1.b;
							return ($elm$core$List$length(acc1) > 0) ? _Utils_Tuple2(
								acc1,
								_Utils_ap(
									acc2,
									_List_fromArray(
										[item]))) : _Utils_Tuple2(
								acc1,
								_Utils_ap(
									acc2,
									_List_fromArray(
										[
											_Utils_update(
											item,
											{status: $justgook$elm_webdriver$WebDriver$Setup$RunTimeSkip})
										])));
						}
					} else {
						return _Utils_Tuple2(
							acc1,
							_Utils_ap(
								acc2,
								_List_fromArray(
									[item])));
					}
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			queue);
	});
var $justgook$elm_webdriver$WebDriver$Setup$update = F2(
	function (validator, _v0) {
		var model = _v0.a;
		return function (_v3) {
			var a = _v3.a;
			var b = _v3.b;
			return _Utils_Tuple2(
				$justgook$elm_webdriver$WebDriver$Setup$SuiteState(b),
				$justgook$elm_webdriver$WebDriver$Setup$Tasks(a));
		}(
			A3(
				$justgook$elm_webdriver$Util$List$Extra$mapAccuml,
				F2(
					function (tasks, _v1) {
						var info = _v1.a;
						var queue = _v1.b;
						var _v2 = A2($justgook$elm_webdriver$WebDriver$Setup$take, validator, queue);
						var newTasks = _v2.a;
						var newQueue = _v2.b;
						return _Utils_Tuple2(
							_Utils_ap(tasks, newTasks),
							_Utils_Tuple2(info, newQueue));
					}),
				_List_Nil,
				model));
	});
var $justgook$elm_webdriver$WebDriver$Setup$setup = F3(
	function (info, suite, validator) {
		return A2(
			$elm$core$Result$map,
			$justgook$elm_webdriver$WebDriver$Setup$update(validator),
			A2($justgook$elm_webdriver$WebDriver$Setup$setup_, info, suite));
	});
var $justgook$elm_webdriver$WebDriver$Internal$Value$CSSselector = function (a) {
	return {$: 'CSSselector', a: a};
};
var $justgook$elm_webdriver$WebDriver$Step$Element$css = function (query) {
	return $justgook$elm_webdriver$WebDriver$Internal$Value$CSSselector(query);
};
var $justgook$elm_webdriver$WebDriver$Internal$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $justgook$elm_webdriver$WebDriver$Internal$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $justgook$elm_webdriver$WebDriver$Internal$duplicatedName = function () {
	var names = function (test) {
		names:
		while (true) {
			switch (test.$) {
				case 'Labeled':
					var str = test.a;
					return _List_fromArray(
						[str]);
				case 'Batch':
					var subtests = test.a;
					return A2($elm$core$List$concatMap, names, subtests);
				case 'UnitTest':
					return _List_Nil;
				case 'ParseErr':
					return _List_Nil;
				case 'Browser':
					var subTest = test.b;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				case 'Skipped':
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				default:
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
			}
		}
	};
	var insertOrFail = function (newName) {
		return $elm$core$Result$andThen(
			function (oldNames) {
				return A2($elm$core$Set$member, newName, oldNames) ? $elm$core$Result$Err(newName) : $elm$core$Result$Ok(
					A2($elm$core$Set$insert, newName, oldNames));
			});
	};
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$concatMap(names),
		A2(
			$elm$core$List$foldl,
			insertOrFail,
			$elm$core$Result$Ok($elm$core$Set$empty)));
}();
var $justgook$elm_webdriver$WebDriver$Internal$ParseErr = function (a) {
	return {$: 'ParseErr', a: a};
};
var $justgook$elm_webdriver$WebDriver$Internal$failNow = function (description) {
	return $justgook$elm_webdriver$WebDriver$Internal$ParseErr(description);
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$trim = _String_trim;
var $justgook$elm_webdriver$WebDriver$describe = F2(
	function (untrimmedDesc, tests) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		if ($elm$core$String$isEmpty(desc)) {
			return $justgook$elm_webdriver$WebDriver$Internal$failNow('This `describe` has a blank description. Let\'s give it a useful one!');
		} else {
			if ($elm$core$List$isEmpty(tests)) {
				return $justgook$elm_webdriver$WebDriver$Internal$failNow('This `describe ' + (desc + '` has no tests in it. Let\'s give it some!'));
			} else {
				var _v0 = $justgook$elm_webdriver$WebDriver$Internal$duplicatedName(tests);
				if (_v0.$ === 'Err') {
					var duped = _v0.a;
					return $justgook$elm_webdriver$WebDriver$Internal$failNow('The tests \'' + (desc + ('\' contain multiple tests named \'' + (duped + '\'. Let\'s rename them so we know which is which.'))));
				} else {
					var childrenNames = _v0.a;
					return A2($elm$core$Set$member, desc, childrenNames) ? $justgook$elm_webdriver$WebDriver$Internal$failNow('The test \'' + (desc + '\' contains a child test of the same name. Let\'s rename them so we know which is which.')) : A2(
						$justgook$elm_webdriver$WebDriver$Internal$Labeled,
						desc,
						$justgook$elm_webdriver$WebDriver$Internal$Batch(tests));
				}
			}
		}
	});
var $justgook$elm_webdriver$WebDriver$Assert$custom = F3(
	function (f, a, b) {
		return _Utils_eq(a, b) ? $elm$core$Task$succeed(b) : $elm$core$Task$fail(
			f(b));
	});
var $justgook$elm_webdriver$WebDriver$Assert$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[expected, '╵', '│ ' + comparison, '╷', actual]));
	});
var $justgook$elm_webdriver$WebDriver$Assert$equal = F2(
	function (a, b) {
		return A3(
			$justgook$elm_webdriver$WebDriver$Assert$custom,
			function (_v0) {
				return A3($justgook$elm_webdriver$WebDriver$Assert$verticalBar, 'Assert.equal', a, b);
			},
			a,
			b);
	});
var $justgook$elm_webdriver$WebDriver$Internal$UnitTest = function (a) {
	return {$: 'UnitTest', a: a};
};
var $justgook$elm_webdriver$WebDriver$test = F2(
	function (untrimmedDesc, thunk) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		return A2(
			$justgook$elm_webdriver$WebDriver$Internal$Labeled,
			desc,
			function (test_) {
				return $justgook$elm_webdriver$WebDriver$Internal$UnitTest(test_);
			}(
				A2(
					$elm$core$Basics$composeR,
					thunk,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Task$andThen(
							function (_v0) {
								return $elm$core$Task$succeed(
									$elm$core$Result$Ok(_Utils_Tuple0));
							}),
						$elm$core$Task$onError(
							A2($elm$core$Basics$composeR, $elm$core$Result$Err, $elm$core$Task$succeed))))));
	});
var $author$project$Test$All$suite = A2(
	$justgook$elm_webdriver$WebDriver$describe,
	'Web Page Navigate',
	_List_fromArray(
		[
			A2(
			$justgook$elm_webdriver$WebDriver$test,
			'star elm-webdriver',
			function (_v0) {
				var url = _v0.url;
				var element = _v0.element;
				var attribute = _v0.attribute;
				return A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.value;
						},
						$justgook$elm_webdriver$WebDriver$Assert$equal('justgook/elm-webdriver')),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.value;
							},
							attribute('innerText')),
						A2(
							$elm$core$Task$andThen,
							function (_v1) {
								return element(
									$justgook$elm_webdriver$WebDriver$Step$Element$css('h1'));
							},
							url('https://github.com/justgook/elm-webdriver'))));
			})
		]));
var $author$project$Main$validator = F2(
	function (a, b) {
		return (_Utils_cmp(b.instances, a) > 0) ? $elm$core$Maybe$Just(b) : $elm$core$Maybe$Nothing;
	});
var $author$project$Main$init = function (flags) {
	return $author$project$Main$lifeCycle(
		A3($justgook$elm_webdriver$WebDriver$Setup$setup, $author$project$Main$config, $author$project$Test$All$suite, $author$project$Main$validator));
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $justgook$elm_webdriver$WebDriver$Setup$Report = function (a) {
	return {$: 'Report', a: a};
};
var $justgook$elm_webdriver$WebDriver$Setup$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $justgook$elm_webdriver$Util$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			var head = A2($elm$core$List$take, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					head,
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $justgook$elm_webdriver$WebDriver$Setup$apply = F2(
	function (_v0, _v1) {
		var data = _v0.a;
		var model = _v1.a;
		return $justgook$elm_webdriver$WebDriver$Setup$SuiteState(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var info = _v2.a;
					var queue = _v2.b;
					return _Utils_eq(info, data.info) ? _Utils_Tuple2(
						info,
						A3(
							$justgook$elm_webdriver$Util$List$Extra$updateAt,
							data.index,
							function (item) {
								return _Utils_update(
									item,
									{
										status: $justgook$elm_webdriver$WebDriver$Setup$Done(data.result)
									});
							},
							queue)) : _Utils_Tuple2(info, queue);
				},
				model));
	});
var $justgook$elm_webdriver$Util$List$Extra$getFirst = function (validation) {
	var getFirst_ = F2(
		function (index, list) {
			getFirst_:
			while (true) {
				if (!list.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					if (!list.b.b) {
						var x = list.a;
						return validation(x) ? $elm$core$Maybe$Just(x) : $elm$core$Maybe$Nothing;
					} else {
						var x = list.a;
						var xs = list.b;
						if (validation(x)) {
							return $elm$core$Maybe$Just(x);
						} else {
							var $temp$index = index + 1,
								$temp$list = xs;
							index = $temp$index;
							list = $temp$list;
							continue getFirst_;
						}
					}
				}
			}
		});
	return getFirst_(0);
};
var $justgook$elm_webdriver$WebDriver$Setup$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var $justgook$elm_webdriver$WebDriver$Setup$Pass = {$: 'Pass'};
var $justgook$elm_webdriver$WebDriver$Setup$Skip = {$: 'Skip'};
var $justgook$elm_webdriver$WebDriver$Setup$runtimToStatus = function (s) {
	switch (s.$) {
		case 'Done':
			if (s.a.$ === 'Err') {
				var critical = s.a.a.critical;
				var error = s.a.a.error;
				var context = s.a.a.context;
				return $justgook$elm_webdriver$WebDriver$Setup$Fail(error);
			} else {
				var context = s.a.a;
				return $justgook$elm_webdriver$WebDriver$Setup$Pass;
			}
		case 'Waiting':
			return $justgook$elm_webdriver$WebDriver$Setup$Skip;
		case 'Running':
			return $justgook$elm_webdriver$WebDriver$Setup$Skip;
		default:
			return $justgook$elm_webdriver$WebDriver$Setup$Skip;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$makeReport = function (_v0) {
	var model = _v0.a;
	return A2(
		$elm$core$List$concatMap,
		function (_v1) {
			var items = _v1.b;
			return A2(
				$elm$core$List$map,
				function (item) {
					return {
						desc: item.desc,
						info: item.info,
						status: $justgook$elm_webdriver$WebDriver$Setup$runtimToStatus(item.status)
					};
				},
				items);
		},
		model);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $justgook$elm_webdriver$WebDriver$Setup$exit = F2(
	function (done, _v0) {
		var model = _v0.a;
		return _Utils_eq(
			$elm$core$Maybe$Nothing,
			A2(
				$justgook$elm_webdriver$Util$List$Extra$getFirst,
				function (_v1) {
					var a = _v1.b;
					return !_Utils_eq(
						A2(
							$justgook$elm_webdriver$Util$List$Extra$getFirst,
							function (b) {
								return done(b.status);
							},
							a),
						$elm$core$Maybe$Nothing);
				},
				model)) ? $elm$core$Maybe$Just(
			$justgook$elm_webdriver$WebDriver$Setup$makeReport(
				$justgook$elm_webdriver$WebDriver$Setup$SuiteState(model))) : $elm$core$Maybe$Nothing;
	});
var $justgook$elm_webdriver$WebDriver$Setup$exitStatus = function (s) {
	switch (s.$) {
		case 'Done':
			return false;
		case 'Waiting':
			var f = s.a;
			return true;
		case 'Running':
			return true;
		default:
			return false;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$exitStatusCritical = function (s) {
	switch (s.$) {
		case 'Done':
			return false;
		case 'Waiting':
			var f = s.a;
			return false;
		case 'Running':
			return true;
		default:
			return false;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$isCritical = function (_v0) {
	var result = _v0.a.result;
	if (result.$ === 'Err') {
		var critical = result.a.critical;
		return critical;
	} else {
		return false;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$next = F3(
	function (validator, ref, model) {
		return function (m) {
			if ($justgook$elm_webdriver$WebDriver$Setup$isCritical(ref)) {
				return _Utils_Tuple2(
					m,
					A2(
						$elm$core$Maybe$withDefault,
						$justgook$elm_webdriver$WebDriver$Setup$Tasks(_List_Nil),
						A2(
							$elm$core$Maybe$map,
							$justgook$elm_webdriver$WebDriver$Setup$Report,
							A2($justgook$elm_webdriver$WebDriver$Setup$exit, $justgook$elm_webdriver$WebDriver$Setup$exitStatusCritical, m))));
			} else {
				var _v0 = A2($justgook$elm_webdriver$WebDriver$Setup$update, validator, m);
				var newModel = _v0.a;
				var tasks = _v0.b;
				return _Utils_Tuple2(
					newModel,
					A2(
						$elm$core$Maybe$withDefault,
						tasks,
						A2(
							$elm$core$Maybe$map,
							$justgook$elm_webdriver$WebDriver$Setup$Report,
							A2($justgook$elm_webdriver$WebDriver$Setup$exit, $justgook$elm_webdriver$WebDriver$Setup$exitStatus, newModel))));
			}
		}(
			A2($justgook$elm_webdriver$WebDriver$Setup$apply, ref, model));
	});
var $author$project$Main$addCmd = F2(
	function (cmd, _v0) {
		var model = _v0.a;
		var oldCmd = _v0.b;
		return _Utils_Tuple2(
			model,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, oldCmd])));
	});
var $author$project$Main$ansi = {black: '\u001B[30m', blue: '\u001B[34m', cyan: '\u001B[36m', green: '\u001B[32m', magenta: '\u001B[35m', red: '\u001B[31m', reset: '\u001B[0m', white: '\u001B[37m', yellow: '\u001B[33m'};
var $elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $justgook$elm_webdriver$WebDriver$Setup$isFail = function (_v0) {
	var result = _v0.a.result;
	return _Utils_eq(
		$elm$core$Result$toMaybe(result),
		$elm$core$Maybe$Nothing);
};
var $author$project$Main$printDotOrF = function (ref) {
	return $author$project$Main$addCmd(
		$author$project$Main$log(
			$justgook$elm_webdriver$WebDriver$Setup$isFail(ref) ? ($author$project$Main$ansi.red + ('F' + $author$project$Main$ansi.reset)) : ($author$project$Main$ansi.green + ('.' + $author$project$Main$ansi.reset))));
};
var $author$project$Main$update = function (msg) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Result$map(
			A2($justgook$elm_webdriver$WebDriver$Setup$next, $author$project$Main$validator, msg)),
		A2(
			$elm$core$Basics$composeR,
			$author$project$Main$lifeCycle,
			$author$project$Main$printDotOrF(msg)));
};
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Main$main = $elm$core$Platform$worker(
	{
		init: $author$project$Main$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$Main$update
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));
