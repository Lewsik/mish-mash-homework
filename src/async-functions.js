function giveItBackLater(value, callback) {
    setTimeout(() => {
        callback(value)
    }, 600);
}

function promiseToGiveItBackLater(value) {
    return new Promise(resolve => {
        giveItBackLater(value, resolve)
    })
}

function addSomePromises(somePromise) {
    return somePromise.then(
        (value) => {
            if (typeof value === 'string') {
                return value + value
            }
        },
        (rejectedValue) => {
            if (typeof rejectedValue === 'string') {
                return rejectedValue + rejectedValue + rejectedValue
            }
        }
    )
}

module.exports = {giveItBackLater,
                  addSomePromises,
                  promiseToGiveItBackLater}