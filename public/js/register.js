const register = document.querySelector('#register')
const nama = document.querySelector('#nama')
const password = document.querySelector('#password')
const alamat = document.querySelector('#alamat')
const username = document.querySelector('#username')
const telepon = document.querySelector('#telepon')

register.onsubmit = function(e){
    e.preventDefault()
    $.ajax({
        url:'/user',
        type:'post',
        data: {
            username: username.value,
            password: password.value,
            nama: nama.value,
            alamat: alamat.value,
            telepon: telepon.value,
            _token,
        },
        success:function(res){
            console.log(res);
            location.href = '/login'
        },
        error: function(err){
            const resp = err.responseJSON
            alert(resp.message)
        }
    })
}
