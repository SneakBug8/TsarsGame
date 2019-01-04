const baseurl = "/";

var app = new Vue({
    el: "#app",
    data: {
        tsars: [
            {
                id: 0,
                portrait: baseurl + "images/michael.jpg",
                alt: "Michael I",
                subtitle: "Michael I was the first Tsar from Romanov house, elected after the end of Time of Troubles. Rulership: 26 July 1613 - 12 July 1645"
            },
            {
                id: 1,
                portrait: baseurl + "images/300.png",
                alt: "None",
                subtitle: "None"
            }
        ],
        seconds: 0,
        tsardata: null,
        answers: [0,1],
    },
    methods: {
        onclick: function(id) {
            if (id == this.answers[0]) {
                this.answers = _.drop(this.answers);
                this.tsardata = _.filter(this.tsars, (tsar) => tsar.id == id)[0].subtitle;
                this.tsars = _.filter(this.tsars, (tsar) => tsar.id != id);
            }
            else {
                const wrongstrings = ["No, you're wrong", "That's not right"];
                this.tsardata = wrongstrings[Math.floor(Math.random() * wrongstrings.length)];
            }

            if (!this.answers.length) {
                clearInterval(timer);
            }
        }
    },
    computed: {
        time: function() {
            let time = this.seconds;
            let res = "";
            if (time > 60 * 60) {
                res += Math.floor(time / (60 * 60)) + "h ";
                time = time % (60 * 60);
            }
            if (time > 60) {
                res += Math.floor(time / 60) + "m ";
                time = time % 60;
            }
            res += time + "s";
            return res;
        }
    }
})

var timer = setInterval(() => {
    app.seconds += 1
}, 1000);