(function() {
    var app = angular.module('codeProjects', []);

    app.controller('ProjectsController', function () {
        this.androidApps = apps;
        this.websites = webs;
        this.schools = schs;
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
    }, {
        title: "UW HUB",
        time: "2017",
        description: "Using University of Waterloo’s API to display and organize useful information to students. The Goal is to gather information in a hub instead of looking for links online individually.",
        image: "../../assets/placeholder.jpg",
        alter: "uw_hub",
        extra: false
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
        source: false
    }, {
        title: "UW Grade",
        time: "2017",
        description: "I have been summarizing my own grades in a self-designed chart to keep track of my academic performances & course planning. I realize I could share this scheme (tailored to my school) to other students.",
        image: "../../assets/placeholder.jpg",
        alter: "uw_grade",
        source: false
    }]


    var schs = [{
        title: "Watopoly",
        time: "2016",
        description: "This was a school project with team of three. The object was to achieve a full monopoly experiences writing in C++++ and displaying board on Terminal.. Each move is written as a command with options.",
        image: "../../assets/placeholder.jpg",
        alter: "watopoly",
        source: false
    }]
})();