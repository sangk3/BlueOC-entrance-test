// Input: [1,4,2,3,5]
// Output: 9

function sumOfTopTwoIntegers(arr){
  
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
  }
}
return arr[0]+arr[1]
}

function testSumOfTwoLargest() {
    const testCases = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 20, 5, 15, 30], expected: 50 },
        { input: [99, 1, 45, 60, 89], expected: 188 },
        { input: [-10, -5, 0, -1], expected: -1 }, // Các số âm và 0
        { input: [5, 5], expected: 10 }, // Mảng chỉ chứa hai số giống nhau
    ];

    testCases.forEach((testCase, index) => {
        const result = sumOfTopTwoIntegers(testCase.input);
        console.log(`Test case ${index + 1}: `, result === testCase.expected ? "Passed" : "Failed");
    });
}

testSumOfTwoLargest()

