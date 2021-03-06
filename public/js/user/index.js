const categories = document.querySelector('#categories')
const products = document.querySelector('#products')

const getCategories = () => {
    $.ajax({
        url: '/kategori',
        type: 'get',
        success: function (res) {
            res.data.forEach((p, i) => {
                let html = `
                    <a href="/shop/${p.id}" class="nav-item nav-link">${p.kategori}</a>
                `
                categories.innerHTML += html
            })
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}

function getProduk(){
    $.ajax({
        url: `/produk/top`,
        type: 'get',
        success:function(res){
            const data = res.data

            data.forEach((d, i) => {
               let html = `
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
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
                    </div>
               `

               products.innerHTML += html
            });
        },
        error: function(res){
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    getCategories()
    getProduk()
})
