const konfirmasi = document.querySelector('#konfirmasi')
const orderId = document.querySelector('#orderId')
const gambar = document.querySelector('#gambar')

konfirmasi.onclick = function () {
    const form = new FormData()

    form.append('bukti', gambar.files[0])

    $.ajax({
        url: `/konfirmasi/${orderId.value}`,
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
            // location.reload()
        },
        error: function (res) {
            const resp = res.responseJSON
            alert(resp.message)
        }
    })
}
