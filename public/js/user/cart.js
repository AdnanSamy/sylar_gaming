const table = document.querySelector('#table')
const tbody = table.querySelector('tbody')
const orderTotal = document.querySelector('#orderTotal')

document.addEventListener('DOMContentLoaded', function () {
    generateCart()
})

function deleteItem(idx){
    let carts = JSON.parse(localStorage.getItem('cart'))
    carts.splice(idx, 1)

    localStorage.setItem('cart', JSON.stringify(carts))
    generateCart()
}

function order(){
    let carts = JSON.parse(localStorage.getItem('cart'))
    const harga = carts.map(c => c.harga * c.qty)
    const sumHarga = sum(harga)

    $.ajax({
        url: `/order`,
        type: 'post',
        data:{
            total:sumHarga,
            orderDetails: carts,
            _token,
        },
        success: function (res) {
            const data = res.data
            localStorage.setItem('cart', [])
            location.href = `/checkout-confirmation/${data.id}`
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}

function generateCart() {
    let carts = JSON.parse(localStorage.getItem('cart'))
    const harga = carts.map(c => c.harga * c.qty)
    const sumHarga = sum(harga)

    orderTotal.textContent = `Rp. ${sumHarga.toLocaleString()}`

    tbody.innerHTML = ''
    carts.forEach((c, i) => {
        let tr = document.createElement('tr')
        let html = `
            <td class="align-middle"><img src="${location.origin}/files/${c.gambar}" alt="" style="width: 50px;">&nbsp${c.nama}</td>
            <td class="align-middle">Rp. ${c.harga.toLocaleString()}</td>
            <td class="align-middle">${c.qty}</td>
            <td class="align-middle">Rp. ${c.total.toLocaleString()}</td>
            <td class="align-middle"><button type="submit" onclick="deleteItem(${i})" class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button></td>
        `
        tr.innerHTML = html

        tbody.appendChild(tr)
    });
}
