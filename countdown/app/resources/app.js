/**
 * Class to create a timer obj
 * @description - this class takes in a date string and calculates, the distance between
 * the current time and the date string provided
 * @param {string} eventDate - user input from the dom as string or a string Date value
 * @param {Number} now - the current time in ms
 * @param {Number} distance - calculated from the current time subtracted from the input time
 * @param {Number} day - calculated from the distance to represent the days left
 * @param {Number} hour - calculated from the distance  to represent the hours left
 * @param {Number} min  - calculated from the distance to represent the minutes left
 * @param {Number} sec  - calculated from the distance to represent the seconds left
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
			const currentTime = `	<p>Days: ${this.day}</p>
														<p>Hours:  ${this.hour}</p>
														<p>Minutes:  ${this.min}</p>
														<p>Seconds: ${this.sec}</p>`
			return currentTime;
    }
    getDistance(){ this.eventDate - this.now; }
    toString() {
      return `eventDate ${this.eventDate} :: now  ${this.now} :: distance ${this.distance} :: day ${this.day} :: hour ${this.hour} :: min ${this.min} :: sec ${this.sec}`
    }
  };


/*** Fn to instanciate and start the timer obj
 * @param {Obj} timerValues - this is the obj with the timer data provided by startTimer
 */
function readyTimer(timerValues)
{
    const x = setInterval(() => {
        // instanciate an EventTimer and inject the values from the user input
        let timer = new EventTimer(`${timerValues.day} ${timerValues.month} ${timerValues.year} ${timerValues.hr}:${timerValues.min}:${timerValues.sec}`)
				let output = document.getElementById('timerOutput');
				console.log(timer.checkTime())  // run the check time method to spit out a timestamp
				output.innerHTML = timer.checkTime();
        // check if there is less than a second left on the timer.
        // If so, clear the interval and null out the obj
        if (timer.distance < 1000)
        {
            clearInterval(x)
            timer = null
            return
        }
      }, 1000) // runs every sec (1000ms)
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