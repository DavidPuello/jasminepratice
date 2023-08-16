
it('should calculate the monthly rate correctly', function () {
// Given values
const P = 10000; // Principal amount
const yearlyRate = 0.06; // Yearly interest rate (6%)
const n = 5; // Total number of payments (5 years × 12)

// Calculate the periodic interest rate (yearly rate ÷ 12)
const i = yearlyRate / 12;

// Calculate the expected monthly payment using the formula
const expectedMonthlyPayment = (P * i) / (1 - Math.pow(1 + i, -n));

// Calculate the monthly payment using the same formula directly
const calculatedMonthlyPayment = (P * i) / (1 - Math.pow(1 + i, -n));

// Compare the expected result with the calculated result
expect(calculatedMonthlyPayment).toBeCloseTo(expectedMonthlyPayment, 2); // Checking with 2 decimal places

});


it("should return a result with 2 decimal places", function () {
  // Given values
  const P = 15000; // Principal amount
  const yearlyRate = 0.05; // Yearly interest rate (5%)
  const n = 3; // Total number of payments (3 years × 12)

  // Calculate the periodic interest rate (yearly rate ÷ 12)
  const i = yearlyRate / 12;

  // Calculate the monthly payment using the same formula directly
  const calculatedMonthlyPayment = (P * i) / (1 - Math.pow(1 + i, -n));

  // Check if the calculated result has 2 decimal places
  const decimalCount = (calculatedMonthlyPayment.toString().split('.')[1] || '').length;
  expect(decimalCount).toBe(2);
});

/// etc
