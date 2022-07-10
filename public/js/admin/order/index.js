const table = document.querySelector('#table')
const tbody = table.querySelector('tbody')

function handleDelete(id){
    $.ajax({
        url:'/kategori',
        type:'delete',
        data:{
            _token,
            id,
        },
        success:function(res){
            location.reload()
        },
        error: function(res){
            const resp = res.responseJSON
            alert(resp)
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    $('#table').DataTable()
    $.ajax({
        url: '/order',
        type: 'get',
        success:function(res) {
            $('#table').DataTable().destroy()
            console.log(res)
            res.data.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td>${i+1}</td>
                    <td>${p.id}</td>
                    <td>${p.pembeli}</td>
                    <td>${p.alamat}</td>
                    <td>${p.telepon}</td>
                    <td>
                        <a href="/admin-order/bukti/${p.id}" class="btn btn-warning m-1">Pembayaran</a>
                        <a href="/admin-order/${p.id}" class="btn btn-warning m-1">Detail</a>
                        <button onclick="handleDelete(${p.id})" class="btn btn-danger m-1">Delete</button>
                    </td>
                `

                tr.innerHTML = html

                tbody.appendChild(tr)
            })

            $('#table').DataTable()
        },
        error:function(res){
            const resp = res.responseJSON
            alert(resp)
        }
    })
})
