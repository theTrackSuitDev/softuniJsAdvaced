function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMPerSec = speed / 3.6;
    let timeInSec = distance / speedMPerSec + Math.floor(distance / 500) * 60;
    let hours = Math.floor(timeInSec / 3600);
    let mins = Math.floor((timeInSec - hours * 3600) / 60);
    let secs = Math.round(timeInSec - hours * 3600 - mins * 60);

    console.log(
        `${hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}:${mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}:${secs.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        })}`
    );
}
timeToWalk(2564, 0.70, 5.5);
