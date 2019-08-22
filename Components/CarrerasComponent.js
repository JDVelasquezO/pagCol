import { CarrerasTemplate} from './templates/carrerasTemplate.js'

const CarrerasComponent = Vue.component('carreras-content', {
    created () {
        window.document.title = 'Carreras'
    },

    template: CarrerasTemplate
})

export { CarrerasComponent }