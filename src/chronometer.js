class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
    //invoke the passed `printTimeCallback` every 1 second
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return Math.floor(seconds);
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    const towDigit = String(value);
    let newString;
    if (towDigit.length < 2) {
      newString = `0${towDigit}`;
      return newString;
    }
    return towDigit;

    
    //let newdig = String(value)
    //value.slice(0,10);
    //return `0${value}`
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
