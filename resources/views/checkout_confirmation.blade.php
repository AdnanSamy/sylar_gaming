<!DOCTYPE html>
<html lang="en">

    @include('header_meta')

<body>

    @include('header_sub')

    <!-- Page Header Start -->
    <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Checkout Confirmation</h1>
            <div class="d-inline-flex">
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- Checkout Start -->

    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <div class="col-lg-8">
                <div class="mb-4">
                    <h4 class="font-weight-semi-bold mb-4">Order Detail</h4>
                    <div class="row">
                        <h5>Nomor Order <b id="orderId"></b> berhasil dibuat. silahkan melalukan pembayaran melalui rekening dibawah. Setelah melakukan pembayaran mohon untuk konfirmasi order melalui Halaman <b>Konfirmasi order.</b></h5>
                        <a class="logo" style="color: black"><img src="{{ asset('images/bca.png') }}" height="80" width="80" alt=""><span style="font-size: 16px;"><b>5572817281 a.n Ragil</b></span></a>
                    </div>
                    <div class="row">
                        <table id="table" class="table table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-secondary mb-5">
                    <div class="card-header bg-secondary border-0">
                        <h4 class="font-weight-semi-bold m-0">Summary</h4>
                    </div>
                    <div class="card-footer border-secondary bg-transparent">
                        <div class="d-flex justify-content-between mt-2">
                            <h5 class="font-weight-bold">Total</h5>
                            <h5 class="font-weight-bold" id="orderTotal"></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->


    @include('footer')
    <script>
        const id = '{{ $id }}'
    </script>
    <script src="{{ asset('js/user/checkout_confirm.js') }}"></script>
</body>
</html>
