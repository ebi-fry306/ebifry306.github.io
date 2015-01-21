  (function () {
    var UA = navigator.userAgent;
    if (UA.indexOf('iPhone') > 0 || UA.indexOf('iPod') > 0 || UA.indexOf('Android') > 0){
        document.write('<header><h1>ラー油</h1></header>');
    }
    else{
        document.write('<header><h1>オリーブオイル</h1></header>');
    }
})();