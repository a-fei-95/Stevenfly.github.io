(function() {
    var app = angular.module('albums', []);

    app.controller('AlbumsController', function() {
        this.travels = travels;
        this.sketches = sketches;
    });

    var travels = [{
        title: "Hong Kong Overlook",
        time: "August, 2015",
        location: "Sky100, Hong Kong, China",
        image: "photos/hong_kong_1.jpg",
        alter: "hong_kong_overlook"
    }, {
        title: "Mirror",
        time: "August, 2015",
        location: "Chinese University of Hong Kong, Hong Kong, China",
        image: "photos/hong_kong_2.jpg",
        alter: "mirror"
    }, {
        title: "Lotus",
        time: "July, 2015",
        location: "West Lake, Hangzhou, China",
        image: "photos/he_hua.jpg",
        alter: "lotus"
    }, {
        title: "Sanfang Qixiang",
        time: "July, 2015",
        location: "Sanfang Qixiang, Fuzhou, China",
        image: "photos/fu_zhou.jpg",
        alter: "sanfang_qixiang"
    }, {
        title: "Mickey",
        time: "December, 2015",
        location: "Disneyland, Orlando, USA",
        image: "photos/orlando.jpg",
        alter: "mickey"
    }, {
        title: "Sunrise",
        time: "December, 2015",
        location: "Miami Beach, Miami, USA",
        image: "photos/miami.jpg",
        alter: "sunrise"
    }];

    var sketches = [{
        title: "Helicarrier",
        time: "August, 2013",
        description: "Facsimile from the movie The Avengers.",
        image: "sketch_book/helicarrier.jpg",
        alter: "helicarrier"
    }, {
        title: "Space City",
        time: "June, 2012",
        description: "Creation based on the book series The Three-Body Problem.",
        image: "sketch_book/spaceCity.jpg",
        alter: "space_city"
    }, {
        title: "Space Elevator",
        time: "January, 2013",
        description: "Creation based on the book series The Three-Body Problem.",
        image: "sketch_book/spceEle.jpg",
        alter: "space_elevator"
    }, {
        title: "Optimus Prime",
        time: "October, 2014",
        description: "Facsimile from fan-made graphics.",
        image: "sketch_book/optPrime.jpg",
        alter: "optimus prime"
    }];

})();
