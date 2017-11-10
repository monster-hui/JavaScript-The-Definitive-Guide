/*
* 把p中的可枚举属性复制到o上，返回o
*相同属性用p中属性值覆盖o
*不对getter和setter方法及复制属性
*/
function extend(o,p){
  for(var prop in p){
    o[prop]=p[prop];
  }
  return o;
}

/*
* 把p中的可枚举属性复制到o上，返回o
*相同属性属性值不变
*不对getter和setter方法及复制属性
*/
function merge(o,p){
  for(var prop in p){
    if(o.hasOwnProperty(prop))continue;
    o[prop]=p[prop];
  }
  return o;
}

/*
* 把o中与p相同的属性删除，返回o
*/
function subtract(o,p){
  for(var prop in p){
    delete o[prop];
  }
  return o;
}

/*
* 把o中与p不同的属性删除，返回o
*/
function restrict(o,p){
  for(prop in o){
    if(!(prop in p))
    delete o[prop];
  }
  return o;
}

/*
* 返回新对象，同时具有o，p所有属性。
* 同名属性用p的属性值。
*/
function union(o,p){
  return extend(extend({},o),p);
}

/*
* 返回新对象，具有o，p共同出现属性。
* 像求交集，取o的值。
*/
function intersection(o,p){
  return restrict(extend({},o),p);
} 

/*
* 返回一个数组，包含所有可枚举的自有属性。
*/
function keys(o){
    if(typeof o !=="object")throw TypeError();
    var result =[];
    for (var prop in o){
      	if(o.hasOwnProperty(prop))
        	result.push(prop);
    }
    return result;
}