import { acercaTemplate } from './templates/AcercaTemplate.js'

const AcercaComponent = Vue.component('acerca-content', {
    created () {
        window.document.title = 'Acerca de Nosotros'
    },

    template: acercaTemplate
})

export { AcercaComponent }