// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        console.log(`Employee ${this.name} makes $${this.salary} employed as a(n) ${this.department} ${this.position}.`);
    }
};