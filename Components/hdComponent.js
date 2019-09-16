import { hdTemplate } from './templates/carrerasTemplates/hdTemplate.js'

const hdComponent = Vue.component('hd-content', {
    data () {
		return {
			msg: 'Higiene Dental'
		}
    },
    
    mounted () {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
	},

    created (){
        window.document.title = 'Higiene Dental'
    },

    template: hdTemplate
})

export { hdComponent }