<!DOCTYPE html>
<html lang="en">

    @include('header_meta')

<body>

        @include('header_sub')

    <!-- Page Header Start -->
    <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Konfirmasi Order</h1>
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
                    <h4 class="font-weight-semi-bold mb-4">Konfirmasi Order</h4>
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label>Kode Order</label>
                            <input class="form-control" type="text" placeholder="#0012">
                        </div>
                        <div class="col-md-12 form-group">
                            <label>Upload Bukti Transfer</label>
                            <input type="file" id="myFile" name="filename">
                        </div>
                        {{-- <div class="col-md-12 form-group">
                            <input type="submit">
                        </div> --}}
                        <div class="col-md-12 form-group">
                            <div class="custom-control custom-checkbox">
                                <button class="btn btn-primary btn-block border-0 py-3" type="submit">Konfirmasi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->


    @include('footer')
</body>

</html>
