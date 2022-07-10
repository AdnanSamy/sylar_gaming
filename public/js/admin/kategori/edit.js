let save = document.querySelector('#save')
let kategori = document.querySelector('#kategori')

$.ajax({
    url:`/kategori/${id}`,
    type:'get',
    success:function(res){
        const data = res.data
        kategori.value = data.kategori
    },
    error: function(res){
        const resp = res.responJSON
        alert(resp)
    }
})

save.onclick = function(){
    $.ajax({
        url:'/kategori',
        type: 'put',
        data:{
            _token,
            kategori: kategori.value,
            id,
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

