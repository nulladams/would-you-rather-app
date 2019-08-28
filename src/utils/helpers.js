/**
* @description Helpers functions
*/
export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
export function formatQuestionToGuess (questionText) {
    const questionArr = questionText.split(" ")
    return (`...${questionArr[0]} 
                ${questionArr[1] === undefined ? "" : questionArr[1]} 
                ${questionArr[2] === undefined ? "" : questionArr[2]}
            ... `)
}