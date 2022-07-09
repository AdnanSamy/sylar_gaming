<!-- Main Footer -->
<footer class="main-footer">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.5
    </div>
</footer>
<div class="modal" id="modal_add_image" data-backdrop="static" data-keyboard="false" tabindex="1 "
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Gambar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group row col-md-12 ml-auto">
                    <label class="col-md-1 m-1 ml-auto" for="cari_image">Search</label>
                    <input type="text" id="cari_image" class="form-control col-md-4">
                </div>
                <div id="image_container" class="row form-group">

                </div>
                <nav aria-label="...">
                    <ul class="pagination">

                    </ul>
                </nav>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="add_image" class="btn btn-primary btn-admin">Add</button>
            </div>
        </div>
    </div>
</div>
