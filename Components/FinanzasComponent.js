import { FinanzasTemplate } from './templates/carrerasTemplates/FinanzasTemplate.js'

const FinanzasComponent = Vue.component('finanzas-content', {
    data () {
		return {
			msg: 'Administración y Finanzas'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created(){
        window.document.title = 'Finanzas y Administración'
    },

    template: FinanzasTemplate
})

export { FinanzasComponent }