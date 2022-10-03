import React from "react"

const Word = ({ selectedWord, correcLetters }) => {
  return (
    <div className="word">
        {selectedWord.split('').map(
            (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correcLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })
        }
    </div>
  )
}

export default Word
