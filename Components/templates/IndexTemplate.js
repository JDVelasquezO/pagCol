const indexTemplate = `
<main>
    <!--Section: Best Features-->
    <section id="best-features" class="text-center"><br>
        <h2 class="mb-5 font-weight-bold">Centro Técnico Vocacional William Cornelius</h2>
        <div style="padding-left: 43px; padding-right: 40px;">
            <div class="media d-block d-md-flex mt-4">
            <img class="img-fluid d-flex mb-3 mx-auto media-image z-depth-1" src="public/images/intro.png" width="560px" alt="Generic placeholder image">
                <div class="media-body text-center text-md-left ml-md-3 ml-0"><br>
                    <p>
                    Líder en la formación de generaciones comprometidas con la fe Cristiana y en su superación permanente
                    para satisfacer altos estándares de efectividad social así como en la superación de su familia y país.
                    
                    Capacitados con un programa de educación escolar de alto rendimiento. Formados en el uso de Técnicas
                    y Tecnología de punta, dentro de su campo de acción, desarrollando en los egresados y egresadas
                    la vocación de servicio y el compromiso de promoción y desarrollo social personal, 
                    para mejorar su calidad de vida.
                    </p>
                </div>
            </div>
        </div><br>
    </section>
    <!--Section: Best Features-->

    <section id="examples" class="text-center">
    <!-- Heading -->
        <div id="intro2" class="view img-gradient">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="mask">
                    <div class="d-flex justify-content-center text-center img-gradient-overlay py-5">
                        <hr class="dark">
                        <div class="rowc">
                            <div class="col-lg-5 col-md-12 mb-5">
                                <h2 class="mb-5 font-weight-bold ej">Ejes transversales de CTVWC</h2>
                                <!--Grid row-->
                            </div>     
                            <!--Grid column-->
                            <div class="col-lg-7 col-md-12 mb-7">
                                <p class="text-white">
                                    Son elementos actitudinales que orientan el aprenidizaje y contribuyen
                                    a proveer y conservar la integración, la articulación y la 
                                    interdisciplinariedad.
                                </p>
                                <p class="ejes">
                                    <br> EMPRENDIMIENTO <br><br> LABORIOCIDAD <br><br> 
                                    LIDERAZGO <br><br> VALORES <br>
                                </p>
                            </div>
                            <!--Grid column-->
                        </div>
                        <hr class="dark">
                    </div>
                </div>
            </div>
        </div>  
    </section>

  <!--Grid row-->
  <div class="container">
    <div class="row">
        <!--Grid column--><br><br>
            <img src="public/images/valores.jpg"  class="rounded float-left img-fluid" alt="valores"><br><br>
        <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>

  <!--seccion de carousel-->
  <section>
      <div class="text-center my-3 noti fon">
        <hr>
          <h3 class="ven">Ven a conocernos</h3>
          <div class="containerc">
            <div class="row">
              <div class="MultiCarousel" data-items="1,1,4,3" data-slide="1" id="MultiCarousel"  data-interval="1000">
                      <div class="MultiCarousel-inner">
                          <div class="item">
                              <div class="pad15">
                                  <video class="img-fluid h" src="media/CANADADAY2018.mp4" autoplay muted loop>
                                  </video>
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <img class="img-fluid h" src="img/actividades/DSC06317.JPG" alt="imagen">
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <video class="img-fluid h" src="media/ctvwc.mp4" autoplay muted loop>
                                </video>
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                  <img class="img-fluid h" src="img/actividades/DSC06346.JPG" alt="imagen">
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <video class="img-fluid h" src="media/proyectoVida.MP4" autoplay muted loop>
                                </video>
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <img class="img-fluid h" src="img/actividades/DSC06249.JPG" alt="imagen">
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <video class="img-fluid h" src="media/Lab.MP4" autoplay muted loop>
                                </video>
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <img class="img-fluid h" src="img/actividades/DSC06272.JPG" alt="imagen">
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <video class="img-fluid h" src="media/musica.MP4" autoplay muted loop>
                                </video>
                              </div>
                          </div>
                          <div class="item">
                              <div class="pad15">
                                <img class="img-fluid h" src="img/instalaciones/porc2.JPG" alt="imagen">
                              </div>
                          </div>
                      </div>
                      <button class="btn btn-primary leftLst"><</button>
                      <button class="btn btn-primary rightLst">></button>
                  </div>
            </div>
            </div>
      </div>
  </section>
  <hr>
  <!--finaliza seccion de carousel 1 -->

</main>
`

export { indexTemplate }