
function groupAdultsByAgeRange(people) {
    const adults = people.filter(person => person.age >= 18)
    const youngerThanTwenty = adults.filter(adult => adult.age <= 20)
    const result = {}
    if (youngerThanTwenty.length > 0) {
        result['20 and younger'] = youngerThanTwenty
    }
    const youngerThanThirty = adults.filter(adult => adult.age > 20
                              && adult.age <= 30)
    if (youngerThanThirty.length > 0) {
        result['21-30'] = youngerThanThirty
    }
    const youngerThanForty = adults.filter(adult => adult.age > 30
                              && adult.age <= 40)
    if (youngerThanForty.length > 0) {
        result[`31-40`] = youngerThanForty
    }
    const youngerThanFifty = adults.filter(adult => adult.age > 40
                              && adult.age <= 50)
    if (youngerThanFifty.length > 0) {
        result[`41-50`] = youngerThanFifty
    }
    const olderThanFifty = adults.filter(adult => adult.age > 50)
    if (olderThanFifty.length > 0) {
        result[`51 and older`] = olderThanFifty
    }

    return result
}

module.exports = {groupAdultsByAgeRange}