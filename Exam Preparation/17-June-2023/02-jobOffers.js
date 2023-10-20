class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates = []) {
        let added = [];
        candidates.forEach((person) => {
            let [name, education, yearsExperience] = person.split("-");
            yearsExperience = Number(yearsExperience);

            let personIndex = this.jobCandidates.findIndex(
                (el) => el.name === name
            );

            if (personIndex != -1) {
                if (
                    yearsExperience >
                    this.jobCandidates[personIndex].yearsExperience
                ) {
                    this.jobCandidates[personIndex].yearsExperience =
                        yearsExperience;
                }
            } else {
                let newPerson = {
                    name,
                    education,
                    yearsExperience,
                };

                added.push(name);
                this.jobCandidates.push(newPerson);
            }
        });

        return `You successfully added candidates: ${added.join(", ")}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split("-");
        minimalExperience = Number(minimalExperience);

        let personIndex = this.jobCandidates.findIndex(
            (el) => el.name === name
        );
        if (personIndex === -1) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (
            minimalExperience > this.jobCandidates[personIndex].yearsExperience
        ) {
            throw new Error(
                `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
            );
        }

        this.jobCandidates[personIndex].yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let personIndex = this.jobCandidates.findIndex(
            (el) => el.name === name
        );
        if (personIndex === -1) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (this.jobCandidates[personIndex].education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }

        if (this.jobCandidates[personIndex].education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let result = "Candidates list:\n";
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        this.jobCandidates.forEach((person) => {
            result += `${person.name}-${person.yearsExperience}\n`;
        });
        return result.trim();
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
    Jobs.jobApplication([
        "John Doe-Bachelor-10",
        "Peter Parker-Master-5",
        "Jordan Cole-High School-5",
        "Daniel Jones- Bachelor-18",
    ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());