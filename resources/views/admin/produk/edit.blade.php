<!DOCTYPE html>
<html lang="en">

@include('admin.head')

<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
    <div class="wrapper">
        <!-- Navbar -->
        @include('admin.tree')

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Produk</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="nama">Nama</label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" class="form-control" id="nama">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label for="gambar">Gambar</label>
                                </div>
                                <div class="col-md-9 mt-2">
                                    <input type="file" accept="image/jpeg" class="form-control" id="gambar">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label for="kategori">Kategori</label>
                                </div>
                                <div class="col-md-9 mt-2">
                                    <select id="kategori" class="form-control">
                                        @foreach ($categories as $c)
                                            <option value="{{ $c->id }}">{{ $c->kategori }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label for="deskripsi">Deskripsi</label>
                                </div>
                                <div class="col-md-9 mt-2">
                                    <textarea id="deskripsi" class="form-control"></textarea>
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label for="harga">Harga</label>
                                </div>
                                <div class="col-md-9 mt-2">
                                    <input type="number" class="form-control" id="harga">
                                </div>
                                <div class="col-md-3 mt-2">
                                    <label for="stok">Stok</label>
                                </div>
                                <div class="col-md-9 mt-2">
                                    <input type="number" class="form-control" id="stok">
                                </div>
                            </div>
                            <div class="row mt-5">
                                <button id="save" class="btn btn-primary admin-bg ml-auto">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

        <aside class="control-sidebar control-sidebar-dark">
        </aside>

        @include('admin.footer')
    </div>

    @include('admin.scripts')
    <script>
        const id = '{{ $id }}'
        const _token = '{{ csrf_token() }}'
    </script>
    <script src="{{ asset('js/admin/produk/edit.js') }}"></script>
</body>

</html>
