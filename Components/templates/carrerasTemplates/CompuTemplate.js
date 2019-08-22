const CompuTemplate = `

<section id="best-features" class="text-center">
    <!--Grid row-->
    <div class="container">
        <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-6"><br><br>
                <img src="../img/carreras/DSC01300.JPG"  class="img-fluid" alt="Computación">
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
                            <div class="card-body C"><br>
                                El estudiante egresado aprende a encontrar soluciones tecnológicas, contables y administrativas, 
                                desarrollando software y soporte para reparación de equipo computacional, aplicando las técnicas
                                de análisis de datos, algoritmos y paradigmas de programación, mantenimientos de equipo computacional,
                                tecnologías de la información y la comunicación.<br><br>
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
                            <div class="card-body C">
                                Pensum: <a href="pensum/BCCLLCOM.pdf" target="_blank" style="color: rgb(243, 167, 167);">Pensum Computación</a>
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

export { CompuTemplate }