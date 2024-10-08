// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    // Print class details
    getDetails() {
        console.log(`Employee ${this.name} makes $${this.salary} employed as a(n) ${this.department} ${this.position}.`);
    }
};

// Task 2: Create a Departments Class
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
        // Iterate through department employees, adding their salaries
        for (const employee of this.employees) {
            totalSalary += employee.salary
        }
        return totalSalary;
    }

    // Task 4: Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
        let totalSalary = 0;
        // Iterate through employees
        for (const employee of this.employees) {
            totalSalary += employee.salary;
            
            // Check if employee has associated bonus
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
        super(name, salary, position, department); // Inherit employee structure
        this.bonus = bonus; // Add bonus
    }

    // Print class details
    getDetails() {
        console.log(`Manager ${this.name} makes $${this.salary}, with a bonus of $${this.bonus}, employed as a(n) ${this.department} ${this.position}.`);
    }
}

// Task 5: Create and Manage Departments and Employees
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`); //Output: Total salary for Engineering: $200000
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`); //Output: Total salary with bonuses for Engineering: $220000
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`); //Output: Total salary for Marketing: $205000
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`); // Output: Total salary with bonuses for Marketing: $230000