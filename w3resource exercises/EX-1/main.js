const weekday = ["sunday", "monday", "wednesday", "thursday", "friday", "saturday"]

 const day = new Date()
 console.log("Today is:", weekday[day.getDay()])
 console.log("Current time is:", day.getHours(), "PM :", day.getMinutes(), ":", day.getSeconds())