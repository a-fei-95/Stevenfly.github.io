(function() {
    var app = angular.module('designBoard', []);

    app.controller('BoardController', function () {
        this.promotions = pros;
        this.facebooks = facs;
        this.posters = poss;
        this.magazines = mags;
        this.tshirts = tshs;
    });


    var pros = [{
        title: "Ambassador Application",
        time: "October, 2014",
        description: "FCSS-FESC(former OOSS) Ambassador Application promotion.",
        image: "products/promo_amb.png",
        alter: "ambassador_application"
    }, {
        title: "Initiate Affiliate",
        time: "January, 2015",
        description: "FCSS-FESC(former OOSS) Initiate Affiliate program promotion.",
        image: "products/promo_initiate.png",
        alter: "initiate_affiliate"
    }, {
        title: "Facebook Graphic",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) Facebook Page 1200 likes promotion.",
        image: "products/promo_1200.png",
        alter: "facebook_graphic"
    }]


    var facs = [{
        title: "Ambassador Application",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) Ambassador Application Facebook group background.",
        image: "products/group_amb.png",
        alter: "ambassador_application"
    }, {
        title: "Initiate Affiliate",
        time: "January, 2015",
        description: "FCSS-FESC(former OOSS) Initiate Affiliate Facebook group background.",
        image: "products/group_initiate.png",
        alter: "initiate_affiliate"
    }, {
        title: "ICE",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) ICE event Facebook group background.",
        image: "products/group_ice.png",
        alter: "ice"
    }, {
        title: "OOSS General",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) General Facebook group background.",
        image: "products/group_general.png",
        alter: "ooss_general"
    }, {
        title: "OOSS Executive",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) Executive Facebook group background.",
        image: "products/group_executive.png",
        alter: "ooss_executive"
    }, {
        title: "OOSS Marketing",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) Marketing Facebook group background.",
        image: "products/group_marketing.png",
        alter: "ooss_marketing"
    }, {
        title: "Peer Mentorship - Art",
        time: "April, 2015",
        description: "FCSS-FESC(former OOSS) Peer Mentorship program art division Facebook group background.",
        image: "products/group_peer_art.png",
        alter: "peer_mentorship_art"
    }, {
        title: "Peer Mentorship - Business",
        time: "April, 2015",
        description: "FCSS-FESC(former OOSS) Peer Mentorship program business division Facebook group background.",
        image: "products/group_peer_bus.png",
        alter: "peer_mentorship_business"
    }, {
        title: "Peer Mentorship - Science",
        time: "April, 2015",
        description: "FCSS-FESC(former OOSS) Peer Mentorship program science division Facebook group background.",
        image: "products/group_peer_sci.png",
        alter: "peer_mentorship_science"
    }, {
        title: "Show Your Style",
        time: "October, 2014",
        description: "World Division Music Event.",
        image: "products/group_world_vision.png",
        alter: "show_your_style"
    }]


    var poss = [{
        title: "ICE",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) ICE event poster.",
        image: "products/poster_ice.png",
        alter: "ice"
    }, {
        title: "Opportunities Fair",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) Opportunities Fair event poster.",
        image: "products/poster_opp_fair.png",
        alter: "opportunities_fair"
    }]


    var mags = [{
        title: "Miss America",
        time: "January, 2014",
        description: "Abbey Park High School Magazine.",
        image: "products/mgzn_miss_ame.png",
        alter: "miss_america"
    }, {
        title: "Super Bowl 2013",
        time: "January, 2014",
        description: "Abbey Park High School Magazine.",
        image: "products/mgzn_super_bowl.png",
        alter: "super_bowl_2013"
    }, {
        title: "Franken Food",
        time: "April, 2015",
        description: "Abbey Park High School Magazine.",
        image: "products/mgzn_food.png",
        alter: "franken_food"
    }, {
        title: "Anti-Social Networking",
        time: "Feburary, 2015",
        description: "Abbey Park High School Magazine.",
        image: "products/mgzn_anti.png",
        alter: "anti_social_networking"
    }]


    var tshs = [{
        title: "ICE",
        time: "March, 2015",
        description: "FCSS-FESC(former OOSS) ICE event T-shirt Design.",
        image: "products/t_ice.png",
        alter: "ice"
    }]
})();