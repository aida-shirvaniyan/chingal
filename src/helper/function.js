export const ageCalculator = (dateOfBirth) => {
    if (typeof dateOfBirth == "string" && dateOfBirth.indexOf('-') > -1) {
        const SplittedDate = dateOfBirth.split("-");
        const Birth = SplittedDate[0];
        const Year = new Date().getFullYear();
        const Age = Year - Birth;
        return Age;
    }
    else return dateOfBirth
}