import { db } from "../main.js";

const GalleryComponent = Vue.component('gallery-content', {
	data() {
		return {
			msg: 'Galería',
			title: 'Instalaciones del colegio',
			goldberg: [],
			graduacion: [],
			inicio: [],
			instalaciones: [],
			misioneros: [],
			navidad: [],
			ninios: [],
			seminario: [],
			septiembre: [],
			loaded: false,
			subtitle: 'Instalaciones'
		}
	},

	created() {
		window.document.title = 'Galería'
	},

	mounted() {
		let banner = document.getElementById('banner')
		banner.textContent = this.msg

		this.chargueFirstCollection('instalaciones', this.instalaciones)
		this.chargueFirstCollection('misioneros', this.misioneros)
		this.chargueFirstCollection('goldberg', this.goldberg)
		this.chargueFirstCollection('graduacion', this.graduacion)
		this.chargueFirstCollection('inicio', this.inicio)
		this.chargueFirstCollection('navidad', this.navidad)
		this.chargueFirstCollection('niños', this.ninios)
		this.chargueFirstCollection('seminario', this.seminario)
		this.chargueFirstCollection('septiembre', this.septiembre)
	},

	methods: {
		chargueFirstCollection (nameCollection, array) {
			db.collection(nameCollection).get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					array.push(doc.data())
					this.loaded = true
				})
			})
		},
	},

	template: `
	<div>
		<section id="galeria1">
		  <div class="fondo">
			  <h2>Instalaciones</h2>
			  <h2 v-if='!loaded'>Cargando...</h2>
			  <div class="fondo">
			  <ul class="galeria">
				<li v-for='i in instalaciones'>
					<a href="#img1"><img :src="i.url" alt="Instalaciones"></a>
				</li>
				</ul>
			</div>
			<br>
		  </div>
		</section>
	</div>
`
})

export { GalleryComponent }
