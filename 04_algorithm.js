// 整数 n と、数列 a_1, ... , a_n が与えられます。
// 数列の最大値と最小値をこの順に半角スペース区切りで出力してください。

/***
 * ルール
 * 1行目に数列の長さを表す整数nが与えられる
 * 2行目に数列の値a_iが半角スペース区切りで与えられる
 *
 * ゴール
 * 数列の最大値と最小値をこの順に半角スペース区切りで出力してください。
 *
 * 条件
 * 入力は全て整数
 * 1 ≦ n ≦ 10,000
 * -1,000,000,000 ≦ a_i ≦ 1,000,000,000
 *
 * 回答の方針
 * 数列nの長さは最大でも1,0000なので、線形探索で解く
 * 数列は配列で管理する
 * 暫定最大値の初期値は入力の最小値以下
 * 暫定最小値の初期値は入力の最大値以上
 * ループ処理を用いて配列の要素を先頭から調べる
 * 要素を見ながら暫定最大値/最小値を更新
 */
const fs = require("fs");
const input = fs
  .readFileSync("./sample/04_test.txt", "utf-8")
  .trim()
  .split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map((x) => Number(x));

// 答えを保存する変数を用意して適切な初期値で初期化
var maximum = -1000000000;
var minimum = 1000000000;

// 配列の全要素をチェックするループを書いて
for (var value of a) {
  // 暫定 maxを更新
  if (value > maximum) {
    maximum = value;
  }

  // 暫定 minを更新
  if (value < minimum) {
    minimum = value;
  }
}

console.log(maximum, minimum);
