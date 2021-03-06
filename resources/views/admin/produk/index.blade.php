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
                <div class="container-fluid">
                    <div class="row mb-2">
                        <a href="/admin-produk/new" class="btn btn-primary ml-auto">+</a>
                    </div>
                    <table class="table table-bordered" id="tableProduct">
                        <thead class="admin-bg text-white">
                            <tr>
                                <th>No</th>
                                <th>Nama Produk</th>
                                <th>Kategori</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                                <th>Stok</th>
                                <th>Views</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <aside class="control-sidebar control-sidebar-dark">
        </aside>

        @include('admin.footer')
    </div>

    @include('admin.scripts')
    <script>
        const _token = '{{ csrf_token() }}'
    </script>
    <script src="{{ asset('js/admin/produk/index.js') }}"></script>
</body>

</html>
