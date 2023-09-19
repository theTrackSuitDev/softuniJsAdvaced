function assemblyLine() {
    let resultObject = {

        hasClima(carObject) {
            carObject.temp = 21;
            carObject.tempSettings = 21;
            carObject.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp ++;
                }

                if (this.temp > this.tempSettings) {
                    this.temp --;
                }
            };
        },

        hasAudio(carObject) {
            carObject.currentTrack = null;
            carObject.nowPlaying = function() {
                if (this.currentTrack) {
                    console.log(`${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(carObject) {
            carObject.checkDistance = function(distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        },
    };

    return resultObject;
}

