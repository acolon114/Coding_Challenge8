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

// Task 2: Create departments
class Department {
    constructor(name, employees) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getDepartmentSalary() {
        let totalSalary = 0
        for (const employee of this.employees) {
            totalSalary += employee.salary
        }
        return totalSalary;
    }

// Task 4: Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
        let totalSalary = 0;
        for (const employee of this.employees) {
            totalSalary += employee.salary;
            if (employee.bonus) {
                totalSalary += employee.bonus;
            }
        }
        return totalSalary;
    }
}

//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }

    getDetails() {
        console.log(`Manager ${this.name} makes $${this.salary}, with a bonus of $${this.bonus}, employed as a(n) ${this.department} ${this.position}.`);
    }
}
