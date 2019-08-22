import { ContactTemplate } from './templates/ContactTemplate.js'

const ContactComponent = Vue.component('contact-content', {
	created () {
		window.document.title = 'Contacto'
	},

	template: ContactTemplate
})

export { ContactComponent }