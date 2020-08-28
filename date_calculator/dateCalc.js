const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = [['January',31],['February',28],['March',31],['April',30],['May',31],['June',30],['July',31],['August',31],['September',30],['October',31],['November',30],['December',31]];

//days shown in the calendar
let days = document.querySelectorAll('[data-day]');

//inputs at top of calculator
let fromDateInput = document.getElementById('from-date-input');
let toDateInput = document.getElementById('to-date-input');

//shows curren year and month on calendar
let monthDsply = document.getElementById('month-dsply');
let yearDsply = document.getElementById('year-dsply');

//the base dates that will be used to track the calendars
let fromDate = new Date();
let toDate = new Date();

//entire calendar DIV
let calendarDiv = document.getElementById('calendar');

//prev and next month buttons
let prev = document.getElementById('prev-month');
let next = document.getElementById('next-month');

// function to check if a year is a leap year
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

//setting default dates to current date
fromDateInput.innerText = months[fromDate.getMonth()][0] + ' ' + fromDate.getDate() + ', ' + fromDate.getFullYear();
toDateInput.innerText = months[toDate.getMonth()][0] + ' ' + toDate.getDate() + ', ' + toDate.getFullYear();

class Calendar{

    createMonth(displayedYear, displayedMonth){

        for(let z = 0; z < days.length; z++){
            days[z].style.color = 'white';
        }
        //finding index of current month 0 = jan, 11 = dec
        let monthIndex = 0;
        for(let x = 0; x < months.length; x++){
            //CHANGED THIS!!@$@#$ ADDED [0]
            if(months[x][0] != displayedMonth){
                monthIndex++;
            }
            else{
                break;
            }
        }
        
        //finding first day of month 'sunday, monday, etc...'
        // 0 = sun, 6 = sat
        let d = new Date(displayedYear,monthIndex,1);
        let dayIndex = d.getDay();
    
        //filling the days of prev month into the calendar
        let prevMonthDay;
        if(dayIndex != 0){
            //if month = january
            if(monthIndex == 0){
                prevMonthDay = 31;
                for(let z = dayIndex - 1; z >= 0; z--){
                    days[z].innerText = prevMonthDay;
                    days[z].style.color = 'lightslategray';
                    prevMonthDay--;
                }
            }
            else{
                //if prev month has < 31 days
                if(months[monthIndex - 1][1] < 31){
                    //if prev month is feb and is leap year
                    if(monthIndex - 1 == 1 && leapYear(displayedYear) == true){
                        prevMonthDay = 29;
                        for(let z = dayIndex - 1; z >= 0; z--){
                            days[z].innerText = prevMonthDay;
                            days[z].style.color = 'lightslategray';
                            prevMonthDay--;
                        }
                    }
                    //if prev month is feb ans NOT leap year
                    else if(monthIndex - 1 == 1 && leapYear(displayedYear) == false){
                        prevMonthDay = 28;
                        for(let z = dayIndex - 1; z >= 0; z--){
                            days[z].innerText = prevMonthDay;
                            days[z].style.color = 'lightslategray';
                            prevMonthDay--;
                        }
                    }
                    //otherwise prev month has 30 days
                    else{
                        prevMonthDay = 30;
                        for(let z = dayIndex - 1; z >= 0; z--){
                            days[z].innerText = prevMonthDay;
                            days[z].style.color = 'lightslategray';
                            prevMonthDay--;
                        }
                    }
                }
                //if prev month has 31 days
                if(months[monthIndex - 1][1] == 31){
                    prevMonthDay = 31;
                    for(let z = dayIndex - 1; z >= 0; z--){
                        days[z].innerText = prevMonthDay;
                        days[z].style.color = 'lightslategray';              
                        prevMonthDay--;
                    }
                }
            }
        }
    
        
        //checking if month is Feb and its a leap year
        if(monthIndex == 1 && leapYear(displayedYear) == true){
            months[1][1] = 29;
        }
        else{
            months[1][1] = 28;
        }
    
        //filling calendar with days of current month starting from first day of month
        for(let y = 1; y <= months[monthIndex][1]; y++){
            days[dayIndex].innerText = y;
            dayIndex++;
        }
    
        //filling the days of next month
        if(dayIndex < 42){
            let nextMonthDay = 1;
            for(let z = dayIndex; z < days.length; z++){
                days[z].innerText = nextMonthDay;
                days[z].style.color = 'lightslategray';
                nextMonthDay++;
            }
        }
        
    
        //resetting stuff
        monthIndex = 0;
        dayIndex = 0;
        months[1][1] = 28;
    }
}



//opens the FROM calendar
let fromCalendar = new Calendar();
fromDateInput.addEventListener('click', () => {
    if(calendarDiv.style.display == 'none'){
        calendarDiv.style.display = 'inline-block';
        calendarDiv.className = 'from';
        fromCalendar.createMonth(fromDate.getFullYear(),months[fromDate.getMonth()][0]);
        monthDsply.innerText = months[fromDate.getMonth()][0];
        yearDsply.innerText = fromDate.getFullYear();
    }
    else{
        calendarDiv.style.display = 'none';
        calendarDiv.className = '';
    }
    document.getElementById('month-list').style.display = 'none';
    yearDsply.style.display = 'inline-block';
    yearInput.style.display = 'none';
    yearInput.value = '';
})

//opens the TO calendar
let toCalendar = new Calendar();
toDateInput.addEventListener('click', () => {
    if(calendarDiv.style.display == 'none'){
        calendarDiv.style.display = 'inline-block';
        calendarDiv.className = 'to';
        toCalendar.createMonth(toDate.getFullYear(),months[toDate.getMonth()][0]);
        monthDsply.innerText = months[toDate.getMonth()][0];
        yearDsply.innerText = toDate.getFullYear();
    }
    else{
        calendarDiv.style.display = 'none';
        calendarDiv.className = '';
    }
    document.getElementById('month-list').style.display = 'none';
    yearDsply.style.display = 'inline-block';
    yearInput.style.display = 'none';
    yearInput.value = '';
})


//calendar goes back one month on click
prev.addEventListener('click', () => {
    if(calendarDiv.className == 'from'){
        fromDate.setMonth(fromDate.getMonth() - 1);
        fromCalendar.createMonth(fromDate.getFullYear(),months[fromDate.getMonth()][0]);
        monthDsply.innerText = months[fromDate.getMonth()][0];
        yearDsply.innerText = fromDate.getFullYear();
    }
    else if(calendarDiv.className == 'to'){
        toDate.setMonth(toDate.getMonth() - 1);
        toCalendar.createMonth(toDate.getFullYear(),months[toDate.getMonth()][0]);
        monthDsply.innerText = months[toDate.getMonth()][0];
        yearDsply.innerText = toDate.getFullYear();
    }
    yearDsply.style.display = 'inline-block';
    yearInput.style.display = 'none';
    yearInput.value = '';
})
//calendar goes forward one month on click
next.addEventListener('click', () => {
    if(calendarDiv.className == 'from'){
        fromDate.setMonth(fromDate.getMonth() + 1);
        fromCalendar.createMonth(fromDate.getFullYear(),months[fromDate.getMonth()][0]);
        monthDsply.innerText = months[fromDate.getMonth()][0];
        yearDsply.innerText = fromDate.getFullYear();
    }
    else if(calendarDiv.className == 'to'){
        toDate.setMonth(toDate.getMonth() + 1);
        toCalendar.createMonth(toDate.getFullYear(),months[toDate.getMonth()][0]);
        monthDsply.innerText = months[toDate.getMonth()][0];
        yearDsply.innerText = toDate.getFullYear();
    }
    yearDsply.style.display = 'inline-block';
    yearInput.style.display = 'none';
    yearInput.value = '';
})

//when a day on the calendar is clicked to from or to date is changed accordingly
days.forEach(button => {
    button.addEventListener('click', () => {
        if(calendarDiv.className == 'from'){
            if(button.style.color != 'lightslategray'){
                fromDate.setDate(button.innerText);
                let mIndex = 0;
                for(x = 0; x < months.length; x++){
                    if(monthDsply.innerText != months[x][0]){
                        mIndex++;
                    }
                    else{
                        break;
                    }
                }
                fromDate.setMonth(mIndex);
                fromDate.setFullYear(yearDsply.innerText);
                fromDateInput.innerText = months[fromDate.getMonth()][0] + ' ' + fromDate.getDate() + ', ' + fromDate.getFullYear();
                calendarDiv.style.display = 'none';
                calendarDiv.className = '';
                let tempDiff = dateDiff(fromDate, toDate);
                dateDifference.innerText = '';
                if(tempDiff.years == 1){
                    dateDifference.innerText += ' ' + tempDiff.years + ' year ';
                }
                else if(tempDiff.years > 1){
                    dateDifference.innerText += ' ' + tempDiff.years + ' years ';
                }
                if(tempDiff.months == 1){
                    dateDifference.innerText += ' ' + tempDiff.months + ' month ';
                }
                else if(tempDiff.months > 1){
                    dateDifference.innerText += ' ' + tempDiff.months + ' months ';
                }
                if(tempDiff.days == 1){
                    dateDifference.innerText += ' ' + tempDiff.days + ' day';
                }
                else if(tempDiff.days > 1){
                    dateDifference.innerText += ' ' + tempDiff.days + ' days';
                }
                
            }
        }
        else if(calendarDiv.className == 'to'){
            if(button.style.color != 'lightslategray'){
                toDate.setDate(button.innerText);
                let mIndex = 0;
                for(x = 0; x < months.length; x++){
                    if(monthDsply.innerText != months[x][0]){
                        mIndex++;
                    }
                    else{
                        break;
                    }
                }
                toDate.setMonth(mIndex);
                toDate.setFullYear(yearDsply.innerText);
                toDateInput.innerText = months[toDate.getMonth()][0] + ' ' + toDate.getDate() + ', ' + toDate.getFullYear();
                calendarDiv.style.display = 'none';
                calendarDiv.className = '';
                let tempDiff = dateDiff(fromDate, toDate);
                dateDifference.innerText = '';
                if(tempDiff.years == 0 && tempDiff.months == 0 && tempDiff.days == 0){
                    dateDifference.innerText = 'Same Date';
                }
                if(tempDiff.years == 1){
                    dateDifference.innerText += ' ' + tempDiff.years + ' year ';
                }
                else if(tempDiff.years > 1){
                    dateDifference.innerText += ' ' + tempDiff.years + ' years ';
                }
                if(tempDiff.months == 1){
                    dateDifference.innerText += ' ' + tempDiff.months + ' month ';
                }
                else if(tempDiff.months > 1){
                    dateDifference.innerText += ' ' + tempDiff.months + ' months ';
                }
                if(tempDiff.days == 1){
                    dateDifference.innerText += ' ' + tempDiff.days + ' day';
                }
                else if(tempDiff.days > 1){
                    dateDifference.innerText += ' ' + tempDiff.days + ' days';
                }
            }
        }
    })
})

//opening a menu to manually pick the month to display
monthDsply.addEventListener('click', () => {
    calendarDiv.style.display = 'none';
    document.getElementById('month-list').style.display = 'inline-block';
    yearDsply.style.display = 'inline-block';
    yearInput.style.display = 'none';
    yearInput.value = '';
})

//manually picking the month to display
let pickMonth = document.querySelectorAll('[data-month]');
pickMonth.forEach(button => {
    button.addEventListener('click', () => {
        if(calendarDiv.className == 'from'){
            for(x in months){
                if(button.innerText === months[x][0].substring(0,3)){
                    fromDate.setMonth(x);
                    fromCalendar.createMonth(fromDate.getFullYear(),months[fromDate.getMonth()][0]);
                    monthDsply.innerText = months[fromDate.getMonth()][0];
                    yearDsply.innerText = fromDate.getFullYear();
                    calendarDiv.style.display = 'inline-block';
                    document.getElementById('month-list').style.display = 'none';
                    break;
                }
            }
        }
        else if(calendarDiv.className == 'to'){
            for(x in months){
                if(button.innerText === months[x][0].substring(0,3)){
                    toDate.setMonth(x);
                    toCalendar.createMonth(toDate.getFullYear(),months[toDate.getMonth()][0]);
                    monthDsply.innerText = months[toDate.getMonth()][0];
                    yearDsply.innerText = toDate.getFullYear();
                    calendarDiv.style.display = 'inline-block';
                    document.getElementById('month-list').style.display = 'none';
                    break;
                }
            }
        }
    })
})

//open input box to manually change year
let yearInput = document.getElementById('year-input');
yearDsply.addEventListener('click', () =>{
    if(yearDsply.style.display == 'inline-block'){
        yearDsply.style.display = 'none';
        yearInput.style.display = 'inline-block';
        yearInput.focus();
    }
})

//manually change year on calendar
yearInput.addEventListener('keyup', () => {
    if(calendarDiv.className == 'from'){
        let result = parseInt(yearInput.value);
        let d = new Date();
        if(result >= d.getFullYear() - 100 && result <= d.getFullYear() + 100){
            yearDsply.innerText = result;
            fromDate.setFullYear(result);
            fromCalendar.createMonth(fromDate.getFullYear(), months[fromDate.getMonth()][0]);
            yearDsply.style.display = 'inline-block';
            yearInput.style.display = 'none';
            yearInput.value = '';     
        }
    }
    else if(calendarDiv.className == 'to'){
        let result = parseInt(yearInput.value);
        let d = new Date();
        if(result >= d.getFullYear() - 100 && result <= d.getFullYear() + 100){
            yearDsply.innerText = result;
            toDate.setFullYear(result);
            toCalendar.createMonth(toDate.getFullYear(), months[toDate.getMonth()][0]);
            yearDsply.style.display = 'inline-block';
            yearInput.style.display = 'none';
            yearInput.value = '';         
        }
    }
})


//if a click happens outside year input box it will dissapear
$(document).mouseup(function (e)
{
    let container = $("#year-input");

    if (!container.is(e.target) // if the target of the click isn't the div...
        && container.has(e.target).length === 0) // ... nor a descendant of the div
    {
        container.hide();
        yearDsply.style.display = 'inline-block';
        yearInput.value = '';
    }
});

//if a click happens outside of calendar area it will dissapear
$(document).mouseup(function (e)
{
    let container = $("#calendar");

    if (!container.is(e.target) // if the target of the click isn't the div...
        && container.has(e.target).length === 0) // ... nor a descendant of the div
    {
        container.hide();
    }
});

//if a click happens outside of month-list it dissapears
$(document).mouseup(function (e)
{
    let container = $("#month-list");

    if (!container.is(e.target) // if the target of the click isn't the div...
        && container.has(e.target).length === 0) // ... nor a descendant of the div
    {
        calendarDiv.style.display == 'inline-block';
        container.hide();
    }
});

//function to calc differnce between both dates. only called when a day on the calendar is clicked
let dateDifference = document.getElementById('difference-output');
function dateDiff(dt1, dt2){
    /*
     * setup 'empty' return object
     */
    //let ret = {days:0, months:0, years:0};
    let ret = {years:0, months:0, days:0};
    /*
     * If the dates are equal, return the 'empty' object
     */
    if (dt1 == dt2) return ret;

    /*
     * ensure dt2 > dt1
     */
    if (dt1 > dt2)
    {
        let dtmp = dt2;
        dt2 = dt1;
        dt1 = dtmp;
    }

    /*
     * First get the number of full years
     */

    let year1 = dt1.getFullYear();
    let year2 = dt2.getFullYear();

    let month1 = dt1.getMonth();
    let month2 = dt2.getMonth();

    let day1 = dt1.getDate();
    let day2 = dt2.getDate();

    /*
     * Set initial values bearing in mind the months or days may be negative
     */

    ret['years'] = year2 - year1;
    ret['months'] = month2 - month1;
    ret['days'] = day2 - day1;

    /*
     * Now we deal with the negatives
     */

    /*
     * First if the day difference is negative
     * eg dt2 = 13 oct, dt1 = 25 sept
     */
    if (ret['days'] < 0)
    {
        /*
         * Use temporary dates to get the number of days remaining in the month
         */
        let dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

        let numDays = dtmp1.getDate();

        ret['months'] -= 1;
        ret['days'] += numDays;

    }

    /*
     * Now if the month difference is negative
     */
    if (ret['months'] < 0)
    {
        ret['months'] += 12;
        ret['years'] -= 1;
    }

    return ret;
}

let weekNames = document.querySelectorAll('[data-weekName]');
weekNames.forEach(button => {
    button.style.fontSize = '18px'
})