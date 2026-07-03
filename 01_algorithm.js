/***
* ルール
*  1行目に、数列の長さを表す整数 n が与えられます。
*  2行目に、数列の値 a_i が半角スペース区切りで与えられます。
*  3行目に、整数 k が与えられます。
*
*  入力は全て整数
*・ 1 ≦ n ≦ 1,000
*・ -100 ≦ a_i ≦ 100
*・ -100 ≦ k ≦ 100
*
* 入力例
* 5
* -3 2 0 -1 2
* 2
*
*/
/***
 * 回答の方針
 * ・線形探索で解く
 * ・数列は配列で管理する
 * ・答えを０で初期化
 * ・ループ処理を用いて配列の要素を先頭から調べる
 * ・kが見つかるたびに答えを１増やす
 */

const fs = require("fs");

//入力を受け取る
const input = fs.readFileSync("/dev/stdin","utf-8").trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(x => Number(x));
const k = Number(input[2]);

// 答えを保存する変数を用意して０で初期化
var numOfk = 0;

// 配列の全要素をチェックするループを記述
for(var value of a) {
    // 要素がkと一致しているか判定して
    if (value == k) {
        //一致していたら答えをインクリメント
        numOfk++;
    }
}
console.log(numOfk);