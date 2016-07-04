(function() {
    var app = angular.module('sketchBook', []);

    app.controller('BookController', function() {
        this.scifictions = scifis;
    });

    var scifis = [{
        title: "Helicarrier",
        time: "August, 2013",
        description: "Facsimile from the movie The Avengers.",
        image: "sketch-book/helicarrier.jpg",
        alter: "helicarrier"
    }, {
        title: "Space City",
        time: "June, 2012",
        description: "Creation based on the book series The Three-Body Problem.",
        image: "sketch-book/spaceCity.jpg",
        alter: "space_city"
    }, {
        title: "Space Elevator",
        time: "January, 2013",
        description: "Creation based on the book series The Three-Body Problem.",
        image: "sketch-book/spceEle.jpg",
        alter: "space_elevator"
    }, {
        title: "Optimus Prime",
        time: "October, 2014",
        description: "Facsimile from fan-made graphics.",
        image: "sketch-book/optPrime.jpg",
        alter: "optimus prime"
    }];
})();
