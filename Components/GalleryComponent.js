import { db } from "../main.js";

const GalleryComponent = Vue.component('gallery-content', {
	data() {
		return {
			msg: 'Galería',
			title: 'Instalaciones del colegio',
			images: [],
			loaded: false,
			opts: [ 'Actividades', 'Carreras' ],
			subtitle: 'Actividades'
		}
	},

	created () {
		window.document.title = 'Galería'
	},
	
	mounted() {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg
		this.chargueFirstCollection('actividades')
	},

	methods: {
		chargueFirstCollection (nameCollection) {
			db.collection(nameCollection).get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.images.push(doc.data())
					this.loaded = true
				})
			})
		},

		resetCollection (o) {
			this.subtitle = o
			this.images = []
		},

		loadImages (o) {
			if (o === 'Actividades') {
				this.resetCollection(o)
				this.chargueFirstCollection('actividades')
			} else if (o === 'Carreras') {
				this.resetCollection(o)
				this.chargueFirstCollection('carreras')
			}
		},
	},

	template: `
		<section id="galeria1">
			<select>
				<option v-for='o in opts' @click='loadImages(o)'>
					{{ o }}
				</option> 
			</select>
		  <div class="fondo">
			  <h2>{{ title }}</h2>
			  <h2 v-if='!loaded'>Cargando...</h2>
			  <h2 v-if='loaded'>{{ subtitle }}</h2>
			  <ul class="galeria" id='gallery'>
			  	<li v-for='i in images'><a href="#img">
			  		<img :src="i.url">
			  	</a></li>
			  </ul>
		  </div>
		</section>
`
})

export { GalleryComponent }
