const nama = document.querySelector('#nama')
const gambar = document.querySelector('#gambar')
const kategori = document.querySelector('#kategori')
const deskripsi = document.querySelector('#deskripsi')
const harga = document.querySelector('#harga')
const qty = document.querySelector('#qty')
let produk = {

}

function addCart() {
    let cart = localStorage.getItem('cart')
    const totalQty = parseInt(qty.value)

    if (cart !== null) {
        let carts = JSON.parse(cart)
        let exist = carts.findIndex((c, i) => c.id === produk.id)
        if (exist !== -1) {
            carts[exist].qty += totalQty
            carts[exist].total = carts[exist].qty * produk.harga

        }else {
            carts.push({...produk, qty: totalQty, total: produk.harga * totalQty})
        }

        localStorage.setItem('cart', JSON.stringify(carts))
    }else {
        let carts = []

        carts.push({...produk, qty: totalQty, total: produk.harga * totalQty})
        localStorage.setItem('cart', JSON.stringify(carts))
    }
}

document.addEventListener('DOMContentLoaded', function () {
    $.ajax({
        url: `/produk/${id}`,
        type: 'get',
        success: function (res) {
            console.log(res)
            const data = res.data
            nama.textContent = data.nama
            gambar.src = `${location.origin}/files/${data.gambar}`
            deskripsi.textContent = data.deskripsi
            harga.textContent = `Rp. ${data.harga.toLocaleString()}`

            produk = data
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
})
