const table = document.querySelector('#table')
const tbody = document.querySelector('tbody')

const generateOrder = () => {
    $.ajax({
        url: '/order/user',
        type: 'get',
        success: function (res) {
            console.log(res)
            res.data.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td class="align-middle">${p.id}</td>
                    <td class="align-middle">Rp. ${p.total.toLocaleString()}</td>
                    <td class="align-middle">
                        ${p.status === 'lunas' ? '<button class="btn btn-sm btn-success">Lunas</button>'
                            : '<button class="btn btn-sm btn-warning">Belum Lunas</button>'}

                    </td>
                `

                tr.innerHTML = html

                tbody.appendChild(tr)
            })

            $('#table').DataTable()
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp)
        }
    })
}

document.addEventListener('DOMContentLoaded', function(){
    generateOrder()
})
