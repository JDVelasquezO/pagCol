import { ContactTemplate } from './templates/ContactTemplate.js'

const ContactComponent = Vue.component('contact-content', {
	data () {
		return {
			msg: 'Contacto'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

	created () {
		window.document.title = 'Contacto'
	},

	template: ContactTemplate
})

export { ContactComponent }