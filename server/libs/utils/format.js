function format(item, overwrite) {
    if (item.toObject) {
        item = item.toObject();
    }

    return {
        ...item,
        __v: undefined,
        ...overwrite
    };
}

module.exports = function(item, overwrite) {
    if (Array.isArray(item)) {
        return item.map(i => format(i, overwrite));
    }
    return format(item, overwrite);
};
