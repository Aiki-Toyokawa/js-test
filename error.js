try{
  console.log('tryブロックの処理を開始');
  throw "例外を投げた";
  console.log('tryブロックの処理を終了');
} catch(e){
console.error('catchブロックの処理を開始');
console.error('catchした値: ' + e);
console.error('catchブロックの処理を終了');
} finally {
console.log('finallyブロックの処理を実行');
}

console.log("try/catch/finally文の後続のコードを実行する");