import { indexTemplate } from './templates/IndexTemplate.js'

const IndexComponent = Vue.component('index-content', {
	data () {
		return {
			msg: 'Institución Educativa con Principios y Valores Cristianos'
		}
	},

	created () {
		window.document.title = 'Inicio'
	},

	mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

	template: indexTemplate
})

export { IndexComponent }
