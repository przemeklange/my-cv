import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Mmierzejewska",
    img: "img/portfolio/mm.png",
    tag: "Web page - photography",
    des: [
      "Technology: Wordpress / Elementor Pro / Css (Scss / Jquery + Js ES6)",
      "Link: http://mmierzejewska.com/",
    ],
  },
  {
    title: "Mallorca Week",
    img: "img/portfolio/mall.jpg",
    tag: "Web page",
    des: [
      "Technology: Evolution, Css(Sass) / Webpack / Javascript ES6 / PHP",
      "Link: https://mallorcaweek.pl/",
    ],
  },
  {
    title: "Mojeoczy",
    img: "img/portfolio/mojeoczy.jpg",
    tag: "Web page",
    des: [
      "Technology: Evolution, Css(Sass) / Webpack / Javascript ES6 / PHP",
      "Link: https://mojeoczy.pl/",
    ],
  },
  {
    title: "Enterol",
    img: "img/portfolio/enterol.jpg",
    tag: "Web page",
    des: [
      "Technology: Evolution, Css(Sass) / Webpack / Javascript ES6 / PHP",
      "Link: https://enterol.pl/",
    ],
  },
  {
    title: "E-polana",
    img: "img/portfolio/polana.jpg",
    tag: "Web Page",
    des: [
      "Technology: Evolution, Css(Sass) / Webpack / Javascript ES6 / PHP",
      "Link: https://e-polana.com/",
    ],
  },
 
];

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="projects">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">Projects</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
