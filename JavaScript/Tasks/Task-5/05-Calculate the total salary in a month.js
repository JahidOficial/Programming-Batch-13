 const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function companySalary(salaries) {
    let totalSalary = 0;
    for(const salary of salaries){
        const perPersonSalary = salary.starting + (salary.increment * salary.experience);

        totalSalary += perPersonSalary;
    }
    return totalSalary;
}

const totalMonthOfSalary = companySalary(employees);
console.log("The total month of Salary is: ", totalMonthOfSalary);
