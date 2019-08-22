const SaludTemplate=`
<section id="best-features" class="text-center">
    <!--Grid row-->
    <div class="container">
        <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-6"><br><br>
                <img src="../img/valores.JPG"  class="img-fluid" alt="Ciencias de la salud">
            </div>
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-6"><br><br>
                <h3 class="mb-5 font-weight-bold">Información</h3>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header titulo" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Perfil estudiante egresado
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body S"><br>
                                El egresado esta capacitado para definir estudios universitarios en el campo de la salud.
                                Posee conocimientos básicos en cuidado de la salud y el adulto mayor, y atención de pequeñas
                                emergencias. Adquiere conocimientos para la prevensión de las enfermedades, la promoción de la salud
                                y el bienestar tanto del individuo como el de la colectividad.<br><br>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header titulo" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Pensum
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body S">
                                Pensum: <a href="pensum/BCCLLCDS.pdf" target="_blank" style="color: rgb(147, 224, 248);">Pensum Diplomado en Ciencias de la salud</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!--Grid column-->
    </div><br><br>
</section>
`
export { SaludTemplate }