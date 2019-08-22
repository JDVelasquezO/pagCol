import { hdTemplate } from './templates/carrerasTemplates/hdTemplate.js'

const hdComponent = Vue.component('hd-content', {
    created (){
        window.document.title = 'Higiene Dental'
    },

    template: hdTemplate
})

export { hdComponent }