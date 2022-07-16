class Controle {
    constructor(tv) {
        this.tv = tv; 
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume+=2;
    }

    diminuirVolume() {
        this.diminuirVolume-=2;
    }
}

const controle1 = new Controle('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);