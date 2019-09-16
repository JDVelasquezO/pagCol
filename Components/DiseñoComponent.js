import { DiseñoTemplate } from './templates/carrerasTemplates/DiseñoTemplate.js'

const DiseñoComponent = Vue.component('diseño-content', {
    data () {
		return {
			msg: 'Diseño gráfico'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created(){
        window.document.title = 'Diseño Gráfico'
    },
    
    template: DiseñoTemplate
})

export { DiseñoComponent }