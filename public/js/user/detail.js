const nama = document.querySelector('#nama')
const gambar = document.querySelector('#gambar')
const kategori = document.querySelector('#kategori')
const deskripsi = document.querySelector('#deskripsi')
const harga = document.querySelector('#harga')
const qty = document.querySelector('#qty')
const products = document.querySelector('#products')
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

        } else {
            carts.push({ ...produk, qty: totalQty, total: produk.harga * totalQty })
        }

        localStorage.setItem('cart', JSON.stringify(carts))
    } else {
        let carts = []

        carts.push({ ...produk, qty: totalQty, total: produk.harga * totalQty })
        localStorage.setItem('cart', JSON.stringify(carts))
    }
}

function getProduk() {
    $.ajax({
        url: `/produk/top`,
        type: 'get',
        success: function (res) {
            const data = res.data

            data.forEach((d, i) => {
                let html = `
                    <div class="card product-item border-0">
                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img class="img-fluid w-100" src="${location.origin}/files/${d.gambar}" alt="">
                        </div>
                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                            <h6 class="text-truncate mb-3">${d.nama}</h6>
                            <div class="d-flex justify-content-center">
                                <h6>Rp. ${d.harga.toLocaleString()}</h6>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between bg-light border">
                            <a href="/detail/${d.id}" class="btn btn-sm text-dark p-0"><i
                            class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        </div>
                    </div>
               `

                products.innerHTML += html
            });
            $('.related-carousel').owlCarousel({
                loop: true,
                margin: 29,
                nav: false,
                autoplay: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    }
                }
            });
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    getProduk()
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
