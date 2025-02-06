const startTime = Date.now(); // 基準時間

// --------処理ブロック--------
// ここに実行したい処理を記述します。
// 例:配列のソート処理を示します。


const array = [];
for (let i = 0; i < 10000; i++) {
    array.push(Math.random());
}

array.sort((a, b) => a - b);



// ---------------------------
const endTime = Date.now(); // 終了時間
const executionTime = endTime - startTime; // 実行時間
console.log(`処理にかかった時間: ${executionTime} ミリ秒`);