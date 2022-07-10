const categories = document.querySelector('#categories')

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

document.addEventListener('DOMContentLoaded', function () {
    getCategories()
})
