class Car {
  constructor(options){
    this.name = options.name
    this.isAirBag = options.isAirBag
    this.extraBalon = options.extraBalon
  }

  speed(){
    console.log('100 km/s');
  }

}

const BMW = new Car({
  name: 'BMW',
  isAirBag: false,
  extraBalon: 2
})

class Bus extends Car{
  constructor(options){
    super(options);
    this.weight = options.weight
  }

  speed(){
    console.log('50 km/s')
  }
}

const MAN = new Car({
  name: 'Aftobus',
  isAirBag: false,
  extraBalon: 1,
  weight: '43.000 kg'
})