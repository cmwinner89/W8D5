

Function.prototype.myThrottle = function(interval) {
  let tooSoon;

  if (!tooSoon){
      tooSoon = true;
      setTimeout(function () {
          console.log(this)
          tooSoon = false;
          this.myThrottle(interval);
          return this;
        }, interval); 
  }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
    neuron.fire();
}, 10);



