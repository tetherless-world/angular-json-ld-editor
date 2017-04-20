(function (angular) {
    angular.module('sample', ['jsonLdEditor'])
        .controller('Controller', ['$scope', function($scope) {
            $scope.graph = [{
                "@context": "https://tetherless-world.github.io/angular-json-ld-editor/person.jsonld",
                "@id": "http://dbpedia.org/resource/John_Lennon",
                "@type" : ["Person",{"@id" : "foaf:Person"}],
                "name": "John Lennon",
                "born": { "@value" : "1940-10-09", "@type":"xsd:dateTime"},
                "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
            }];
        }]);
})(angular);
