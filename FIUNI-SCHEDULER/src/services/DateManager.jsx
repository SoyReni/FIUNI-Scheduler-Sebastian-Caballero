import React from "react";

const getMonthString = (month) => {
    let retmonth = "N/A"
    let retsMonth = "N/A"
    switch (month){
        case 0:
            retmonth = "Enero"
            retsMonth = "Ene"
            break;
        case 1:
            retmonth = "Febrero"
            retsMonth = "Feb"
            break;
        case 2:
            retmonth = "Marzo"
            retsMonth = "Mar"
            break;
        case 3:
            retmonth = "Abril"
            retsMonth = "Abr"
            break;
        case 4:
            retmonth = "Mayo"
            retsMonth = "May"
            break;
        case 5:
            retmonth = "Junio"
            retsMonth = "Jun"
            break;
        case 6:
            retmonth = "Julio"
            retsMonth = "Jul"
            break;
        case 7: 
            retmonth = "Agosto"
            retsMonth = "Ago"
            break;
        case 8:
            retmonth = "Septiembre"
            retsMonth = "Sep"
            break;
        case 9:
            retmonth = "Octubre"
            retsMonth = "Oct"
            break;
        case 10:
            retmonth = "Noviembre"
            retsMonth = "Nov"
            break;
        case 11: 
            retmonth = "Diciembre"
            retsMonth = "Dic"
            break; 
        default:
            retmonth = "N/A"
            retsMonth = "N/A"
            break;                                           
    }
    return ({
        month: retmonth,
        sMonth: retsMonth
    })
}

const getDayString = (day) => {
    let retDay = "N/A"
    let retSday = "N/A"
    switch(day){
        case 0:
            retDay = "Lunes"
            retSday = "Lun"
            break;
        case 1:
            retDay = "Martes"
            retSday = "Mar"
            break;
        case 2:
            retDay = "Miercoles"
            retSday = "Mie"
            break;
        case 3:
            retDay = "Jueves"
            retSday = "Jue"
            break;
        case 4:
            retDay = "Viernes"
            retSday = "Vie"
            break;
        case 5:
            retDay = "Sabado"
            retSday = "Sab"
            break;
        case 6:
            retDay = "Domingo"
            retSday = "Dom"
            break;            
    }
    return ({
        day: retDay,
        sDay: retSday
    })
}

const GetDateData = (date) => {
    let newDate = new Date()
    if(date) newDate = new Date(date)
    
    let monthStrings = getMonthString(newDate.getMonth())
    let monthNumber = newDate.getMonth()+1
    let month = monthStrings.month;
    let sMonth = monthStrings.sMonth;
    let dayString = getDayString(newDate.getDay())
    let day = dayString.day;
    let sDay = dayString.sDay;
    let year = newDate.getFullYear();
    let monthDay = newDate.getDate();
    

    return {
        day: day,
        sDay: sDay,
        month: month,
        monthNumber: monthNumber,
        sMonth: sMonth,
        year: year,
        date: monthDay,
        niceDate: `${monthDay}-${sMonth}-${year}`,
        longDate: `${monthDay}-${sMonth}-${year}`
    }
}

export {GetDateData}