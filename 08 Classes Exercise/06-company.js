class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        Array.from(arguments).forEach((element) => {
            if (element === "" || element === null || element === undefined) {
                throw new Error("Invalid input!");
            }
        });

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment = () => {
        let departmentsArray = Object.entries(this.departments);
        departmentsArray.sort((a, b) => {
            return (
                b[1].reduce((acc, el) => acc + el.salary, 0) / b[1].length -
                a[1].reduce((acc, el) => acc + el.salary, 0) / a[1].length
            );
        });
        let bestDep = departmentsArray[0][0];
        let bestDepEmployees = departmentsArray[0][1];
        let bestDepAvg =
            bestDepEmployees.reduce((acc, el) => acc + el.salary, 0) /
            bestDepEmployees.length;
        bestDepEmployees.sort(
            (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
        );

        let result = "";
        result += `Best Department is: ${bestDep}\n`;
        result += `Average salary: ${bestDepAvg.toFixed(2)}\n`;
        bestDepEmployees.forEach((element) => {
            result += `${element.name} ${element.salary} ${element.position}\n`;
        });

        return result.trim();
    };
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", -1, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
