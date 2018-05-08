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

// TODO: new object to handle parsing the date from the user and feeding it to the eventTimer class
const parseDate = {
    parseDay: () => console.log('parse the day'),
    parseMonth: () => console.log('parse the month'),
    parseYear: () => console.log('parse the year'),
    parseMin: () => console.log(),
    parseSec: () => console.log(),
    parseReturnVal: '',
}

// variable set up for the timer 
const month = 'May'
const year = '2018'
const day = '8'
const hr = '15'
const min = '30'
const sec = '00'

// test timer 
const pomorado = new eventTimer(`${day} ${month} ${year} ${hr}:${min}:${sec}`);
console.log(pomorado);

setInterval(pomorado.checkTime, 1000);