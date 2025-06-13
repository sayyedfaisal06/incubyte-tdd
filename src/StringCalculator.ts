type Delimiter = string;
type NumberString = string;
type ExtractedNumbers = { delimiter: Delimiter; numbersString: NumberString };
export class StringCalculator {
  private static readonly DEFAULT_DELIMITER = ",";
  private static readonly CUSTOM_DELIMITER_PREFIX = "//";

  add(numbers: string): number {
    if (this.isEmpty(numbers)) return 0;

    const { delimiter, numbersString } =
      this.extractDelimiterAndNumbers(numbers);
    const numberArray = this.parseNumbers(numbersString, delimiter);
    this.validateNoNegativeNumbers(numberArray);
    return this.calculateSum(numberArray);
  }

  private extractDelimiterAndNumbers(numbers: string): ExtractedNumbers {
    if (numbers.startsWith(StringCalculator.CUSTOM_DELIMITER_PREFIX)) {
      const lines = numbers.split("\n");
      const delimiter = lines[0].substring(
        StringCalculator.CUSTOM_DELIMITER_PREFIX.length
      );
      const numbersString = lines.slice(1).join("");
      return { delimiter, numbersString };
    }
    return {
      delimiter: StringCalculator.DEFAULT_DELIMITER,
      numbersString: numbers,
    };
  }

  private isEmpty(numbers: string): boolean {
    return numbers === "" || numbers === null || numbers === undefined;
  }

  private parseNumbers(numbers: string, delimiter: string): number[] {
    const normalizedNumbers = numbers.replace(/\n/g, delimiter);
    return normalizedNumbers.split(delimiter).map((num) => {
      const parsed = parseInt(num.trim());
      if (isNaN(parsed)) throw new Error(`Invalid number input: "${num}"`);
      return parsed;
    });
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
