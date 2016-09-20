function check_name() {
    var tag = document.getElementById('uname');
    var msg = document.getElementById('msg_uname');
    msg.innerHTML = "";
    tag.style.border = "0";
    reg = /^[\w\u4E00-\u9FA5]{6,}$/;
    if(!reg.test(tag.value)) {
        tag.style.border = "2px solid #EEEE00";
        msg.innerHTML = "用户名必须为6位以上字母、数字或汉字!";
        return false;
    }
    return true;
}
function check_pwd() {
    var tag = document.getElementById('pwd');
    var msg = document.getElementById('msg_pwd');
    msg.innerHTML = "";
    tag.style.border = "0";
    if(tag.value == '') {
        tag.style.border = "2px solid #EEEE00";
        msg.innerHTML = "密码不能为空!";
        return false;
    }
    return true;
}
function check() {
    return check_name() && check_pwd();
}
window.onload = function() {
    var tag = document.getElementById('uname');
    tag.onblur = check_name;
    var tag2 = document.getElementById('pwd');
    tag2.onblur = check_pwd;
};