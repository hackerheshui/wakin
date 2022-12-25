/**
 * 初始化场景转换card
 */
 function initCardFull() {
    let cardFullList = $doms('.card-full-container');
    if (cardFullList.length === 0) {
        // 如果没有获取到元素就不执行初始化操作
        return;
    }
    // 对每一个card-full-container元素进行初始化
    cardFullList.forEach(item => {
        const list = item.children[0]; // 获取card-full-list
        const child = [...list.children]; // 获取场景1、2、3等
        const length = child.length;
        if (length > 0) {
            const height = window.innerHeight; // 获取浏览器的可视高度
            let isScroll = false; // 是否处于滚动状态
            let index = 1; // 场景的索引
            let target = 0; // 滚动到目标位置

            // 监听鼠标滚动滑轮
            window.addEventListener('wheel', e => {
                e.preventDefault(); // 取消默认滚动事件
                // 如果处于滚动状态，就不执行滚动
                if (isScroll) {
                    return false;
                }
                const value = e.deltaY;
                if (value < 0 && target >= 0
                    ||
                    value > 0 && target <= -height * (length - 1)) {
                    console.log("超出范围");
                    return
                }
                isScroll = true;
                setTimeout(() => {
                    isScroll = false;
                }, 500)

                let move; // 移动的距离
                if (value < 0) {
                    // 向上滚动
                    move = height;
                    index--;
                } else if (value > 0) {
                    // 向下滚动
                    move = -height;
                    index++;
                }
                target = target + move;
                list.style.top = target + 'px'; // 不要忘记像素等单位
            }, { passive: false });
        }
    })
}

/**
 * 初始化模态框
 */
function initModal() {
    let modalList = $doms('.modal');
    if (modalList.length === 0) {
        return;
    }
    const modalMask = document.createElement('div'); // 创建一个div元素
    modalMask.className = 'modal-mask' // 添加class选择器名
    modalMask.addEventListener('click', e => {
        // 如果没有匹配到不执行
        if (!e.target.className.includes('modal-mask')) {
            return;
        }
        // 关闭遮罩层
        modalList.forEach(item => {
            const className = item.className;
            if (className.includes('show')) {
                item.classList.remove('show');
                modalMask.classList.remove('show');
            } else {
                item.classList.add('show');
                modalMask.classList.add('show');
            }
        })

    });
    modalList.forEach(item => {
        // 讲modal组件挂载到modal-mask上，转移dom节点
        modalMask.appendChild(item);
        const btnName = item.getAttribute('data-value'); // 通过获取data-value的属性，拿到要绑定click事件按钮的class选择器
        console.log($dom(btnName))
        if (btnName) {
            // 给按钮添加一个点击事件，用于模态框的显示

            $dom(btnName).addEventListener('click', () => {
                // classList
                // classList.add() 用于添加class名
                // classList.remove() 用于删除class名
                const className = item.className;
                if (className.includes('show')) {
                    item.classList.remove('show');
                    modalMask.classList.remove('show');
                } else {
                    item.classList.add('show');
                    modalMask.classList.add('show');
                }

            })
        }
    })

    // 将modal组件挂载到body上
    document.body.appendChild(modalMask);

}

; (function () {
    initCardFull();
    initModal();
})();