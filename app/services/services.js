var getTogetherServicesModule = angular.module('searchAppServicesModule', ['elasticsearch']);

getTogetherServicesModule.factory('esClient', function(esFactory) {
    return esFactory({
        apiVersion: '2.1',
        host: window.location.hostname + ":9200",
        log: ['trace']
        //sniffOnStart: true,
        //sniffInterval: false //300000
    });
});