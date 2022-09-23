const weekday = ["sunday", "monday", "wednesday", "thursday", "friday", "saturday"]
const day = new Date()
const currentDay = day.getDay()
const hour = day.getHours()
const minutes = day.getMinutes()
const sec = day.getSeconds()

var meridian = ""

if (hour >= 12) {
    meridian = "PM"
} else{
    meridian = "AM"
}

 console.log("Today is:", weekday[currentDay])



 console.log("Current time is:", hour, meridian, minutes, ":", sec)