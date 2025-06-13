export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    const normalizedNumbers = numbers.replace(/\n/g, ",");
    const numberArray = normalizedNumbers
      .split(",")
      .map((num) => parseInt(num.trim()));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}