export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    const numberArray = numbers.split(",");
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}