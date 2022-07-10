const table = document.querySelector('#table')
const tbody = table.querySelector('tbody')

function showBukti(url){

}

document.addEventListener('DOMContentLoaded', function () {
    $('#table').DataTable()
    $.ajax({
        url: `/order/${id}`,
        type: 'get',
        success:function(res) {
            const orderDetails = res.data.order_detail
            const order = res.data.order

            $('#table').DataTable().destroy()
            console.log(res)

            orderDetails.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td>${i+1}</td>
                    <td>${p.nama}</td>
                    <th>${p.qty}</th>
                    <th>${p.total}</th>
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
