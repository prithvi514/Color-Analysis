//onmessage = function (event) {
//    //function scan(event) {
//    var items = [[64, 176, 97], [0, 102, 0], [255, 204, 204], [255, 153, 0], [250, 246, 0], [255, 255, 204], [153, 102, 0], [136, 136, 28], [165, 128, 174], [255, 51, 0], [155, 102, 0], [153, 204, 51], [187, 187, 187], [68, 68, 68], [0, 153, 255], [0, 153, 255]];
//    var sum = new Array();
//    var percentage = new Array(16);
//    for (var u = 0; u < percentage.length; u++) {
//        percentage[u] = 0;
//    }
//    for (var k = 0; k < items.length; k++) {
//        sum[k] = items[k][0] + items[k][1] + items[k][2];
//    }
//    for (var i = event.data[3][1]; i < event.data[3][3]; i++) {
//        for (var j = event.data[3][0]; j < event.data[3][2]; j++) {
//            red = event.data[((event.data[4][0] * i) + j) * 4];
//            green = event.data[((event.data[4][0] * i) + j) * 4 + 1];
//            blue = event.data[((event.data[4][0] * i) + j) * 4 + 2];
//            alpha = event.data[((event.data[4][0] * i) + j) * 4 + 3];
//            var rt = red + green + blue;
//            var a = sum.indexOf(rt);
//            if (a != -1) {
//                percentage[a]++;
//            }
//        }
//    }
//    postMessage(percentage);;
//};

onmessage = function (event) {
   var items = new Array();
    var sum = new Array();
    var i = 0;
    for (i; i < event.data[5].length; i++) {
        sum.push(event.data[5][i]);
    }
    var percentage = new Array(sum.length);
    for (var u = 0; u < percentage.length; u++) {
        percentage[u] = 0;
    }
    for (var i = event.data[1][1]; i < event.data[4][1]; i++) {
        for (var j = event.data[2][0]; j < event.data[4][0]; j++) {
            red = event.data[0][((event.data[4][0] * i) + j) * 4];
            green = event.data[0][((event.data[4][0] * i) + j) * 4 + 1];
            blue = event.data[0][((event.data[4][0] * i) + j) * 4 + 2];
            alpha = event.data[0][((event.data[4][0] * i) + j) * 4 + 3];
            var rt = [red, green, blue];
            rt = JSON.stringify(rt);
            var a = sum.indexOf(rt);
            if (a != -1) {
                percentage[a]++;
            }
        }
    }
    postMessage(percentage);
};
