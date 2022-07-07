class Multimedia {
    constructor(url) {
        this._url = () => url
    }

    get url() {
        return this._url()
    }

    set url(new_url) {
        return this._url = () => new_url
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = () => id
    }

    get id() {
        return this._id()
    }

    set id(new_id) {
        return this._id = () => new_id
    }

    playMultimedia() {
        llamarVideo.inyectar(this.url, this.id)
    }

    setInicio(tiempo) {

        llamarVideo.inyectar(`${this.url}?start=${tiempo}`, this.id)
    }
}

let llamarVideo = (() => {
    function inyectarVideo(url, id) {
        let idVideo = document.querySelector(`#${id} iframe`)
        idVideo.setAttribute("src", url)
    }
    return {
        inyectar: function (url, id) {
            inyectarVideo(url, id)
        }
    }
})()

const musica = new Reproductor("https://www.youtube.com/embed/yXrlhebkpIQ", "musica")
const pelicula = new Reproductor("https://www.youtube.com/embed/bNfjR6W2RtA", "peliculas")
const serie = new Reproductor("https://www.youtube.com/embed/m7ccdln9MOI", "series")

musica.playMultimedia()
musica.setInicio(225)
pelicula.playMultimedia()
pelicula.setInicio(30)
serie.playMultimedia()
serie.setInicio(20)