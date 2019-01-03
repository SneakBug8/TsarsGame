var app = new Vue({
    el: "#app",
    data: {
        tsars: [
            {
                id: 0,
                portrait: "https://ck2.paradoxwikis.com/images/b/b0/Map_kingdoms.PNG",
            },
            {
                id: 1,
                portrait: "https://ck2.paradoxwikis.com/images/b/b0/Map_kingdoms.PNG",
            }
        ],
        time: 0,
        tsardata: null,
    },
    methods: {
        onclick: function(id) {
            alert(id);
        }
    }
})

setInterval(() => {
    app.time += 1
}, 1000);