import { CompuTemplate } from './templates/carrerasTemplates/CompuTemplate.js'

const CompuComponent = Vue.component('compu-content', {
    created(){
        window.document.title = 'Computación'
    },

    template: CompuTemplate
})

export { CompuComponent }