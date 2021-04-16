class Clock {
    constructor() {
      // 1. Create a Date object.
        this.date = new Date(Date());
      // 2. Store the hours, minutes, and seconds.
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
      // 3. Call printTime.
        this.printTime(); 
      // 4. Schedule the tick at 1 second intervals.
      console.log(`this in constructor ${this}`);
        this._tick();
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
         this.seconds+=1;
        console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      let that = this;
      setInterval(function() { 
        that.hours = that.date.setHours();
        that.minutes = that.date.setMinutes();
        that.seconds = that.date.setSeconds();
        let x = that.printTime.bind(that);
        x();
      }, 1000);


    }
  }
  
  const clock = new Clock();