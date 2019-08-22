import { indexTemplate } from './templates/IndexTemplate.js'

const IndexComponent = Vue.component('index-content', {
	created () {
		window.document.title = 'Inicio'
	},

	template: indexTemplate
})

export { IndexComponent }
