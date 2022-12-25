/**
 * 获取dom元素
 * @param {*} dom DOM选择器名称
 * @returns 
 */
 function $dom(dom) {
    return document.querySelector(dom);
}

/**
 * 获取dom元素集合
 * @param {*} dom DOM选择器名称
 * @returns 
 */
function $doms(dom) {
    return document.querySelectorAll(dom);
}