type Delimiter = string;
type NumberString = string;
type ExtractedNumbers = { delimiter: Delimiter; numbersString: NumberString };
export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;

    const { delimiter, numbersString } =
      this.extractDelimiterAndNumbers(numbers);
    const numberArray = this.parseNumbers(numbersString, delimiter);
    this.validateNoNegativeNumbers(numberArray);
    return this.calculateSum(numberArray);
  }

  private extractDelimiterAndNumbers(numbers: string): {
    delimiter: string;
    numbersString: string;
  } {
    if (numbers.startsWith("//")) {
      const lines = numbers.split("\n");
      const delimiter = lines[0].substring(2);
      const numbersString = lines.slice(1).join("");
      return { delimiter, numbersString };
    }
    return { delimiter: ",", numbersString: numbers };
  }

  private parseNumbers(numbers: string, delimiter: string): number[] {
    const normalizedNumbers = numbers.replace(/\n/g, delimiter);
    return normalizedNumbers
      .split(delimiter)
      .map((num) => parseInt(num.trim()));
  }

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  private validateNoNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }
  }
}
