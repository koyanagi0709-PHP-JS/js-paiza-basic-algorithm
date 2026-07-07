// 整数 n と、数列 a_1, ... , a_n と、整数 k が与えられます。
// 数列に含まれる数のうち、k 番目に大きいものを出力してください。
/***
 * ルール
 * 1行目に、数列の長さを表す整数 n が与えられます。
 * 2行目に、数列の値 a_i が半角スペース区切りで与えられます。
 * 3行目に、整数 k が与えられます。
 *
 * ゴール
 * 数列に含まれる数のうち、k 番目に大きいものを出力してください。
 *
 * 条件
 * 入力は全て整数
 * 1 ≦ n ≦ 10,000
 * -1,000,000,000 ≦ a_i ≦ 1,000,000,000
 *  i ≠ j ならば a_i ≠ a_j（同じ値はない）
 *  1 ≦ k ≦ n
 *
 * 回答の方針
 * 数列nの長さは最大でも1,0000なので、線形探索で解く
 * 答え（k番目に大きい値）を保存する変数xを用意して、入力の最大値より大きな値で初期化
 * 数列からx未満であるような値の最大値yを求め、xをyで更新することをk回繰り返す
 */
const fs = require("fs");

// 入力を受け取る
const input = fs
  .readFileSync("./sample/05_test.txt", "utf-8")
  .trim()
  .split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map((x) => Number(x));
const k = Number(input[2]);

// 答えを保存する変数 maximumを用意して適切な初期値で初期化
var maximum = 1000000000;
// let nextMaximum;

// k回回るループを書いて
for (var i = 0; i < k; i++) {
  // 数列に含まれる maximum未満の値の最大値を保存する変数 nextMaximumを用意して適切な初期値で初期化
  nextMaximum = -1000000000;

  // 配列の全要素をチェックするループを書いて
  for (var value of a) {
    // 要素がmaxium未満かどうか判定して、nextMaximumを更新する
    if (value < maximum && nextMaximum < value) {
      nextMaximum = value;
    }
  }

  //maximumを更新する
  maximum = nextMaximum;
}

console.log(maximum);
