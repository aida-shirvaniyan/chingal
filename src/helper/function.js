export const ageCalculator = (dateOfBirth) => {
    const SplittedDate = dateOfBirth.split("-");
    const Birth = SplittedDate[0];
    const Year = new Date().getFullYear();
    const Age = Year - Birth
    return Age
}