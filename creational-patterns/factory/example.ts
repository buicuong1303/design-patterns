abstract class Logistics {
  public abstract createTransport(): Transport;
}

class RoadLogistics extends Logistics {
  public createTransport(): Transport {
      return new Truck()
  }
}

class SeaLogistics extends Logistics {
  public createTransport(): Transport {
      return new Ship()
  }
}

class RandomLogistics extends Logistics {
  public createTransport(): Transport {
      const rand = Math.floor(Math.random() * 2);
      if (rand === 1) {
        return new Truck()
      } else {
        return new Ship()
      }
  }
}
interface Transport {
  delivery(): string
}

class Truck implements Transport {
  public delivery(): string {
      return 'Deliver by truck'
  }
}
class Ship implements Transport {
  public delivery(): string {
      return 'Deliver by ship'
  }
}

// const roadLogistic: Logistics = new RoadLogistics();
// const truckTransport = roadLogistic.createTransport();
// console.log(truckTransport.delivery());

// const seaLogistic: Logistics = new SeaLogistics();
// const shipTransport = seaLogistic.createTransport();
// console.log(shipTransport.delivery());

const randomLogistic: Logistics = new RandomLogistics();
const randomTransport = randomLogistic.createTransport();
console.log(randomTransport.delivery());