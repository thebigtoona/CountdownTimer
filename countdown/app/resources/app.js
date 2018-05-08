/**
 * Class to create a timer obj 
 * @description - this class takes in a date string and calculates, the distance between 
 * the current time and the date string provided 
 * @param {string} eventDate - user input from the dom as string or a string Date value  
 */
const EventTimer = class {
    constructor( eventDate ) { 
        this.eventDate = new Date(eventDate).getTime();
        this.now = () => new Date().getTime();
        this.getDistance = () => this.eventDate - this.now();
        this._day = () => Math.floor(this.getDistance() / (1000 * 60 * 60 * 24));
        this._hour = () => Math.floor((this.getDistance() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this._min = () => Math.floor((this.getDistance() % (1000 * 60 * 60)) / (1000 * 60));
        this._sec = () => Math.floor((this.getDistance() % (1000 * 60)) / 1000);
        this.checkTime = () => {
            console.log(this._day(), ":", this._hour(), ":", this._min(), ":", this._sec())
            if (this.getDistance === '0') return false 
        }
    } 
};

/*** Fn to instanciate and start the timer obj
 * @param {Obj} timerValues - this is the obj with the tiemr data provided by startTimer
 */
function readyTimer(timerValues)
{
    // set up timer obj
    const timer = new EventTimer(`${timerValues.day} ${timerValues.month} ${timerValues.year} ${timerValues.hr}:${timerValues.min}:${timerValues.sec}`)
    // start timer 
    const x = setInterval(timer.checkTime, 1000)
    // TODO: fix the interval to clear at the appropriate time 
    if (timer.checkTime === false) clearInterval(x);  
}

/*** Function to start timer 
 * @description - this fn takes in the event, prevents the default state, manipulates the 
 * user data into an obj for readyTimer to use.  
 */
function startTimer(e)  {
    // prevent default state 
    e.preventDefault();
    
    // user inputs split into arrays to manipulate the data
    const dateInput = document.querySelector('#dateInput').value.split('-')
    const timeInput = document.querySelector('#timeInput').value.split(':')
    
    // key/value pairs for months to parse properly as dateString in EventTimer
    const months = { "01": 'Jan', "02": 'Feb', "03": 'Mar', "04": 'Apr', "05": 'May', "06": 'Jun', "07": 'Jul', "08": 'Aug', "09": 'Sep', "10": 'Oct', "11": 'Nov', "12": 'Dec' }
    
    // constructing the input data as an obj to inject into the dateString 
    const timerValues =  {
        month :  months[ dateInput[1] ],
        year : dateInput[0],
        day : dateInput[2],
        hr : timeInput[0],
        min : timeInput[1],
        sec : '00',
    }

    // ready and start the timer 
    readyTimer(timerValues);
} 

// variables  
const startBtn = document.querySelector('#startTimer')

// events 
startBtn.addEventListener('click', startTimer)