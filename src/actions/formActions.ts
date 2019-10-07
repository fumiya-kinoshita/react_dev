
export function setPeriod(period: string) {
    return {
        type: "SET_PERIOD",
        payload: period
    }
}

export function setSubject(subject: string) {
    return {
        type: "SET_SUBJECT",
        payload: subject
    }
}

export function setWeekday(weekday: string) {
    return {
        type: "SET_WEEKDAY",
        payload: weekday
    }
}