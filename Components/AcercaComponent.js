import { acercaTemplate } from './templates/AcercaTemplate.js'

const AcercaComponent = Vue.component('acerca-content', {
    data () {
		return {
			msg: 'Acerca de Nosotros'
		}
	},

    created () {
        window.document.title = 'Acerca de Nosotros'
    },

    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    template: acercaTemplate
})

export { AcercaComponent }