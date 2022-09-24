for (year = 2014; year <= 2050; year++){
    var day = new Date(year, 0, 1)
    if (day.getDay() === 0) {
        console.log(`first sunday on Jan 1st between 2014 and 2050: ${year}`)
        break
    }
}