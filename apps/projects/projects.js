(function() {
    var app = angular.module('codeProjects', []);

    app.controller('ProjectsController', function () {
        this.androidApps = apps;
        this.websites = webs;
    });

    var apps = [{
        title: "TicTacToe",
        time: "2014",
        description: "An Android Game majorly made with Java and Android SDK(Eclipse at beginning, then transferred to Android Studio). Supporting simple AI playing tic-tac-toe game with the player. Full Contribution.",
        image: "projects/promoGraphic.png",
        alter: "tictactoe",
        extra: true,
        extra_image: "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png",
        extra_link: "https://play.google.com/store/apps/details?id=flystudio.tictactoe&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    }]


    var webs = [{
        title: "www.yufeiyang.me",
        time: "2016",
        description: "A personal portfolio website. Built by myself using HTML5, CSS, JavaScript, AngularJS, Bootstrap, Semantic UI, jQuery, etc. Full Contribution.",
        image: "projects/personWeb.png",
        alter: "personWeb",
        link: "http://www.yufeiyang.me",
        source: true,
        source_link: "https://github.com/Stevenfly/Stevenfly.github.io"
    }, {
        title: "tuttee.ca",
        time: "2016",
        description: "A tutor website made by a group of students in University of Waterloo. Using front and back ends frameworks including Angular 2, etc. I am involved majorly in the UI and front-end contributions.",
        image: "projects/tuttee_preview.png",
        alter: "tuttee",
        link: "http://tuttee.ca",
        source: false,
        source_link: ""
    }]
})();