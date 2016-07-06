var React = require('react');
var {Link} = require('react-router')

var About = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a basic React application which fetches weather data from a weather API. Below are the resources used for this application:</p>
      <ol>
        <li>
          <a target="_blank" href='https://facebook.github.io/react/index.html'>React</a>
        </li>
        <li>
          <a target="_blank" href='http://openweathermap.org/'>OpenWeatherMap</a>
        </li>
      </ol>
      <p>This application is publicly visible on the following sites:</p>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/loschtreality/ReactWeather">Github</a>
        </li>
        <li>
          <a target="_blank" href="http://morning-sea-29825.herokuapp.com/#/?_k=cpmozr">Heroku</a>
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
