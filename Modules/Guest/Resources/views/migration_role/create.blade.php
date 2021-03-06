{{-- Extends layout --}}
@extends('layouts.app')

{{-- Content --}}
@section('content')



    <div class="row "> {{-- justify-content-md-center --}}

        {{-- Migration Widget --}}
        <div class="col-xl-8 offset-lg-2">

            <!--begin::validation errors-->
            <x-metronic.alerts.notice-alert />

            <!--begin::Engage Widget 15-->
            <div class="card card-custom">
                <div class="card-body rounded p-0 d-flex bg-light">
                    <div
                        class="d-flex flex-column flex-lg-row-auto w-auto w-lg-350px w-xl-450px w-xxl-650px py-10 py-md-14 px-10 px-md-20 pr-lg-0">
                        <h1 class="font-weight-bolder text-dark mb-0"> Migrasi Peran</h1>
                        <div class="font-size-h4 mb-8"> Kuy masukin kode peran kamu</div>
                        <!--begin::Form-->

                        <form action="{{ route('guest.migration_role.update', auth()->user()->id) }}" method="POST"
                            class="d-flex flex-center py-2 px-6 bg-white rounded">
                            @csrf
                            @method('PATCH')
                            
                            <span class="svg-icon svg-icon-lg svg-icon-primary">
                                <!--begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Search.svg-->
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <path
                                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                            fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                        <path
                                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                            fill="#000000" fill-rule="nonzero" />
                                    </g>
                                </svg>
                                <!--end::Svg Icon-->
                            </span>
                            <input type="text" name="code_migration" class="form-control border-0 font-weight-bold pl-2"
                                placeholder="Masukin disini yaaa" />
                        </form>
                        <!--end::Form-->
                    </div>
                    <div class="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover"
                        style="background-image: url({{ asset('media/svg/illustrations/copy.svg') }});">
                    </div>
                </div>
            </div>
            <!--end::Engage Widget 15-->
        </div>


    </div>


@endsection

{{-- Scripts Section --}}
@section('scripts')
    <script src="{{ asset('js/pages/widgets.js') }}" type="text/javascript"></script>
@endsection
