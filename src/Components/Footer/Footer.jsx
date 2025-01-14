import React, { useEffect, useState } from 'react'
import './Footer.css'
import appstoreImg from '../../Resources/appstore_link.jpg'
import playstoreImg from '../../Resources/playstore_link.jpg'

function Footer() {
  const [country, setCountry] = useState('Country')
  const [lang, setLang] = useState('Language')

  function HandleCountryChange(country) {
    setCountry(country)
    localStorage.setItem("country", country)
  }

  function HandleLanguageChange(language) {
    setLang(language)
    localStorage.setItem("language", language)
  }

  useEffect(() => {
    let fetchCountry = localStorage.getItem("country")
    if (fetchCountry) {
      setCountry(fetchCountry)
    }

    let fetchLanguage = localStorage.getItem("language")
    if (fetchLanguage) {
      setLang(fetchLanguage)
    }
  }, [])

  // Rendering
  return (
    <div className='footer'>

      <div className="brand">
        <div className="logo">
          <h2>TheFoodCourt</h2>
        </div>

        <div className="about">
          <h4>About TheFoodCourt</h4>
          <a href="https://www.zomato.com/who-we-are">Who We Are</a>
          <a href="https://blog.zomato.com/">Blog</a>
          <a href="https://www.zomato.com/careers">Work With Us</a>
          <a href="https://www.zomato.com/investor-relations">Investor Relations</a>
          <a href="https://www.zomato.com/report-fraud">Report Fraud</a>
          <a href="https://blog.zomato.com/press-kit">Press Kit</a>
          <a href="https://www.zomato.com/contact">Contact Us</a>
        </div>

        <div className="universe">
          <h4>Universe</h4>
          <a href="/">TheFoodCourt</a>
          <a href="https://www.zomato.com/">Zomato</a>
          <a href="https://www.blinkit.com/">Blikit</a>
          <a href="https://www.hyperpure.com/">Hyperpure</a>
          <a href="https://www.feedingindia.org/">Feeding Inida</a>
          <a href="https://www.zomato.com/live">FoodCourt Live</a>
          <a href="https://www.weatherunion.com/">Weather Union</a>
        </div>
      </div>

      <div className="resturants">
        <div className="for-resturants">
          <h4>For Resturants</h4>
          <a href="https://www.zomato.com/contact">Partner With Us</a>
          <a href="https://www.zomato.com/contact">Aps For You</a>
          <a href="https://www.zomato.com/contact">Blog For You</a>
        </div>

        <div className="learnmore">
          <h4>Learn More</h4>
          <a href="https://www.zomato.com/conditions">Privacy</a>
          <a href="https://www.zomato.com/conditions">Security</a>
          <a href="https://www.zomato.com/conditions">Terms</a>
          <a href="https://www.zomato.com/conditions">Conditions</a>
        </div>
      </div>

      <div className="links">

        <div className="dropdowns">

          <div className="dropdown">
            <button>{country} <i className="fa-solid fa-caret-down"></i> </button>
            <div className="items">
              <li onClick={() => HandleCountryChange('India')}>India</li>
              <li onClick={() => HandleCountryChange('England')}>England</li>
              <li onClick={() => HandleCountryChange('Germany')}>Germany</li>
              <li onClick={() => HandleCountryChange('USA')}>USA</li>
              <li onClick={() => HandleCountryChange('UAE')}>UAE</li>
            </div>
          </div>

          <div className="dropdown">
            <button>{lang} <i className="fa-solid fa-caret-down"></i> </button>
            <div className="items">
              <li onClick={() => HandleLanguageChange('English')}>English</li>
              <li onClick={() => HandleLanguageChange('Hindi')}>Hindi</li>
              <li onClick={() => HandleLanguageChange('German')}>German</li>
              <li onClick={() => HandleLanguageChange('Arabic')}>Arabic</li>
            </div>
          </div>

        </div>

        <div className="sociallinks">
          <h4>Social Links</h4>

          <div className="linkicons">
            <a href="https://in.linkedin.com/company/zomato"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/zomato/"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="https://twitter.com/zomato"><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://www.youtube.com/zomato"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.facebook.com/zomato"><i className="fa-brands fa-square-facebook"></i></a>
          </div>

          <div className="storeimages">
            <a href="https://link.zomato.com/xqzv/downloadZomatoIos"><img src={playstoreImg} alt="" /></a>
            <a href="https://link.zomato.com/xqzv/downloadZomatoAndroid"><img src={appstoreImg} alt="" /></a>
          </div>
        </div>

      </div>

      <div className="bottom">
        <div className="line"></div>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © TheFoodCourt™ Ltd. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
