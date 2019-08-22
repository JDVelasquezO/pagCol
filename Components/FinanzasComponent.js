import { FinanzasTemplate } from './templates/carrerasTemplates/FinanzasTemplate.js'

const FinanzasComponent = Vue.component('finanzas-content', {
    created(){
        window.document.title = 'Finanzas y Administración'
    },

    template: FinanzasTemplate
})

export { FinanzasComponent }