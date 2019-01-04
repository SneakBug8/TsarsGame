var app = new Vue({
    el: "#app",
    data: {
        tsars: [
            {
                id: 0,
                portrait: "https://via.placeholder.com/300",
            },
            {
                id: 1,
                portrait: "https://via.placeholder.com/400",
            }
        ],
        seconds: 0,
        tsardata: null,
        answers: [0,1],
        subtitles: ["None", "No"]
    },
    methods: {
        onclick: function(id) {
            if (id == this.answers[0]) {
                this.answers = _.drop(this.answers);
                this.tsars = _.filter(this.tsars, (tsar) => tsar.id != id);
                this.tsardata = this.subtitles[0];
                this.subtitles = _.drop(this.subtitles);
            }
            else {
                const strings = ["No, you're wrong", "DU HAST MICH"];
                this.tsardata = strings[Math.floor(Math.random() * strings.length)];
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