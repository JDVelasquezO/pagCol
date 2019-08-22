const DiseñoTemplate = `
<section id="best-features" class="text-center">
    <!--Grid row-->
    <div class="container">
        <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-6"><br><br>
                <img src="../img/carreras/DSC06077.JPG"  class="img-fluid" alt="Diseño Gráfico">
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
                            <div class="card-body D"><br>
                                El estudiante egresado adquiere conocimientos que le permiten desarrollar habilidades y destrezas, 
                                para descubrir y solucionar problemas de comunicación visual, mediante el proceso de diseño y aplicando
                                las técnicas de planificación, investigación y bocetación impresa y digital.<br><br>
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
                            <div class="card-body D">
                                Pensum: <a href="pensum/BCCLLDG.pdf" target="_blank" style="color: rgb(158, 244, 149);">Pensum Diseño Gráfico</a>
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
export { DiseñoTemplate }