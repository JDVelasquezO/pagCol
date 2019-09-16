const ContactTemplate = `
<section id="contact">
  
<!-- Heading -->
<h2 class="mb-5 font-weight-bold text-center">Contactanos</h2>
<hr>
<!--Grid row-->
<div class="container">
<div class="row">

    <!--Grid column-->
    <div class="col-lg-5 col-md-12">
        <!-- Form contact -->
        <form method='post' action='form.php' class="p-5 grey-text">
            <div class="md-form form-sm"> <i class="fa fa-user prefix"></i>
                <input name='name' autofocus type="text" id="form3" class="form-control form-control-sm">
                <label for="form3">Nombre</label>
            </div>
            <div class="md-form form-sm"> <i class="fa fa-envelope prefix"></i>
                <input name='email' type="text" id="form2" class="form-control form-control-sm">
                <label for="form2">Correo</label>
            </div>
            <div class="md-form form-sm"> <i class="fa fa-tag prefix"></i>
                <input name='title' type="text" id="form32" class="form-control form-control-sm">
                <label for="form34">Asunto</label>
            </div>
            <div class="md-form form-sm"> <i class="fa fa-pencil prefix"></i>
                <textarea name='body' type="text" id="form8" class="md-textarea form-control form-control-sm" rows="4"></textarea>
                <label for="form8">Mensaje</label>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-primary">Enviar<i class="fa fa-paper-plane-o ml-1"></i></button>
            </div>
        </form>
        <!-- Form contact -->
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-7 col-md-12">

        <!--Grid row-->
        <div class="row text-center">

            <!--Grid column-->
            <div class="col-lg-3 col-md-12 mb-6">

                <p><i class="fa fa-map fa-1x mr-2 grey-text"></i>Mixco, Guatemala</p>

            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-6">

                <p><i class="fa fa-building fa-1x mr-2 grey-text"></i>Lunes a Viernes,<br> 7:00-16:00</p>

            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-6">

                <p><i class="fa fa-phone fa-1x mr-2 grey-text"> Tel.:</i> (+502) 2431 - 5158</p>

            </div>
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-6">
                <p><a href="https://api.whatsapp.com/send?phone=50259221122&text=Hola!%20Quiero%20más%20información." target="_blank"><img src="https://img.icons8.com/ultraviolet/25/000000/whatsapp.png"> WhatsApp: (+502) 5922 - 1122 </a></p>
            </div>

        </div>
        <!--Grid row-->

        <!--Google map-->
        <div id="map-container" class="z-depth-1-half map-container mb-5" style="height: 400px">
          <div class="d-flex justify-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3360816058457!2d-90.57281598515932!3d14.63685398977937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a0365abbaddb%3A0xc1b4f69f910440b8!2sWilliam+Cornelius+Vocational+Training+Center.!5e0!3m2!1ses-419!2sgt!4v1551375239957" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>

    </div>
    <!--Grid column-->
</div>
<!--Grid row-->
</div>
</section>
<!--Section: Contact-->
`

export { ContactTemplate }