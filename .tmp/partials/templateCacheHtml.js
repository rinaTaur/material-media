angular.module("materialMedia").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div layout=\"vertical\" layout-fill=\"\"><md-content><header ng-include=\"\'components/navbar/navbar.html\'\"></header><section class=\"videogular-container\"><videogular vg-theme=\"config.theme.url\"><vg-media vg-src=\"config.sources\" vg-tracks=\"config.tracks\" vg-native-controls=\"true\"></vg-media></videogular></section><div class=\"techs md-content\" layout-align=\"center\"><md-card ng-repeat=\"awesomeThing in awesomeThings | orderBy:\'rank\'\"><md-card-content><img class=\"pull-right\" ng-src=\"assets/images/{{awesomeThing.logo}}\" alt=\"{{awesomeThing.title}}\"><div class=\"caption\"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href=\"{{awesomeThing.url}}\">{{awesomeThing.url}}</a></p></div></md-card-content></md-card></div><footer><md-toolbar layout=\"row\" layout-align=\"center center\"><p>With ♥ from <a href=\"https://twitter.com/Swiip\">@Swiip</a></p></md-toolbar></footer></md-content></div>");
$templateCache.put("components/navbar/navbar.html","<md-toolbar layout=\"row\" layout-align=\"center center\" ng-controller=\"NavbarCtrl\"><md-button href=\"https://github.com/Swiip/generator-gulp-angular\">C|S Dev Challenge</md-button><section flex=\"\" layout=\"row\" layout-align=\"left center\"><md-button href=\"#\" class=\"md-raised\">Home</md-button><md-button href=\"#\" class=\"md-raised\">About</md-button><md-button href=\"#\" class=\"md-raised\">Contact</md-button></section><md-button href=\"#\">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>");}]);