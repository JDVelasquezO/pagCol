import { LabTemplate } from './templates/carrerasTemplates/LabTemplate.js'

const LabComponent = Vue.component('lab-content', {
    data () {
		return {
			msg: 'Laboratorio Dental'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created(){
        window.document.title = 'Laboratorio Dental'
    },

    template: LabTemplate
})

export { LabComponent }