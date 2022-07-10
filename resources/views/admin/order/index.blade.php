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
                        <a href="/admin-kategori/new" class="btn btn-primary admin-bg ml-auto">+</a>
                    </div>
                    <table class="table table-bordered" id="table">
                        <thead class="admin-bg text-white">
                            <tr>
                                <th style="width: 10%">No</th>
                                <th>Order Id</th>
                                <th>Pembeli</th>
                                <th>Alamat</th>
                                <th>Telepon</th>
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
    <script src="{{ asset('js/admin/order/index.js') }}"></script>
</body>

</html>
