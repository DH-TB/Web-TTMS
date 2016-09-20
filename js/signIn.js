function check() {
    if ((document.getElementById('userName').value = 123) && (document.getElementById('password').value = 456)) {
        return true;
    }
    return false;
}
window.onload = function () {
    var tag = document.getElementById('uname');
    tag.onblur = check_name;
    var tag2 = document.getElementById('pwd');
    tag2.onblur = check_pwd;
};