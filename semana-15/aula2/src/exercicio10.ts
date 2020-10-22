function reverseString(word: string):string {

    const splitWord = word.split('')
    const reversedWordArray = splitWord.reverse()
    const reversedWord = reversedWordArray.join('')

    return reversedWord
}

console.log(reverseString(process.argv[2]))