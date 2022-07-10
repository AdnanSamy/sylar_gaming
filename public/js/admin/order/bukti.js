const table = document.querySelector('#table')
const tbody = table.querySelector('tbody')

function showBukti(url){

}

document.addEventListener('DOMContentLoaded', function () {
    $('#table').DataTable()
    $.ajax({
        url: `/konfirmasi/by-order/${id}`,
        type: 'get',
        success:function(res) {
            $('#table').DataTable().destroy()
            console.log(res)
            res.data.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td>${i+1}</td>
                    <td>${p.tanggal}</td>
                    <td>
                        <button onclick="showBukti(${p.id})" class="btn btn-danger">Bukti</button>
                    </td>
                `

                tr.innerHTML = html

                tbody.appendChild(tr)
            })

            $('#table').DataTable()
        },
        error:function(res){
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
})
