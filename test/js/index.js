window.addEventListener('load', function() {
new Swiper('.swiper-container', {
    // 方向 水平
    direction: 'horizontal',
    // 是否循环 无缝轮播图 （动态添加2张图片）
    loop: true,
    // 小圆点
    pagination: {
        el: '.swiper-pagination',
    },
    // autoplay: true, //等同于以下设置
    autoplay: {
        delay: 1000,
        // 是否要滚动到最后一张结束自动轮播图  false不结束  true就结束(loop模式无效)
        stopOnLastSlide: true,
        // 在手指滑动的轮播图的时候是否要禁用轮播图自动切换  默认true禁用 改为false不仅用
        disableOnInteraction: false,
    },
    // 效果 淡入淡出
    // effect : 'fade',
    // 3d立体效果
    // effect : 'cube'
});
}, false);