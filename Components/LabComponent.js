import { LabTemplate } from './templates/carrerasTemplates/LabTemplate.js'

const LabComponent = Vue.component('lab-content', {
    created(){
        window.document.title = 'Laboratorio Dental'
    },

    template: LabTemplate
})

export { LabComponent }