<!DOCTYPE html>
<html lang="en">

@include('header_meta')
</head>

<body>


    @include('header_sub')
    <!-- Page Header Start -->
    <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Login</h1>
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
                    <h4 class="font-weight-semi-bold mb-4">Login</h4>
                    <form id="formLogin">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>Username</label>
                                <input class="form-control" type="text" id="username" name="username"
                                    placeholder="example@email.com">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Password</label>
                                <input class="form-control" type="password" id="password" name="password" placeholder="*****">
                            </div>
                            <div class="col-md-12 form-group">
                                <div class="custom-control custom-checkbox">
                                    <button class="btn btn-primary btn-block border-0 py-3"
                                        type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->
    <script>
        const _token = '{{ csrf_token() }}'
    </script>
    <script src="{{ asset('js/login.js') }}"></script>
    @include('footer')
</body>

</html>
