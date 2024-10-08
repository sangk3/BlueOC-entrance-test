function sumOfTopTwoIntegers(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Mảng phải có ít nhất 2 phần tử");
  }

  // Sắp xếp mảng theo thứ tự giảm dần
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Trả về tổng của hai số lớn nhất
  return arr[0] + arr[1];
}

function testSumOfTwoLargest() {
  const testCases = [
    { input: [1, 4, 2, 3, 5], expected: 9 },
    { input: [10, 20, 5, 15, 30], expected: 50 },
    { input: [99, 1, 45, 60, 89], expected: 188 },
    { input: [-10, -5, 0, -1], expected: -1 }, 
    { input: [5, 5], expected: 10 }, 
    { input: [], expected: "Mảng phải có ít nhất 2 phần tử" }, 
    { input: [1], expected: "Mảng phải có ít nhất 2 phần tử" }, 
  ];

  testCases.forEach((testCase, index) => {
    try {
      const result = sumOfTopTwoIntegers(testCase.input);
      console.log(`Test case ${index + 1}: `, result === testCase.expected ? "Passed" : "Failed");
    } catch (error) {
      // Kiểm tra lỗi cho các trường hợp không hợp lệ
      console.log(`Test case ${index + 1}: `, error.message === testCase.expected ? "Passed" : "Failed");
    }
  });
}

testSumOfTwoLargest();
