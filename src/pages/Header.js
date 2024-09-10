import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
          <nav>
            <p className="logo">
              multi<span>flex<span>
                </span></span></p>
            <i className="fa fa-bars" id="menu" />
            <ul id="menu-box">
              <div className="marker" />
              <li>main</li>
              <li>schedlues</li>
              <li>tickets</li>
              <li>news</li>
              <li>contact</li>
              <li><span>mr.john doe <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" /> <i className="fa fa-angle-down" /></span></li>
              <li><b>sign out</b></li>
            </ul>
          </nav>
          <div className="popular-movie-slider">
            <img src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200" className="poster" />
            <div className="popular-movie-slider-content">
              <p className="release">2017</p>
              <h2 className="movie-name">Interstellar</h2>
              <ul className="category">
                <p>Science fiction</p>
                <li>drama</li>
                <li>action</li>
              </ul>
              <p className="desc">Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.</p>
              <div className="movie-info">
                <i className="fa fa-clock-o"> &nbsp;&nbsp;&nbsp;<span>164 min.</span></i> 
                <i className="fa fa-volume-up"> &nbsp;&nbsp;&nbsp;<span>Subtitles</span></i>
                <i className="fa fa-circle"> &nbsp;&nbsp;&nbsp;<span>Imdb: <b>9.1/10</b></span></i>
              </div>
              <div className="movie-btns">
                <button><i className="fa fa-play" /> &nbsp; Watch trailer</button>
                <button className="read-more"><i className="fa fa-circle" /> <i className="fa fa-circle" /> <i className="fa fa-circle" />&nbsp; Read more</button>
              </div>
            </div>
          </div>
          {/*-slider-*/}
        </header>
    </div>
  )
}

export default Header
