
function FrequentStringLengths(arr){
    const lengthCount = arr.reduce(function(accumunlator,str){
        accumunlator[str.length] = (accumunlator[str.length] || 0) + 1;
        return accumunlator;
    },{}) 


const maxFrequencies = Math.max(...Object.values(lengthCount))

return arr.filter(str=>lengthCount[str.length] === maxFrequencies)
}


// Unit test
function testFrequentStringLengths(){
    const test =[
        {input:['a', 'ab', 'abc', 'cd', 'def', 'gh'], expected: ['ab', 'cd', 'gh']},
        {input:['xy','y','xzy','yy'], expected:['xy','yy']}
    ]

    test.forEach((test,index)=>{
        const result = FrequentStringLengths(test.input)
        // chuyển đổi tử mảng sang định dạng chuỗi JSON để so sánh 2 mảng
        const success = JSON.stringify(result) === JSON.stringify(test.expected)
        // Kết hợp toán tử 3 ngôi để kiểm tra kiểm thử thành công hay thất bại
        console.log(`Test ${index+1}: ${success? 'PASS' : 'FAIL'}`)
    })
}
testFrequentStringLengths();