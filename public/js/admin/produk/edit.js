const save = document.querySelector('#save')
const nama = document.querySelector('#nama')
const gambar = document.querySelector('#gambar')
const kategori = document.querySelector('#kategori')
const deskripsi = document.querySelector('#deskripsi')
const harga = document.querySelector('#harga')
const stok = document.querySelector('#stok')

async function createFile() {
    let response = await fetch(`${location.origin}/test.jpg`);
    let data = await response.blob();
    let metadata = {
        type: 'image/jpeg'
    };
    let file = new File([data], "test.jpg", metadata);
    // ... do something with the file or return it

    return file
}

save.onclick = function () {
    const form = new FormData()

    form.append('categories_id', kategori.value)
    form.append('nama', nama.value)
    form.append('gambar', gambar.files[0])
    form.append('deskripsi', deskripsi.value)
    form.append('harga', harga.value)
    form.append('stok', stok.value)
    form.append('id', id)
    form.append('_token', _token)

    $.ajax({
        url: '/produk/update',
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
            alert(resp.message)
        }
    })
}


$.ajax({
    url: `/produk/${id}`,
    type: 'get',
    success: function (res) {
        const data = res.data
        nama.value = data.nama
        kategori.value = data.categories_id
        deskripsi.value = data.deskripsi
        harga.value = data.harga
        stok.value = data.stok

    },
    error: function (res) {
        const resp = res.responJSON
        alert(resp.message)
    }
})
