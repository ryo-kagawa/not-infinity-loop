// 無限ループに見えて無限ループしない処理
for (let = target = 2; ; target *= 2) {
  if (target % 2 === 0) {
    console.log("ループ中");
    continue;
  }
  if (target % 2 !== 0) {
    console.log("ループ終了");
    break;
  }
}
