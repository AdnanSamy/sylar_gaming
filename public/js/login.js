const formLogin = document.querySelector('#formLogin')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

formLogin.onsubmit = function(e){
    e.preventDefault()
    $.ajax({
        url:'/login-action',
        type:'post',
        data: {
            username: username.value,
            password: password.value,
            _token,
        },
        success:function(res){
            console.log(res);
            localStorage.setItem('cart', JSON.stringify([]))
            if (res.data.role === 'admin') {
                location.href = '/admin'
            }else{
                location.href = '/'
            }
        },
        error: function(err){
            const resp = err.responseJSON
            alert(resp.message)
            console.log(err);
        }
    })
}

$(document).ready(function () {
    // $('#birth-date').mask('00/00/0000');
    // $('#phone-number').mask('0000-0000-00000');
})


