// 在頁面載入完成後執行
window.onload = function () {
    // 獲取所有 iframe 元素
    var iframes = document.getElementsByTagName('iframe');

    // 遍歷所有 iframe 元素
    for (var i = 0; i < iframes.length; i++) {
        // 如果 iframe 的 src 包含 "youtube.com/embed/" 字符串
        if (iframes[i].src.indexOf('youtube.com/embed/') > -1) {
            // 創建一個新的 div 元素，並添加 "embed-responsive" 和 "embed-responsive-16by9" 類
            var newDiv = document.createElement('div');
            newDiv.classList.add('embed-responsive');
            newDiv.classList.add('embed-responsive-16by9');

            // 將新的 div 元素插入到 iframe 元素之前
            iframes[i].parentNode.insertBefore(newDiv, iframes[i]);

            // 將 iframe 元素移動到新的 div 元素內
            newDiv.appendChild(iframes[i]);
        }
    }
};