import { CompuTemplate } from './templates/carrerasTemplates/CompuTemplate.js'

const CompuComponent = Vue.component('compu-content', {
    data () {
		return {
			msg: 'Bachillerato en Computación'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created(){
        window.document.title = 'Computación'
    },

    template: CompuTemplate
})

export { CompuComponent }