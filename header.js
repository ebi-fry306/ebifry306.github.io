  (function () {
    var UA = navigator.userAgent;
    if (UA.indexOf('iPhone') > 0 || UA.indexOf('iPod') > 0 || UA.indexOf('Android') > 0){
        document.write('<header><h1><div class="string">ラー油</div></h1></header>');
    }
    else{
        document.write('<header><h1><div class="string">オリーブオイル</div></h1></header>');
    }
})();