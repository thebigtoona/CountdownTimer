/**
 * eventTimer class 
 * @description : this class takes in a date string and calculates, the distance between 
 * the current time and the date string provided 
 * @param {string} eventDate : user input from the dom as string or a string Date value  
 */
const eventTimer = class {
    constructor( eventDate ) { 
        this.eventDate = new Date(eventDate).getTime();
        this.now = () => new Date().getTime();
        this.getDistance = () => this.eventDate - this.now();
        this._day = () => Math.floor(this.getDistance() / (1000 * 60 * 60 * 24));
        this._hour = () => Math.floor((this.getDistance() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this._min = () => Math.floor((this.getDistance() % (1000 * 60 * 60)) / (1000 * 60));
        this._sec = () => Math.floor((this.getDistance() % (1000 * 60)) / 1000);
        this.checkTime = () => console.log(this._day(), ":", this._hour(), ":", this._min(), ":", this._sec())
    }
    
};

const month = 'May'
const day = '7'
const hr = '15'
const min = '30'
const sec = '00'

const pomorado = new eventTimer(`${month} ${day}, 2018 ${hr}:${min}:${sec}`);
console.log(pomorado);

setInterval(pomorado.checkTime, 1000);