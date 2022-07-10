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
        url: '/kategori',
        type: 'get',
        success:function(res) {
            $('#table').DataTable().destroy()
            res.data.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td>${i+1}</td>
                    <td>${p.kategori}</td>
                    <td>
                        <a href="/admin-kategori/${p.id}" class="btn btn-warning">Edit</a>
                        <button onclick="handleDelete(${p.id})" class="btn btn-danger">Delete</button>
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
