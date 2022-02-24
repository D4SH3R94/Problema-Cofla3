class Aplicaciones{
    constructor(cd, puntuacion, peso){
        this.cantidadDeDescarga = cd;
        this.rating = puntuacion;
        this.weight = peso;
        this.instalacion = false;
        this.estado = false;
    }infoApp(){
        return document.write(`
        Peso: ${this.weight} mb<br>
        Cantidad de Descargas: ${this.cantidadDeDescarga} millones<br>
        Puntuacion: ${this.rating} estrellas<br><br></br>`)
    }instalarApp(){
        if(this.instalacion == false){
            alert("La aplicacion se instalo");
            return this.instalacion = true;
        }else{
            alert("La aplicacion se desinstalo");
            return this.instalacion = false;
        }
    }openApp(){
        if(this.estado == false && this.instalacion == true){
            alert("Se abrio la aplicacion");
            return this.estado = true;
        }else if(this.estado == true && this.instalacion == true){
            alert("Se cerro la aplicacion");
            return this.estado = false;
        }else if (this.estado == false && this.instalacion == false){
            alert("El programa no esta instalado");
        }
    }
}

const clashOfClan = new Aplicaciones("75", "4.1", "210");

clashOfClan.infoApp();
clashOfClan.instalarApp();
clashOfClan.openApp();
clashOfClan.openApp();
clashOfClan.instalarApp(); 