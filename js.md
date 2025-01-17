配列形式とオブジェクト形式がある

// 配列形式
const array = [10, 20, 30];
key(配列内での順番), value
例: [key, value] = [0, 10], [1, 20], [3, 30]

// オブジェクト形式
const object = {
  "a": "あ",　// key, value
  "b": "い",  // property
  "c": "う",
}

property: keyとvalueのペア, まとまりのこと
ここでは{"a": "あ"}, {"b": "い"}, {"c": "う"}

for...in    

for...of    反復可能オブジェクトに対する繰り返し処理


配列(array)のループ : for, for...of
for...of文では添字が取得できない, 添字が必要な場合はfor文を使う

オブジェクト(object)のループ : for...in
for文ではオブジェクトのループは記述できない
プロパティのみの取得ではfor...in文で記述もいいが、列挙可能性(enumerable)に注意
Object.key, Object.values, Object.entriesを使った書き方はモダンかつ有用
積極的な使用が吉


label文: ブロック{}に対して任意の名前を付けれる
その命名したブロックに対してcontinueやbreakの操作を行う 