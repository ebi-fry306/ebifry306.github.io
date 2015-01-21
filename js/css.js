(function () {
    var UA = navigator.userAgent;
    if (UA.indexOf('iPhone') > 0 || UA.indexOf('iPod') > 0 || UA.indexOf('Android') > 0){
        document.write('<link href ="css/style-sp.css" type="text/css" rel="stylesheet"/>');
    }
    else{
        document.write('<link href ="css/style-sheet.css" type="text/css" rel="stylesheet"/>');
    }
})();