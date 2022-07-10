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
                                <div class="col-md-1">
                                    <label for="kategori" class="m-2">Kategori</label>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="kategori">
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
    <script src="{{ asset('js/admin/kategori/edit.js') }}"></script>
</body>

</html>
