// this page is just for testing purposes so i can test the class out using node :) 

/**
 * Class to create a timer obj 
 * @description - this class takes in a date string and calculates, the distance between 
 * the current time and the date string provided 
 * @param {string} eventDate - user input from the dom as string or a string Date value  
 */
const EventTimer = class {
  constructor( eventDate ) { 
      this.eventDate = new Date(eventDate).getTime();
      this.now = new Date().getTime();
      this.distance = this.eventDate - this.now;
      this.day = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      this.hour = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.min = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.sec = Math.floor((this.distance % (1000 * 60)) / 1000);
  } 
  checkTime() {
    console.log(this.day, ":", this.hour, ":", this.min, ":", this.sec)
  }
  getDistance(){ this.eventDate - this.now; }
  toString() {
    return `eventDate ${this.eventDate} :: now  ${this.now} :: distance ${this.distance} :: day ${this.day} :: hour ${this.hour} :: min ${this.min} :: sec ${this.sec}`
  }
};
const x = setInterval(() => {
  var timer = new EventTimer(`08 May 2018 15:57:30`)
  timer.checkTime();  
  if (timer.distance < 1000) clearInterval(x)  
}, 1000)

