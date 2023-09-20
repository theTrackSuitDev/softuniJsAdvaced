function constructionCrew(worker) {
    let workerObject = {...worker};

    if (workerObject.dizziness === true) {
        workerObject.levelOfHydrated += workerObject.weight / 10 * workerObject.experience;
        workerObject.dizziness = false;
    }

    return workerObject;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));