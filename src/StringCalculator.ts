export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    const numberArray = this.parseNumbers(numbers);
    return this.calculateSum(numberArray);
  }

  private parseNumbers(numbers: string): number[] {
    const normalizedNumbers = numbers.replace(/\n/g, ',');
    return normalizedNumbers.split(',').map(num => parseInt(num.trim()));
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}