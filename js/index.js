/**
 * section1场景切换
 */
 var changeSection1Bg = function () {
    let index = 1;
    const bg = $dom(".section-1");
    const bgArr = [
        "../compose/image/section-1/y-2.jpg",
        "../compose/image/section-1/y-4.jpg",
        "../compose/image/section-1/y-8.jpg",
        "../compose/image/section-1/y-1.jpg"
        

    ]
    setInterval(() => {
        index = (index + 1) % 4;
        bg.style.backgroundImage = `url('${bgArr[index]}')`;
    }, (3 * 1000));
 }
 ;(function() {
    changeSection1Bg();
})()


/**
 * section2场景切换
 */
 var changeSection2Bg = function () {
    let index = 1;
    const bg2 = $dom(".section-2");
    const bgArr2 = [
        "../compose/image/section-2/y-16.jpg",
        "../compose/image/section-2/h-1.jpg",
        "../compose/image/section-2/h-3.jpg",
        "../compose/image/section-2/h-5.jpg",
        "../compose/image/section-2/y-1.jpg"
        

    ]
    setInterval(() => {
        index = (index + 1) % 5;
        bg2.style.backgroundImage = `url('${bgArr2[index]}')`;
    }, (3 * 1000));
 }
 ;(function() {
    changeSection2Bg();
})()


/**
 * section3场景切换
 */
 var changeSection3Bg = function () {
    let index = 1;
    const bg3 = $dom(".section-3");
    const bgArr3 = [
        "../compose/image/section-2/y-16.jpg",
        "../compose/image/section-3/h-2.jpg",
        "../compose/image/section-3/h-6.jpg",
        "../compose/image/section-3/h-7.jpg",
        "../compose/image/section-2/y-1.jpg"
        

    ]
    setInterval(() => {
        index = (index + 1) % 5;
        bg3.style.backgroundImage = `url('${bgArr3[index]}')`;
    }, (3 * 1000));
 }
 ;(function() {
    changeSection3Bg();
})()


/**
 * section4场景切换
 */
 var changeSection4Bg = function () {
    let index = 1;
    const bg4 = $dom(".section-4");
    const bgArr4 = [
        "../compose/image/section-2/y-16.jpg",
        "../compose/image/section-4/h-4.jpg",
        "../compose/image/section-4/h-8.jpg",
        "../compose/image/section-4/h-9.jpg",
        "../compose/image/section-2/y-1.jpg"
        

    ]
    setInterval(() => {
        index = (index + 1) % 5;
        bg4.style.backgroundImage = `url('${bgArr4[index]}')`;
    }, (3 * 1000));
 }
 ;(function() {
    changeSection4Bg();
})()
