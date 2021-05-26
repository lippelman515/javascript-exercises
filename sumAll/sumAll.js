const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let accumulator = 0;
    for (let i = start; i <= end; i++) {
        accumulator += i;
    }
    return accumulator;
};

module.exports = sumAll;
