<!DOCTYPE html>
<html lang="en">

    @include('header_meta')

<body>

    @include('header_sub')

    <!-- Page Header Start -->
    <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">History Detail</h1>
            <div class="d-inline-flex">
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- Checkout Start -->

    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <div class="col-lg-12">
                <div class="mb-4">
                    <h4 class="font-weight-semi-bold mb-4">Order Detail</h4>
                    <div class="row">
                        <table class="table table-bordered text-center mb-0">
                            <thead id="table" class="bg-secondary text-dark">
                                <tr>
                                    <th>Nomor Order</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->


    @include('footer')
    <script src="{{ asset('js/user/history.js') }}"></script>
</body>

</html>
