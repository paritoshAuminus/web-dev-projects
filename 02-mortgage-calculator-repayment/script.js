const form = document.getElementById('form');

// State management
form.addEventListener('submit', function(event) {
    event.preventDefault();
});

// Setting the different states of the resutl section
const resultOpr = document.getElementById('resultOpr');
const resultEmpty = document.getElementById('resultEmpty');
resultOpr.style.display = 'none';
resultEmpty.style.display = 'flex';

// Storing all the error statements in block constants
const amountError = document.getElementById('amountError');
const termError = document.getElementById('termError');
const interestError = document.getElementById('interestError');
const typeError = document.getElementById('typeError');

// Setting all the errors to display:none
amountError.style.display = 'none';
termError.style.display = 'none';
interestError.style.display = 'none';
typeError.style.display = 'none';


// Error checker function
function errorChecker(amount, term, interest, radioInput) {
    if (amount == '') {
        amountError.style.display = 'block';
    } else if (term == '') {
        termError.style.display = 'block';
    } else if (interest == '') {
        interestError.style.display = 'block';
    } else if (radioInput == null) {
        typeError.style.display = 'block';
    } else {
        return !Error;
    }
}


// Calculates monthly and total repayments for both repayment and interest-only mortgages
function calculateMortgage(amount, term, interest, type) {
    amount = parseFloat(amount);
    term = parseInt(term);
    interest = parseFloat(interest);
    const months = term * 12;
    const monthlyRate = interest / 100 / 12;

    let monthlyRepayment = 0;
    let totalRepayment = 0;

    if (type === 'repayment') {
        if (monthlyRate === 0) {
            monthlyRepayment = amount / months;
        } else {
            const factor = Math.pow(1 + monthlyRate, months);
            monthlyRepayment = amount * (monthlyRate * factor) / (factor - 1);
        }
        totalRepayment = monthlyRepayment * months;
    } else if (type === 'interest') {
        monthlyRepayment = (amount * (interest / 100)) / 12;
        totalRepayment = monthlyRepayment * months;
    }

    return {
        monthly: monthlyRepayment,
        total: totalRepayment
    };
}


// Result section display
function result() {
    let amount = document.getElementById('mortgageAmount').value;
    let term = document.getElementById('mortgageTerm').value;
    let interest = document.getElementById('mortgageInterest').value;
    let formData = new FormData(form);
    let radioInput = formData.get('mortgageType');

    // Checking if there are any errors in the calculator section
    let checkError = errorChecker(amount, term, interest, radioInput);

    if (checkError == !Error) {
        // Pass the correct arguments to calculateMortgage
        let resultObj = calculateMortgage(amount, term, interest, radioInput);
        // Format the numbers to 2 decimal places
        document.getElementById('totalRepayment').innerText = `$${resultObj.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.getElementById('monthlyRepayment').innerText = `$${resultObj.monthly.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        resultEmpty.style.display = 'none';
        resultOpr.style.display = 'block';
    }
}

function clearInput(el) {
    document.getElementById(el).style.display = 'none';
}
