import { CarrerasTemplate} from './templates/carrerasTemplate.js'

const CarrerasComponent = Vue.component('carreras-content', {
    data () {
		return {
			msg: 'Carreras'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created () {
        window.document.title = 'Carreras'
    },

    template: CarrerasTemplate
})

export { CarrerasComponent }