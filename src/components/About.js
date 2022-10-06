import { Fragment, useState } from 'react'
import AnimatedText from './AnimatedText'
import AboutPopup from './popup/AboutPopup'

const aboutData = {
  firstName: 'Przemysław',
  lastName: 'Lange',
  bithday: '23.03.1994',
  address: 'Poznań, PL',
  phn: '+48 609 942 231',
  email: 'przemek.lange@gmail.com',
  serviceLists: ['Website Development', 'E-commerce Development', 'Digital Experience'],
  skills: {
    programming: [
      { name: 'JavaScript', value: '80' },
      { name: 'React', value: '60' },
      { name: 'TypeScript', value: '50' },
      { name: 'Rest API', value: '40' },
      { name: 'Styled Components / MUI / Tailwind ', value: '75' },
      { name: 'HTML/CSS (Less/Sass)', value: '80' },
      { name: 'Webpack / Grunt', value: '70' },
      { name: 'Magento 2', value: '70' },
      { name: 'PHP', value: '30' },
      { name: 'Wordpress / Evo', value: '40' },
      { name: 'Figma, Adobe XD, Photoshop', value: '80'}
    ],
    language: [
      { name: 'Polish', value: '95' },
      { name: 'English', value: '55' },
    ],
  },
  education: [
    { year: '2014 - 2018', unv: 'WSG in Bydgoszcz', degree: 'Programming / Engineer' },
    { year: '2010 - 2014', unv: 'Technical school in Kruszwica', degree: 'IT specialist' },
  ],
  working: [
    {
      year: '09.2021',
      company: 'Creatuity',
      deg: 'Frontend Developer / Magento',
    },
    {
      year: '01.2021 - 09.2021',
      company: 'NuOrder',
      deg: 'Frontend Developer',
    },
    { year: '03.2020 - 12.2020', company: 'Dekoma', deg: 'Frontend Developer' },
    { year: '02.2018 - 03.2020', company: 'Knoocker', deg: 'Junior / Mid Frontend Developer' },
  ]
}

const About = () => {
  const [popup, setPopup] = useState(false)
  return (
    <Fragment>
      <AboutPopup open={popup} close={() => setPopup(false)} aboutData={aboutData} />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/pl.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName} <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  I'm <span>web designer & front‑end developer</span> focused on crafting clean &
                  user‑friendly experiences, I am passionate about building excellent software that
                  improves the lives of those around me.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default About
