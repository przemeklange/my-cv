import { useEffect, useState } from 'react'

const homeData = {
  skills: ['Frontend', 'Magento Frontend', 'Designer'],
}

const homeDataTwo = {
  skills: ['Developer', 'Developer', ''],
}

const AnimatedText = () => {
  const [text, setText] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0)
    }, 5000)
    return () => clearInterval(interval)
  })
  return (
    <span className="cd-headline rotate-1">
    
      <span className="cd-words-wrapper">
        {homeData.skills.map((skill, i) => (
          <b key={i} className={text === i ? 'is-visible' : 'is-hidden'}>
            {skill}
          </b>
        ))}
      </span>
      <span> </span>
      <span className="cd-words-wrapper">
        {homeDataTwo.skills.map((skill, i) => (
          <b key={i} className={text === i ? 'is-visible' : 'is-hidden'}>
            {skill}
          </b>
        ))}
      </span>
    </span>
  )
}
export default AnimatedText
