const searchbar = document.querySelector('#searchBar')
const products = document.querySelector('#products')

document.addEventListener('DOMContentLoaded', function(){
    getProduk()
})

function getProduk(){
    $.ajax({
        url:`/produk/by-categories/${categoriesId}`,
        type: 'get',
        data:{
            keyword: searchbar.value,
        },
        success:function(res){
            const data = res.data

            data.forEach((d, i) => {
               let html = `
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div
                                class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src="img/product-1.jpg" alt="">
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">${d.nama}</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>Rp. ${d.harga.toLocaleString()}</h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-center bg-light border">
                                <a href="" class="btn btn-sm text-dark p-0"><i
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
