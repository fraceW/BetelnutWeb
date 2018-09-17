require.config({
    baseUrl: '/',
    paths: {
        'angular': '/lib/angular/angular',
        'ui-router': '/lib/angular-ui/angular-ui-router',

        'ctrls': '/js/controller',
        'module': '/js/moduler',
        'page': '/page',

        'index-module': '/js/moduler/index-module'

    },
    shim: {
        'angualr': { exports: 'angualr' },
        'ui-router': { deps: ['angular'] },
        'index-module': ['angular', 'ui-router']
    },
    deps: ['bootstraps.js']
});