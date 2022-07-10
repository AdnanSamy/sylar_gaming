const save = document.querySelector('#save')
const nama = document.querySelector('#nama')
const gambar = document.querySelector('#gambar')
const kategori = document.querySelector('#kategori')
const deskripsi = document.querySelector('#deskripsi')
const harga = document.querySelector('#harga')
const stok = document.querySelector('#stok')

save.onclick = function () {
    const form = new FormData()

    form.append('categories_id', kategori.value)
    form.append('nama', nama.value)
    form.append('gambar', gambar.files[0])
    form.append('deskripsi', deskripsi.value)
    form.append('harga', harga.value)
    form.append('stok', stok.value)
    form.append('_token', _token)

    $.ajax({
        url: '/produk',
        type: 'post',
        data: form,
        beforeSend: function (request) {
            request.setRequestHeader('X-CSRF-TOKEN', _token);
        },
        cache: false,
        processData: false,
        contentType : false,
        success: function (res) {
            alert('Success')
            location.reload()
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp)
        }
    })
}

