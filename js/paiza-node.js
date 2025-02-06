// node環境でinput, output
const readline = require('readline');

// readlineインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// プロンプトを表示して入力を受け取る
rl.question("", (input) => {  // "" によりプロンプトメッセージは表示されない
  // ------以下に処理を書く------
  const n = Number(input);


  

  // ---------------------------
  rl.close(); // インターフェースを閉じる
});
