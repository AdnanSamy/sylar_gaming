document.addEventListener("DOMContentLoaded", function () {
    let ebookOnline = document.querySelector('.ebook-online');
    window.listCat.forEach(el => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        li.dataset.bank_id = el.CategoriesID;
        a.href = '/ebook_online/' + el.CategoriesName + "/" + el.CategoriesID;
        a.textContent = el.CategoriesName;
        li.appendChild(a);

        ebookOnline.appendChild(li);
    });


    let videoOnline = document.querySelector('.video-online');
    window.listCat.forEach(el => {
        let li = document.createElement('li');
        let a = document.createElement('a');

        li.dataset.bank_id = el.CategoriesID;
        a.href = '/video_online/' + el.CategoriesName + "/" + el.CategoriesID;
        a.textContent = el.CategoriesName;
        li.appendChild(a);

        videoOnline.appendChild(li);
    });

    let findBankParent = function (arr, parentID) {
        let result = null;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            if (el.MenuBankID == parentID) {
                return el;
            } else {
                let childResult = null;
                if (el.children.length != 0) {
                    childResult = findBankParent(el.children, parentID);
                }
                if (childResult != null) {
                    return childResult;
                }
            }
        }
        return null;
    }

    let findTOParent = function (arr, parentID) {
        let result = null;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            if (el.MenuTOID == parentID) {
                return el;
            } else {
                let childResult = null;
                if (el.children.length != 0) {
                    childResult = findTOParent(el.children, parentID);
                }
                if (childResult != null) {
                    return childResult;
                }
            }
        }

        return null;
    }

    let listElBank = [];
    let ulBank = document.createElement('ul');
    let bankOnline = document.querySelector('.bank-materi');
    for (let i = 0; i < window.listBank.length; i++) {
        const el = window.listBank[i];
        if (el.MenuBankParent == 0) {
            let li = document.createElement('li');
            li.dataset.bank_id = el.MenuBankID;

            let a = document.createElement('a');
            a.href = '/menu_bank_materi_soal/' + el.MenuBankID;
            a.textContent = el.MenuBankName;

            li.appendChild(a);

            ulBank.appendChild(li);

            listElBank.push({
                MenuBankID: el.MenuBankID,
                MenuParentID: el.MenuBankParent,
                MenuBankName: el.MenuBankName,
                children: [],
            });
        } else {
            let parentObj = findBankParent(listElBank, el.MenuBankParent);
            if (parentObj != null) {
                let liParent = ulBank.querySelector("[data-bank_id='" + parentObj.MenuBankID + "']");
                let aParent = liParent.querySelector('a');
                let ulParent = liParent.querySelector('ul');

                aParent.removeAttribute('href');
                if (!liParent.classList.contains('drop-down'))
                    liParent.classList.add('drop-down');
                if (ulParent == null) {
                    ulParent = document.createElement('ul');
                    liParent.appendChild(ulParent);
                }

                let li = document.createElement('li');
                let a = document.createElement('a');

                li.dataset.bank_id = el.MenuBankID;
                a.href = '/menu_bank_materi_soal/'+el.MenuBankName+'/'+ el.MenuBankID;
                a.textContent = el.MenuBankName;

                li.appendChild(a);
                ulParent.appendChild(li);

                parentObj.children.push({
                    MenuBankID: el.MenuBankID,
                    MenuParentID: el.MenuBankParent,
                    MenuBankName: el.MenuBankName,
                    children: [],
                });
            }
        }
    }
    bankOnline.appendChild(ulBank);

    let listEl = [];
    let ulTO = document.createElement('ul');
    let toOnline = document.querySelector('.tryout-online');
    for (let i = 0; i < window.listTO.length; i++) {
        const el = window.listTO[i];
        if (el.MenuTOParent == 0) {
            let li = document.createElement('li');
            li.dataset.to_id = el.MenuTOID;

            let a = document.createElement('a');
            a.href = '/try_out_online/' + el.MenuTOID;
            a.textContent = el.MenuTOName;

            li.appendChild(a);

            ulTO.appendChild(li);

            listEl.push({
                MenuTOID: el.MenuTOID,
                MenuParentID: el.MenuTOParent,
                MenuTOName: el.MenuTOName,
                children: [],
            });
        } else {
            let parentObj = findTOParent(listEl, el.MenuTOParent);
            if (parentObj != null) {
                let liParent = ulTO.querySelector("[data-to_id='" + parentObj.MenuTOID + "']");
                let aParent = liParent.querySelector('a');
                let ulParent = liParent.querySelector('ul');

                aParent.removeAttribute('href');
                if (!liParent.classList.contains('drop-down'))
                    liParent.classList.add('drop-down');
                if (ulParent == null) {
                    ulParent = document.createElement('ul');
                    liParent.appendChild(ulParent);
                }

                let li = document.createElement('li');
                let a = document.createElement('a');

                li.dataset.to_id = el.MenuTOID;
                a.href = '/try_out_online/'+el.MenuTOName+'/'+el.MenuTOID;
                a.textContent = el.MenuTOName;

                li.appendChild(a);
                ulParent.appendChild(li);

                parentObj.children.push({
                    MenuTOID: el.MenuTOID,
                    MenuParentID: el.MenuTOParent,
                    MenuTOName: el.MenuTOName,
                    children: [],
                });
            }
        }
    }
    toOnline.appendChild(ulTO);

    let listUjian = [];
    let ulUjian = document.createElement('ul');
    let ujianOnline = document.querySelector('.list-ujian');
    for (let i = 0; i < window.listBank.length; i++) {
        const el = window.listBank[i];
        if (el.MenuBankParent == 0) {
            let li = document.createElement('li');
            li.dataset.to_id = el.MenuBankID;

            let a = document.createElement('a');
            a.href = '/ujian/'+el.MenuBankName+'/' + el.MenuBankID;
            a.textContent = el.MenuBankName;

            li.appendChild(a);

            ulUjian.appendChild(li);

            listUjian.push({
                MenuBankID: el.MenuBankID,
                MenuParentID: el.MenuBankParent,
                MenuBankName: el.MenuBankName,
                children: [],
            });
        } else {
            let parentObj = findBankParent(listUjian, el.MenuBankParent);
            if (parentObj != null) {
                let liParent = ulUjian.querySelector("[data-to_id='" + parentObj.MenuBankID + "']");
                let aParent = liParent.querySelector('a');
                let ulParent = liParent.querySelector('ul');

                aParent.removeAttribute('href');
                if (!liParent.classList.contains('drop-down'))
                    liParent.classList.add('drop-down');
                if (ulParent == null) {
                    ulParent = document.createElement('ul');
                    liParent.appendChild(ulParent);
                }

                let li = document.createElement('li');
                let a = document.createElement('a');

                li.dataset.to_id = el.MenuBankID;
                a.href = '/ujian/'+el.MenuBankName+'/'+el.MenuBankID;
                a.textContent = el.MenuBankName;

                li.appendChild(a);
                ulParent.appendChild(li);

                parentObj.children.push({
                    MenuBankID: el.MenuBankID,
                    MenuParentID: el.MenuBankParent,
                    MenuBankName: el.MenuBankName,
                    children: [],
                });
            }
        }
    }
    ujianOnline.appendChild(ulUjian);
})