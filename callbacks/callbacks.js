class Clock {
    constructor() {
      const date = new Date(Date());
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime(); 
      this._tick();
    }
  
    printTime() {
        console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    }
  
    _tick() {
      let that = this;

      setInterval(function() { 
        if (that.seconds === 59) {
          that.seconds = 0;

          if (that.minutes === 59) {
            that.minutes = 0; 

            if (that.hours === 23) {
              that.hours = 0;
            } else {
              that.hours += 1;
            }

          } else {
            that.minutes += 1; 
          }

        } else {
          that.seconds += 1;
        }
        
        that.printTime.call(that);
      }, 1000);


    }
  }
  
  const clock = new Clock();


  