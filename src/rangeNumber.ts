function rangeOfNumbers(startNum: number, endNum: number): number[] {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers: number[] = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

 const ejemplo = rangeOfNumbers(1,20);
 console.log(ejemplo);
