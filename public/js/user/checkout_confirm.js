const table = document.querySelector('#table')
const tbody = document.querySelector('tbody')
const orderId = document.querySelector('#orderId')
const orderTotal = document.querySelector('#orderTotal')

const generateOrder = function () {
    $.ajax({
        url: `/order/${id}`,
        type: 'get',
        success: function (res) {
            const orderDetails = res.data.order_detail
            const order = res.data.order

            const harga = orderDetails.map(c => c.harga * c.qty)
            const sumHarga = sum(harga)

            orderId.textContent = order.id
            orderTotal.textContent = `Rp. ${sumHarga.toLocaleString()}`

            orderDetails.forEach((p, i) => {
                let tr = document.createElement('tr')

                let html = `
                    <td class="align-middle"><img src="${location.origin}/files/${p.gambar}" alt="" style="width: 50px;">&nbsp${p.nama}</td>
                    <td class="align-middle">Rp. ${p.harga.toLocaleString()}</td>
                    <td class="align-middle">${p.qty}</td>
                    <td class="align-middle">Rp. ${p.total.toLocaleString()}</td>
                `

                tr.innerHTML = html

                tbody.appendChild(tr)
            })
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    generateOrder()
})
