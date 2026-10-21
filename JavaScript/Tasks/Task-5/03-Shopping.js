// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const laptopTotal = perLaptop * laptop;
    const tabletTotal = perTablet * tablet;
    const mobileTotal = perMobile * mobile;

    const totalBudget = laptopTotal + tabletTotal + mobileTotal;
    return totalBudget;
}

const totalBudget = calculateElectronicsBudget(3, 2, 1);
console.log("Total Budget is: ", totalBudget);