let save = document.querySelector('#save')
let kategori = document.querySelector('#kategori')

save.onclick = function(){
    $.ajax({
        url:'/kategori',
        type: 'post',
        data:{
            _token,
            kategori: kategori.value,
        },
        success:function(res){
            alert('Success')
            location.reload()
        },
        error: function(res){
            const resp = res.responseJSON
            alert(resp)
        }
    })
}
