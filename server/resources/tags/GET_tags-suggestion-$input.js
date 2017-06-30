const keystone = require('keystone');

module.exports = async function({input}) {
    const startWithInput = new RegExp('^' + input.toLowerCase());
    const suggestedTags = await keystone.findTags([startWithInput]);
    return suggestedTags.map(t => {
        if (startWithInput.test(t.name)) {
            return { name: t.name, color: t.color };
        }
        else {
            let relevantSynonym;
            t.synonyms.some(s => {
                if (startWithInput.test(s)) {
                    relevantSynonym = s;
                    return true;
                }
                return false;
            });
            return { name: t.name, color: t.color, synonym: relevantSynonym };
        }
    });
};
