function initLoginMoadl() {
    const a = $dom('.login-form');
    const b = $dom('.register-form');
    const tab1 = $dom('.tab-1');
    const tab2 = $dom('.tab-2');
    const ani = $dom('.tab-ani');
    tab1.addEventListener('click', () => {
        a.style.left = '50px';
        b.style.left = '430px';
        ani.style.left = '0px';
        $dom('.username-register-input').value = '';
        $dom('.password-register-input').value = '';
    })
    tab2.addEventListener('click', () => {
        a.style.left = '-400px';
        b.style.left = '50px';
        ani.style.left = '110px';
        $dom('.username-login-input').value = '';
        $dom('.password-login-input').value = '';
    })

    const loginBtn = $dom('.login-btn');
    const registerBtn = $dom('.register-btn');
    loginBtn.addEventListener('click', () => {
        const username = $dom('.username-login-input').value;
        const password = $dom('.password-login-input').value;
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(username, password)
        if (user[username] === password) {
            alert('登陆成功');
            const logoutBtn = $dom('.btn-logout');
            const loginBtn = $dom('.btn-login');
            const loginText = $dom('.login-username');
            localStorage.setItem('currentUser', username);
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            loginText.innerText = username;
            localStorage.setItem('currentUser', username);

        } else {
            alert('用户名或者密码错误');
        }
    })
    registerBtn.addEventListener('click', () => {
        const username = $dom('.username-register-input').value;
        const password = $dom('.password-register-input').value;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user[username]) {
            alert('用户名存在');
        } else {
            user[username] = password;
            localStorage.setItem('user', JSON.stringify(user));
            alert('用户注册成功');
        }
    })
}

; (function () {
    // localStorage 保存到硬盘里
    // sessionStorage 当前会话窗口结束就清除数据
    // 保存的是字符形式，Object需要通过JSON.stringify转化，否则存储会调用toString去转化
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify({}));
    }
    let username = localStorage.getItem('currentUser');
    const logoutBtn = $dom('.btn-logout');
    const loginBtn = $dom('.btn-login');
    const loginText = $dom('.login-username');
    if (username) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        loginText.innerText = username;
    } else {
        logoutBtn.style.display = 'none';
    }
    logoutBtn.addEventListener('click', e => {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        loginText.innerText = '';
        localStorage.removeItem('currentUser');
    })

    initLoginMoadl();

})()