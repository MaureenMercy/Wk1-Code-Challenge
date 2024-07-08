function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (using rates from 1 July 2023)
    function calculatePAYE(annualTaxablePay) {
        if (annualTaxablePay <= 288000) return annualTaxablePay * 0.10;
        if (annualTaxablePay <= 388000) return 28800 + (annualTaxablePay - 288000) * 0.25;
        if (annualTaxablePay <= 6000000) return 53800 + (annualTaxablePay - 388000) * 0.30;
        if (annualTaxablePay <= 9600000) return 1731800 + (annualTaxablePay - 6000000) * 0.325;
        return 2883800 + (annualTaxablePay - 9600000) * 0.35;
    }

    const annualGrossSalary = grossSalary * 12;
    const annualPAYE = calculatePAYE(annualGrossSalary);
    const monthlyPAYE = annualPAYE / 12;

    // Calculate NHIF Deductions
    function calculateNHIF(grossPay) {
        if (grossPay <= 5999) return 150;
        if (grossPay <= 7999) return 300;
        if (grossPay <= 11999) return 400;
        if (grossPay <= 14999) return 500;
        if (grossPay <= 19999) return 600;
        if (grossPay <= 24999) return 750;
        if (grossPay <= 29999) return 850;
        if (grossPay <= 34999) return 900;
        if (grossPay <= 39999) return 950;
        if (grossPay <= 44999) return 1000;
        if (grossPay <= 49999) return 1100;
        if (grossPay <= 59999) return 1200;
        if (grossPay <= 69999) return 1300;
        if (grossPay <= 79999) return 1400;
        if (grossPay <= 89999) return 1500;
        if (grossPay <= 99999) return 1600;
        return 1700;
    }

    const nhifDeduction = calculateNHIF(grossSalary);

    // Calculate NSSF Deductions (using rates from February 2024)
    function calculateNSSF(pensionablePay) {
        const tier1 = Math.min(pensionablePay, 7000) * 0.06;
        const tier2 = Math.max(Math.min(pensionablePay - 7000, 29000), 0) * 0.06;
        return tier1 + tier2;
    }

    const nssfDeduction = calculateNSSF(grossSalary);

    // Calculate Housing Levy (1.5% of gross salary for both employee and employer)
    const housingLevy = grossSalary * 0.015;

    // Calculate Net Salary
    const totalDeductions = monthlyPAYE + nhifDeduction + nssfDeduction + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        paye: monthlyPAYE,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        housingLevy: housingLevy,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

// Example usage
const basicSalary = 50000;
const benefits = 5000;
const result = calculateNetSalary(basicSalary, benefits);
console.log(result);