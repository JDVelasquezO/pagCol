import { IndexComponent } from './Components/IndexComponent.js';
import { ContactComponent } from './Components/ContactComponent.js';
import { GalleryComponent } from './Components/GalleryComponent.js';
import { FooterComponent } from "./Components/StaticComponents/FooterComponent.js";
import { AcercaComponent } from "./Components/AcercaComponent.js";
import { CarrerasComponent} from "./Components/CarrerasComponent.js";
import { hdComponent } from "./Components/hdComponent.js";
import { SaludComponent } from "./Components/SaludComponent.js";
import { LabComponent} from "./Components/LabComponent.js";
import { DiseñoComponent} from "./Components/DiseñoComponent.js";
import { CompuComponent} from "./Components/CompuComponent.js";
import { FinanzasComponent} from "./Components/FinanzasComponent.js";


const Index = { template: '<index-content></index-content>' }
const Gallery = { template: '<gallery-content></gallery-content>' }
const Contact = { template: '<contact-content></contact-content>' }
const Acerca = { template: '<acerca-content></acerca-content>' }
const Carreras = { template: '<carreras-content></carreras-content>'}
const HD = { template: '<hd-content></hd-content>'}
const Salud = { template: '<salud-content></salud-content>'}
const Lab = { template: '<lab-content></lab-content>'}
const Diseño = { template: '<diseño-content></diseño-content>'}
const Compu = { template: '<compu-content></compu-content>'}
const Finanzas = { template: '<finanzas-content></finanzas-content>'}

const routes = [
  { path: '/', component: Index },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/acerca_de_nosotros', component: Acerca },
  { path: '/carreras', component: Carreras },
  { path: '/Higiene_Dental', component: HD },
  { path: '/Ciencias_de_la_Salud', component: Salud },
  { path: '/Laboratorio_Dental', component: Lab },
  { path: '/Diseño_Grafico', component: Diseño },
  { path: '/Computacion', component: Compu },
  { path: '/Finanzas_y_Admon', component: Finanzas }

]

const router = new VueRouter({
  routes,
})

export { router }