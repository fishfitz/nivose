module.exports = function(...args) {
    return args.map(arr => {
        if (typeof arr === 'string') {
            const parsedArray = JSON.parse(arr);
            if (!Array.isArray(parsedArray)) {
                throw new Error('One argument is not a valid array.');
            }
            return parsedArray;
        }
        else if (Array.isArray(arr)) {
            return arr;
        }
        else {
            throw new Error('One argument is not a valid array.');
        }
    });
};
