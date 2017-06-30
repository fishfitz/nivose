export default function(router, store) {
    if (typeof window !== 'undefined') {
        router.beforeResolve((to, from, next) => {
            const matched = router.getMatchedComponents(to);
            const prevMatched = router.getMatchedComponents(from);
            let diffed = false;
            const activated = matched.filter((c, i) => {
                return diffed || (diffed = (prevMatched[i] !== c));
            });
            const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
            if (!asyncDataHooks.length) {
                return next();
            }

            Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
                .then(next)
                .catch(next);
        });
    }
}
