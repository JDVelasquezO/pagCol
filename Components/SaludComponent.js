import { SaludTemplate } from './templates/carrerasTemplates/SaludTemplate.js'

const SaludComponent = Vue.component('salud-content', {
    created(){
        window.document.title = 'Ciencias de la Salud'
    },

    template: SaludTemplate
})

export { SaludComponent }