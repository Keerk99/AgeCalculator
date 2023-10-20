export function calculateAge(day, month, year) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const errors = {};

  if (!day) {
    errors.errorMessage1 = "Field is required";
  }
  if (!month) {
    errors.errorMessage2 = "Field is required";
  }
  if (!year) {
    errors.errorMessage3 = "Field is required";
  }

  if (day > 31) {
    errors.errorMessage1 = "Must be a valid day";
  }
  if (month > 12) {
    errors.errorMessage2 = "Must be a valid month";
  }
  if (
    year > currentYear ||
    (year === currentYear && month > currentMonth) ||
    (year === currentYear && month === currentMonth && day > currentDay)
  ) {
    errors.errorMessage3 = "Must be in the past";
  }

  if (
    day !== "" &&
    month !== "" &&
    year !== "" &&
    !isNaN(day) &&
    !isNaN(month) &&
    !isNaN(year)
  ) {
    const maxDay = new Date(year, month, 0).getDate();
    if (day > maxDay) {
      errors.errorMessage1 = "Must be a valid date";
      errors.errorMessage2 = " ";
      errors.errorMessage3 = " ";
    }
  }

  if (day > 31 && month < 13 && year <= currentYear) {
    errors.errorMessage1 = "Must be a valid day";
    errors.errorMessage2 = "";
    errors.errorMessage3 = "";
  }

  if (day > 31 && month > 12) {
    errors.errorMessage1 = "Must be a valid day";
    errors.errorMessage2 = "Must be a valid month";
    errors.errorMessage3 = "";
  }

  if (day > 31 && year > currentYear) {
    errors.errorMessage1 = "Must be a valid day";
    errors.errorMessage2 = "";
    errors.errorMessage3 = "Must be in the past";
  }

  if (day > 31 && month > 12 && year > currentYear) {
    errors.errorMessage1 = "Must be a valid day";
    errors.errorMessage2 = "Must be a valid month";
    errors.errorMessage3 = "Must be in the past";
  }

  if (!errors.errorMessage1 && !errors.errorMessage2 && !errors.errorMessage3) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    if (birthDate > currentDate) {
      errors.errorMessage3 = "Must be in the past";
    } else {
      const ageInMilliseconds = currentDate - birthDate;
      const ageDate = new Date(ageInMilliseconds);
      const years = ageDate.getUTCFullYear() - 1970;
      const months = ageDate.getUTCMonth();
      const days = ageDate.getUTCDate() - 1;

      return { age: { years, months, days }, errors: {} };
    }
  }

  return { age: { years: "--", months: "--", days: "--" }, errors };
}
