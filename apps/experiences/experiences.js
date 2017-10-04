(function() {
    var app = angular.module('workExperiences', []);

    app.controller('ExperiencesController', function () {
        this.weathers = twns;
        this.tdlabs = tds;
    });

    var twns = [{
        title: "Broadcast Room",
        time: "2017 Summer",
        image: "weather_network/twn_broadcast.jpg",
        alter: "broadcast"
    }, {
        title: "Sales Tiger",
        time: "2017 Summer",
        image: "weather_network/twn_tiger.jpg",
        alter: "tiger"
    }, {
        title: "Wall of Values",
        time: "2017 Summer",
        image: "weather_network/twn_wall.jpg",
        alter: "wall"
    }]


    var tds = [{
        title: "Group Photo",
        time: "2016 Fall",
        image: "td_lab/td_group_photo.jpg",
        alter: "group"
    }, {
        title: "Cotton Candy in Office",
        time: "2016 Fall",
        image: "td_lab/td_cotton_candy.jpg",
        alter: "cotton_candy"
    }, {
        title: "New Macs!!!",
        time: "2016 Fall",
        image: "td_lab/td_new_macs.jpg",
        alter: "new_mac"
    }]
})();