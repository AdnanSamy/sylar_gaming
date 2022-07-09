const tableProduct = document.querySelector('#tableProduct')
const tbody = tableProduct.querySelector('tbody')

document.addEventListener('DOMContentLoaded', function () {
    $('#tableProduct').DataTable()
    $.ajax({
        url: '/produk',
        type: 'get',
        success:function(res) {
            $('#tableProduct').DataTable().destroy()
            res.data.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td>${i+1}</td>
                    <td>${p.nama}</td>
                    <td>${p.kategori}</td>
                    <td>${p.deskripsi}</td>
                    <td>${p.harga}</td>
                    <td>${p.stok}</td>
                    <td>${p.views}</td>
                    <td>
                        <a href="/admin-produk/${p.id}" class="btn btn-warning">Edit</a>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                `

                tr.innerHTML = html

                tbody.appendChild(tr)
            })

            $('#tableProduct').DataTable()
        },
        error:function(res){
            const resp = res.responseJSON
            alert(resp)
        }
    })
})
