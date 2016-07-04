(function() {
    var app = angular.module('photoGallery', []);

    app.controller('GalleryController', function() {
        this.travels = tras;
        this.schools = schs;
    });

    var tras = [{
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

    var schs = [];
})();
