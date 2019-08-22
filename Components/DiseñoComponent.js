import { DiseñoTemplate } from './templates/carrerasTemplates/DiseñoTemplate.js'

const DiseñoComponent = Vue.component('diseño-content', {
    created(){
        window.document.title = 'Diseño Gráfico'
    },
    
    template: DiseñoTemplate
})

export { DiseñoComponent }