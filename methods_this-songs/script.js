var song = {
    name: "Brothers in Arms",
    artist: "Dire Straits",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        if (!this.playing) {
            this.playing = true;
            console.log("Now playing " +
                this.name + " performed by " +
                this.artist + ".");
        }
    },
    pause: function() {
        if (this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();