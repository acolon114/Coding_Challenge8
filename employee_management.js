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
