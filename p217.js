let val = null;

val = val ?? "初期値";
console.log(`val[${val}]`);
//val=nullなので、右のオペランド"初期値"を返す


// null, undefined以外は左のオペランド以外を返す
let num = 0;

num = num ?? 10;
console.log(`num[${num}]`);
// numが0で、null, undefinedではないので左のオペランドであるnum=0を返す。
