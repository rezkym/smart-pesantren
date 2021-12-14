(()=>{"use strict";var t,i,n=(i=function(i){var n="login-"+i+"-on";i="kt_login_"+i+"_form",t.removeClass("login-forgot-on"),t.removeClass("login-signin-on"),t.removeClass("login-signup-on"),t.addClass(n),KTUtil.animateClass(KTUtil.getById(i),"animate__animated animate__backInUp")},{init:function(){var n;t=$("#kt_login"),n=FormValidation.formValidation(KTUtil.getById("kt_login_signin_form"),{fields:{email:{validators:{emailAddress:{message:"Email tidak benar."},notEmpty:{message:"Email tidak boleh kosong."}}},password:{validators:{notEmpty:{message:"Kata sandi tidak boleh kosong"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,submitButton:new FormValidation.plugins.SubmitButton,bootstrap:new FormValidation.plugins.Bootstrap}}),$("#kt_login_signin_submit").on("click",(function(t){t.preventDefault(),n.validate().then((function(t){"Valid"==t?(KTUtil.scrollTop(),$("#kt_login_signin_form").submit()):KTUtil.scrollTop()}))})),$("#kt_login_forgot").on("click",(function(t){t.preventDefault(),i("forgot")})),$("#kt_login_signup").on("click",(function(t){t.preventDefault(),i("signup")})),function(t){var n,o=KTUtil.getById("kt_login_signup_form");n=FormValidation.formValidation(o,{fields:{name:{validators:{notEmpty:{message:"Nama tidak boleh kosong."},regexp:{regexp:/^[a-zA-Z ]+$/,message:"Nama tidak benar."},stringLength:{min:5,max:50,message:"Nama minimal antara 5 hingga 50 karakter."}}},email:{validators:{notEmpty:{message:"Email tidak boleh kosong."},emailAddress:{message:"Email tidak benar."}}},password:{validators:{notEmpty:{message:"Kata sandi tidak boleh kosong."}}},agree:{validators:{notEmpty:{message:"Setujui syarat dan persetujuan."}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap}}),$("#kt_login_signup_submit").on("click",(function(t){t.preventDefault(),n.validate().then((function(t){"Valid"==t?swal.fire({text:"Apakah semua data sudah benar?",icon:"success",buttonsStyling:!1,cancelButtonText:"Ehhh! belum.",confirmButtonText:"Yeups, udah!",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}}).then((function(){KTUtil.scrollTop(),$("#kt_login_signup_form").submit()})):swal.fire({text:"Upss! ada yang salah nih, coba cek lagi kuy.",icon:"error",buttonsStyling:!1,confirmButtonText:"Okeyyy.",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}}).then((function(){KTUtil.scrollTop()}))}))})),$("#kt_login_signup_cancel").on("click",(function(t){t.preventDefault(),i("signin")}))}(),function(t){var n;n=FormValidation.formValidation(KTUtil.getById("kt_login_forgot_form"),{fields:{email:{validators:{notEmpty:{message:"Email address is required"},emailAddress:{message:"The value is not a valid email address"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap}}),$("#kt_login_forgot_submit").on("click",(function(t){t.preventDefault(),n.validate().then((function(t){"Valid"==t?KTUtil.scrollTop():swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn font-weight-bold btn-light-primary"}}).then((function(){KTUtil.scrollTop()}))}))})),$("#kt_login_forgot_cancel").on("click",(function(t){t.preventDefault(),i("signin")}))}()}});jQuery(document).ready((function(){n.init()}))})();