export default function(include = '', exclude = '') {
    return [...include.split(',').map(t => {
        return {name: t, include: true, input: ''};
    }), ...exclude.split(',').map(t => {
        return {name: t, include: false, input: ''};
    })].filter(t => t.name);
}
