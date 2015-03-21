'use strict';

angular.module('materialMedia')
    .controller('MainCtrl', function($scope, $mdDialog, $sce) {
        $scope.config = {
            preload: "none",
            sources: [{
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),
                type: "video/mp4"
            }, {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
                type: "video/webm"
            }, {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
                type: "video/ogg"
            }],
            tracks: [{
                src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }],
            theme: {
                url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
            }
        };
        var alert;
        $scope.showDialog = function($event) {
            alert = $mdDialog.alert({
                title: 'Attention',
                content: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });

            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        }
        $scope.awesomeThings = [{
            'title': 'AngularJS',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'angular.png'
        }, {
            'title': 'BrowserSync',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'browsersync.png'
        }, {
            'title': 'GulpJS',
            'url': 'http://gulpjs.com/',
            'description': 'The streaming build system.',
            'logo': 'gulp.png'
        }, {
            'title': 'Jasmine',
            'url': 'http://jasmine.github.io/',
            'description': 'Behavior-Driven JavaScript.',
            'logo': 'jasmine.png'
        }, {
            'title': 'Karma',
            'url': 'http://karma-runner.github.io/',
            'description': 'Spectacular Test Runner for JavaScript.',
            'logo': 'karma.png'
        }, {
            'title': 'Protractor',
            'url': 'https://github.com/angular/protractor',
            'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
            'logo': 'protractor.png'
        }, {
            'title': 'Angular Material Design',
            'url': 'https://material.angularjs.org/#/',
            'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
            'logo': 'angular-material.png'
        }];
        angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });


    });
