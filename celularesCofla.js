class Celulares{
    constructor(ram, rdp, rdc, peso, marca, color){
        this.ram = ram;
        this.rdp = rdp;
        this.rdc = rdc;
        this.peso = peso;
        this.marca = marca;
        this.color = color
        this.turnOn = false
    }verInfo(){
        return document.write(`
        Color: ${this.color}<br>
        Ram: ${this.ram}<br>
        Resolucion de Pantalla: ${this.rdp}<br>
        Resolucion de Camara: ${this.rdc}<br>
        Marca: ${this.marca}<br>
        Peso: ${this.peso}<br><br></br>`);
    }botonDeEncendido(){
        if( this.turnOn == false){
            alert("Celular prendido");
             this.turnOn = true;
        }else {
            alert("Celular apagado");
            this.turnOn = false;
}
    }botonDeReset(){
        if(this.turnOn == true){
            alert("Reiniciando el telefono");
        }else{
            alert("No se puede reiniciar, porque el telefono esta apagado");
        }
    }tomarFoto(){
        if( this.turnOn ==  true){
            alert(`Tomando foto en una resolucion de ${this.rdc}`)
        }else {
            alert("El telefono esta apagado");
        }
    }tomarVideo(){
        if(this.turnOn == true){
            alert(`Tomando video en una resolucion de ${this.rdc}`)
        }else{
            alert("El telefono esta apgado");
        }
    }
        
}

const nokia = new Celulares("1","720x460","1200x960","2,2","Nokia", "gris");
const samsung = new Celulares("3", "960x480", "1600x1200","2", "Samsung", "negro");
const iphone = new Celulares("3", "960x480", "1800x1400", "2.2", "Iphone", "blanco");

nokia.verInfo();
samsung.verInfo();
iphone.verInfo();

nokia.botonDeEncendido();
nokia.botonDeReset();
nokia.tomarFoto();
nokia.tomarVideo();
nokia.botonDeEncendido();

class CelularesAltaGama extends Celulares{
    constructor(ram, rdp, rdc,peso, marca, color, rdce){
        super(ram, rdp, rdc,peso,marca ,color);
        this.resolucionDeCamaraExtra = rdce;
    }recordingSlow(){
        alert("estas grabando en camara lenta");
    }reconocimientoFacial(){
        alert("Esta habilitado el reconocimiento facial");
    }infoDeCelularDeAltaGama(){
        return this.verInfo() + document.write(`Resolucion de Camara Extra es ${this.resolucionDeCamaraExtra}<br></br>`);
    }
}

const samsungAltaGama = new CelularesAltaGama("3", "1600x1200", "2100x1800", "3", "Samsung", "negro", "2100x1800");
const iphoneAltaGama =  new CelularesAltaGama("4", "1600x1200", "2400x2100", "4", "Iphone", "blanco", "1600x1200");

samsungAltaGama.recordingSlow();
samsungAltaGama.reconocimientoFacial();
samsungAltaGama.infoDeCelularDeAltaGama();