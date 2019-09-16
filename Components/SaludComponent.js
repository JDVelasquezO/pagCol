import { SaludTemplate } from './templates/carrerasTemplates/SaludTemplate.js'

const SaludComponent = Vue.component('salud-content', {
    data () {
		return {
			msg: 'Ciencias de la salud'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created(){
        window.document.title = 'Ciencias de la Salud'
    },

    template: SaludTemplate
})

export { SaludComponent }