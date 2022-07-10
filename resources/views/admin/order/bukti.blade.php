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
                            <h1 class="m-0 text-dark">Bukti Pembayaran</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="container-fluid">
                            <table class="table table-bordered" id="table">
                                <thead class="admin-bg text-white">
                                    <tr>
                                        <th style="width: 10%">No</th>
                                        <th>Tanggal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
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
    <script src="{{ asset('js/admin/order/bukti.js') }}"></script>
</body>

</html>
