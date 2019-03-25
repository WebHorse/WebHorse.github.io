!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 100 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));








// <a href="">
//                                             <img src="image/asset 10.webp" alt="">
//                                             <h5>美食</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 11.webp" alt="">
//                                             <h5>早餐</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 12.webp" alt="">
//                                             <h5>商城福利</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 13.webp" alt="">
//                                             <h5>水果</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 14.webp" alt="">
//                                             <h5>医药健康</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 15.webp" alt="">
//                                             <h5>浪漫鲜花</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 16.webp" alt="">
//                                             <h5>跑腿代跑</h5>
//                                         </a>
//                                         <a href="">
//                                             <img src="image/asset 7.webp" alt="">
//                                             <h5>汉堡披萨</h5>
//                                         </a>