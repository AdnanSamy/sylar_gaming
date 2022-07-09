let getEl = function (id) {
    return document.querySelector("#" + id);
}

var app_param = {
    auto_submit: 1,
    manual_submit: 2,
}

function getSummaryTryout(to_user_id) {
    $.ajax({
        url: '/get-summary-tryout',
        type: 'post',
        data: {
            _token,
            to_user_id,
        },
        success: function (res) {
            console.log(res);
            if (res.msg == 'success') {
                let list_summary = document.querySelector('.list-summary');

                list_summary.innerHTML = '';
                res.summary_nilai.forEach(nilai => {
                    let div = document.createElement('div');
                    let h5 = `<h5>${titleCase(nilai.key.split('_')[1])}: ${nilai.value}</h5>`

                    div.innerHTML = h5;

                    list_summary.appendChild(div);
                });

                $('#summary').modal('show');
            } else {
                alert(res.msg);
            }
        }
    });
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

var showImagePage = function (pagination, page) {
    image_container.innerHTML = '';
    if (pagination.list_image.length != 0) {
        let start_item = (page * pagination.item_per_page) - pagination.item_per_page;
        let page_content = pagination.list_image.filter((item, index) => {
            return index >= start_item && index < (page * pagination.item_per_page);
        });
        let page_num = document.querySelector('#page_num_' + page);
        let page_num_active = document.querySelector('.page-item.active');

        let before_btn = document.querySelector('.before-btn');
        let after_btn = document.querySelector('.after-btn');

        let page_num_index = Array.from(page_num.parentNode.children).findIndex(el => el == page_num);

        let before_page_hidden = Array.from(page_num.parentNode.children).filter((el, i) => {
            return i < page_num_index && !el.classList.contains('before-btn');
        });
        let next_page_hidden = Array.from(page_num.parentNode.children).filter((el, i) => {
            return i > (page_num_index + 1) && !el.classList.contains('after-btn');
        });

        pagination.curr_page = page;

        if (page_num_active) {
            console.log('masuk dalem');
            page_num_active.classList.remove('active');
        }

        // jika page 1 kesatu disabled
        console.log(page);
        if (page != 1) {
            console.log(page);
            before_btn.onclick = function () {
                showImagePage(pagination, pagination.curr_page - 1)
            };
        } else {
            before_btn.onclick = null;
        }

        // jika page terakhir didisabled
        if (page != Array.from(page_num.parentNode.children).length) {
            after_btn.onclick = function () {
                showImagePage(pagination, pagination.curr_page + 1);
            }
        } else {
            after_btn.onclick = null;
        }

        page_num.classList.add('active');

        before_page_hidden.forEach(el => el.classList.add('d-none'));
        next_page_hidden.forEach(el => el.classList.add('d-none'));
        page_num.nextElementSibling.classList.remove('d-none');
        page_num.classList.remove('d-none');

        page_content.forEach(image => {
            let image_name = image.app_image_name;

            let card_container = document.createElement('div');
            let card = document.createElement('div');

            card_container.classList.add('col-md-4');

            card.classList.add('card');

            let html = '';
            html += '<div class="card-header">';
            html += '   <div class="form-check">';
            html += '       <input class="form-check-input" type="radio" name="image_choose" data-image_link="' + image.image_link + '" data-image_name="' + image.app_image_name + '" id="image_choose_' + image.image_id + '" value="' + image.image_id + '" checked>';
            html += '       <label class="form-check-label" for="image_choose_' + image.image_id + '">';
            html += '           ' + image.app_image_name;
            html += '       </label>';
            html += '   </div>';
            html += '</div>'
            html += ' <img src="' + image.image_link + '" class="image-app card-img-top" alt="...">';
            html += ' <div class ="card-body">';
            html += '   <p contenteditable="false" class ="card-text p-1">' + image_name.split('.')[0] + '</p>';
            html += ' </div>';

            card.innerHTML = html;
            card_container.appendChild(card);

            image_container.appendChild(card_container);
        });
    }
};

var showPaginationBtn = function (pagination) {
    let image_pagination = document.querySelector('.pagination');

    console.log(pagination);

    let html_pagination = '';
    html_pagination += '<li class="page-item before-btn">';
    html_pagination += '    <a href="#" class="page-link">Previous</a>';
    html_pagination += '</li>';
    for (let i = 0; i < (pagination.list_image.length / pagination.item_per_page); i++) {
        if (i == 0) {
            html_pagination += '<li class="page-item active page-num" id="page_num_' + (i + 1) + '" ><a class="page-link" href="#">' + (i + 1) + '</a></li>';
        } else {
            html_pagination += '<li class="page-item page-num" id="page_num_' + (i + 1) + '" ><a class="page-link" href="#">' + (i + 1) + '</a></li>';
        };
    }
    html_pagination += '<li class="page-item after-btn">'
    html_pagination += '  <a class="page-link" href="#">Next</a>';
    html_pagination += '</li>';

    image_pagination.innerHTML = html_pagination;


    document.querySelectorAll('.page-num')
        .forEach((el, i) => {
            el.onclick = function () {
                showImagePage(pagination, (i + 1));
            }
        });
}

document.addEventListener('DOMContentLoaded', function () {

    if (window.use_image) {
        let total_page = list_image.length / 2;
        var pagination = {
            curr_page: 1,
            total_page,
            list_image,
            item_per_page: 3,
        }
        let cari_img = document.querySelector('#cari_image');

        const fuse = new Fuse(list_image, {
            findAllMatches: true,
            keys: [
                'app_image_name',
            ]
        })

        cari_img.oninput = function () {
            if (this.value != '') {
                let list_image = fuse.search(this.value).map(el => {
                    return el = el.item;
                });

                pagination.list_image = list_image;
                showPaginationBtn(pagination);
                showImagePage(pagination, 1)
            } else {
                pagination.list_image = list_image;

                showPaginationBtn(pagination);
                showImagePage(pagination, 1)
            }
        }

        showPaginationBtn(pagination);
        showImagePage(pagination, 1);
    }
})

var app_function = {
    SKD: 3,
    submitTryout: async function (type, jenis_to_id, to_user_id, to_id) {
        if (jenis_to_id == app_function.SKD) {
            $.ajax({
                url: '/get-soal-by-kategori',
                type: 'post',
                data: {
                    jenis_to_id,
                    to_user_id,
                    to_id,
                    _token,
                },
                success: async function (res) {
                    let tryout_user = JSON.parse(localStorage.getItem('tryout_user'));
                    let current_to_idx = tryout_user.findIndex(el => el.to_user_id == to_user_id);
                    let current_to = tryout_user[current_to_idx];
                    let listJawaban = current_to.listJawaban;
                    let notDone = false;

                    let callback_submit = function (list_kategori, current_to_idx) {
                        list_kategori_req = [];

                        list_kategori.forEach(kategori => {
                            list_kategori_req.push({
                                kategori_to_name: kategori.kategori_to_name,
                                score: kategori.score,
                            });
                        });

                        $.ajax({
                            url: '/submit-tryout',
                            type: 'post',
                            data: {
                                jenis_to_id,
                                to_user_id,
                                list_kategori: JSON.stringify(list_kategori_req),
                                list_jawaban: JSON.stringify(listJawaban),
                                _token,
                            },
                            success: function (res) {
                                if (res.status == 'success') {
                                    if (res.is_done) {
                                        let tryout_user = JSON.parse(localStorage.getItem('tryout_user'));

                                        tryout_user.splice(current_to_idx, 1);
                                        localStorage.setItem('tryout_user', JSON.stringify(tryout_user));
                                    }

                                    location.reload();
                                } else {
                                    alert(res);
                                }
                            }
                        })
                    }

                    res.forEach(function (kategori) {
                        if (kategori.kategori_to_name.toLowerCase() == 'tes karakteristik pribadi') {
                            kategori.benar = 0;

                            for (let i = 0; i < kategori.list_soal.length; i++) {
                                const soal = kategori.list_soal[i];
                                let soal_user = listJawaban.find(item => {
                                    return item.soal_to_id == soal.soal_to_id;
                                });

                                if (soal_user == undefined) {
                                    notDone = true;
                                    soal.benar = 0;
                                } else {
                                    let jawaban_obj = soal.list_jawaban.find(jawaban => {
                                        return jawaban.jawaban_to_id == soal_user.jawaban_to_id;
                                    })

                                    kategori.benar += jawaban_obj.jawaban_nilai;
                                };
                            }

                            kategori.score = parseInt(kategori.benar);

                            // console.log(item.kategori_to_name);
                        } else {
                            for (let i = 0; i < kategori.list_soal.length; i++) {
                                const el = kategori.list_soal[i];
                                let soal_user = listJawaban.find(item => {
                                    return item.soal_to_id == el.soal_to_id;
                                });

                                if (soal_user == undefined) {
                                    notDone = true;
                                    el.benar = false;
                                } else {
                                    el.soal_to_jawaban.toUpperCase() == soal_user.jawaban_to_huruf.toUpperCase() ?
                                        el.benar = true : el.benar = false;
                                };
                            }

                            kategori.benar = kategori.list_soal.filter(el => el.benar == true);
                            kategori.salah = kategori.list_soal.filter(el => el.benar == false);
                            kategori.score = parseInt(kategori.benar.length) / parseInt(kategori.list_soal.length) * 100;
                        }
                    });

                    if (notDone && type == app_param.manual_submit) {
                        let modalTitle = "Submit Tryout";
                        let modalBody = "Ada soal belum terisi, yakin submit?";

                        showConfirm(modalTitle, modalBody, function () {
                            callback_submit(res, current_to_idx);
                        });
                    } else {
                        callback_submit(res, current_to_idx);
                    }
                }
            })
        } else {
            $.ajax({
                url: '/get-soal-by-jenis',
                type: 'post',
                data: {
                    jenis_to_id,
                    to_user_id,
                    to_id,
                    _token,
                },
                success: function (res) {
                    let tryout_user = JSON.parse(localStorage.getItem('tryout_user'));
                    let current_to_idx = tryout_user.findIndex(el => el.to_user_id == to_user_id);
                    let current_to = tryout_user[current_to_idx];
                    let listJawaban = current_to.listJawaban;
                    let notDone = false;
                    let benar = null;

                    for (let i = 0; i < res.length; i++) {
                        const el = res[i];
                        let soal = listJawaban.find(item => {
                            return item.soal_to_id == el.soal_to_id;
                        });

                        if (soal == undefined) {
                            notDone = true;
                            el.benar = false;
                        } else {
                            el.soal_to_jawaban.toUpperCase() == soal.jawaban_to_huruf.toUpperCase() ?
                                el.benar = true : el.benar = false;
                        };
                    }
                    let callback_submit = function (current_to_idx) {
                        benar = res.filter(el => el.benar == true);
                        salah = res.filter(el => el.benar == false);

                        let score = (parseInt(benar.length) / parseInt(res.length)) * 100;

                        $.ajax({
                            url: '/submit-tryout',
                            type: 'post',
                            data: {
                                jenis_to_id,
                                to_user_id,
                                nilai: parseInt(score),
                                list_jawaban: JSON.stringify(listJawaban),
                                _token,
                            },
                            success: function (res) {
                                if (res.status == 'success') {
                                    if (res.is_done) {
                                        let tryout_user = JSON.parse(localStorage.getItem('tryout_user'));

                                        tryout_user.splice(current_to_idx, 1);
                                        localStorage.setItem('tryout_user', JSON.stringify(tryout_user));
                                    }

                                    location.reload();
                                } else {
                                    alert(res);
                                }
                            }
                        })
                    }
                    if (notDone && type == app_param.manual_submit) {
                        let modalTitle = "Submit Tryout";
                        let modalBody = "Ada soal belum terisi, yakin submit?";

                        showConfirm(modalTitle, modalBody, function () {
                            callback_submit(current_to_idx);
                        });
                    } else {
                        callback_submit(current_to_idx);
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }
    }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let unescapeHTML = function (escapedHTML) {
    return escapedHTML.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "'");
}

function showConfirm(title, body, okAction) {
    let titleModalConfirm = document.querySelector('#title_modal_confirm');
    let bodyModalConfirm = document.querySelector('#body_modal_confirm');
    let okModalConfirm = document.querySelector('#ok_modal_confirm');

    titleModalConfirm.textContent = title;
    bodyModalConfirm.textContent = body;
    okModalConfirm.onclick = okAction;

    $('#modal_confirm').modal('show');
}

function resizeMe(img, max_width, max_height) {

    var canvas = document.createElement('canvas');

    var width = img.width;
    var height = img.height;

    // calculate the width and height, constraining the proportions
    if (width > height) {
        if (width > max_width) {
            //height *= max_width / width;
            height = Math.round(height *= max_width / width);
            width = max_width;
        }
    } else {
        if (height > max_height) {
            //width *= max_height / height;
            width = Math.round(width *= max_height / height);
            height = max_height;
        }
    }

    // resize the canvas and draw the image data into it
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL("image/jpeg", 0.7); // get the data from canvas as 70% JPG (can be also PNG, etc.)
}

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result)
        };
        reader.readAsText(file);
    })
}

function cobaPromis(input) {
    return new Promise((resolve) => {

        let checking = null;
        let stopInterval = function () {
            clearInterval(checking);
        }

        input.forEach((el) => {
            setTimeout(() => {
                el.done = true;
            }, 0);

        });

        let is_done = true;
        checking = setInterval(() => {
            for (let i = 0; i < input.length; i++) {
                const el = input[i];

                if (!el.done) {
                    is_done = false;
                    break;
                }
            }

            if (is_done) {
                resolve('selesai');
                stopInterval();
            }

        }, 100);
    });
}

function splitArrayIntoChunk(arr) {
    let result = [];
    var i, j, temporary, chunk = 10;
    for (i = 0, j = arr.length; i < j; i += chunk) {
        temporary = arr.slice(i, i + chunk);

        result.push(temporary);
    }

    return result;
}

function exportFile(data) {
    let soal_name = JSON.parse(data).soal_name;
    let file = new Blob([data], {
        type: 'text/plain'
    });
    let a = document.createElement('a');

    let url = URL.createObjectURL(file);

    a.href = url;
    a.download = soal_name + '.taruna';
    a.click();

    URL.revokeObjectURL(url);
}

function inputImage(btn, link, callback) {
    btn.onclick = function () {
        const add_image = document.querySelector('#add_image')
        $('#modal_add_image').modal('show');

        add_image.onclick = function () {
            const choosen_img = document.querySelector('input[name=image_choose]:checked');

            link.value = choosen_img.dataset.image_link

            callback()

            $('#modal_add_image').modal('hide')
        };
    }
}

function cleanString(input) {
    return input
        .replace(/"/g, ' \' ')
        .replace(/[\u0000-\u0019]+/g, "")
}
