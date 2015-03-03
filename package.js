Package.describe({
    name: 'thebakery:mobile-map',
    summary: 'Native mobile maps',
    version: '0.0.1'
});

Cordova.depends({
    'plugin.google.maps': '1.2.4'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use(['reactive-var','templating','tracker', 'underscore'], 'client');
    api.addFiles(['api.js'], 'client');
    api.addFiles(['map.html','map.js'],'client');

    api.export('MapControl');
});