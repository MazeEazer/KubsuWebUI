import  { useState, useEffect } from 'react';
import headerlogo from '../img/Group9.png';
import headervideo from '../img/video.mp4';
import mask from '../img/MaskGroup.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsBurgerActive(false);
      }
    };
  
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsBurgerActive(!isBurgerActive);
  };

 
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.mobile-nav') && !e.target.closest('.burger-btn') && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsBurgerActive(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const handleSubmenuClick = (e) => {
    if (e.target.tagName === 'SPAN') {
      const submenuId = e.target.dataset.submenu;
      setSubmenuOpen((prev) => ({ ...prev, [submenuId]: !prev[submenuId] }));
    }
  };

  return (
    <>
      <header className="header">
        <div className="intro">
          <div className="video"></div>
          <video className="video__media" autoPlay muted loop>
            <source src={headervideo} type="video/mp4" />
          </video>
          <img className="backimg" alt="backimg" src={mask} />
          <div className="intro__content">
            <div className="container2">
              <div className="header__content flex">
                <img className="header__logo" src={headerlogo} alt="Логотип" />
                <nav className="header__nav">
                  <ul className="nav__list list__reset flex">
                    <li className="nav__item">
                      <a href="#" className="nav__link nav__link-hover">
                        ПОДДЕРЖКА DRUPAL
                      </a>
                    </li>
                    <li className="nav__item dropdown">
                      <button className="dropbtn btn__reset">
                        АДМИНИСТРИРОВАНИЕ
                      </button>
                      <ul className="dropdown__list list__reset">
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            МИГРАЦИЯ
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            БЭКАПЫ
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            АУДИТ БЕЗОПАСНОСТИ
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            ОПТИМИЗАЦИЯ СКОРОСТИ
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            ПЕРЕЕЗД НА HTTPS
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__item">
                      <a href="#" className="nav__link nav__link-hover">
                        ПРОДВИЖЕНИЕ
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#" className="nav__link nav__link-hover">
                        РЕКЛАМА
                      </a>
                    </li>
                    <li className="nav__item dropdown">
                      <button className="dropbtn btn__reset">
                        О НАС
                      </button>
                      <ul className="dropdown__list list__reset">
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            КОМАНДА
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            DRUPALGIVE
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            БЛОГ
                          </a>
                        </li>
                        <li className="dropdown__item">
                          <a href="#" className="nav__link">
                            КУРСЫ DRUPAL
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__item">
                      <a href="#" className="nav__link nav__link-hover">
                        ПРОЕКТЫ
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#" className="nav__link nav__link-hover">
                        КОНТАКТЫ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hero__content flex">
                <div className="top-left flex">
                  <h1 className="hero__title section__title">
                    Поддержка сайтов на&nbsp;Drupal
                  </h1>
                  <p className="hero__text text">
                    Сопровождение и&nbsp;поддержка сайтов на&nbsp;CMS Drupal любых
                    версий и&nbsp;запущенности
                  </p>
                  <button className="hero__btn btn__reset">ТАРИФЫ</button>
                </div>
                <div className="bottom-right">
                  <ul className="hero__list list__reset flex">
                    <li className="list__item">
                      <span className="special__inf num1">#1</span>
                      <div className="general__inf gen1">
                        Drupal-разработчик в&nbsp;России по&nbsp;версии Рейтинга
                        Рунета
                      </div>
                    </li>
                    <li className="list__item">
                      <span className="special__inf">3+</span>
                      <div className="general__inf">
                        средний опыт специалистов более 3&nbsp;лет
                      </div>
                    </li>
                    <li className="list__item">
                      <span className="special__inf">14</span>
                      <div className="general__inf">
                        лет опыта в&nbsp;сфере Drupal
                      </div>
                    </li>
                    <li className="list__item">
                      <span className="special__inf">200+</span>
                      <div className="general__inf">
                        модулей и&nbsp;тем в&nbsp;формате DrupalGive
                      </div>
                    </li>
                    <li className="list__item">
                      <span className="special__inf">90 000+</span>
                      <div className="general__inf">
                        часов поддержки сайтов на&nbsp;Drupal
                      </div>
                    </li>
                    <li className="list__item">
                      <span className="special__inf">300+</span>
                      <div className="general__inf">Проектов на&nbsp;поддержке</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="header__mobile">
        <div className="mobile__menu">
          <div className="mob__container flex">
            <img src={headerlogo} alt="" />
            <button
              className={`burger-btn ${isBurgerActive ? 'active' : ''}`}
              aria-label="Toggle menu"
              onClick={handleBurgerClick}
            >
              <span
                style={{
                  transform: isBurgerActive ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                }}
              ></span>
              <span style={{ opacity: isBurgerActive ? '0' : '1' }}></span>
              <span
                style={{
                  transform: isBurgerActive ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
                }}
              ></span>
            </button>
          </div>
        </div>
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="menu-item">
              <a href="#advantages" className="nav-link">
                ПОДДЕРЖКА DRUPAL
              </a>
            </li>
            <li className={`menu-item has-submenu ${submenuOpen.admin ? 'open' : ''}`}>
              <span
                className="submenu-trigger"
                data-submenu="admin"
                onClick={handleSubmenuClick}
              >
                АДМИНИСТРИРОВАНИЕ
              </span>
              <ul
                className={`submenu ${submenuOpen.admin ? 'open' : ''}`}
                data-submenu="admin"
              >
                <li className="menu-item">
                  <a href="#advantages" className="nav-link">
                    МИГРАЦИЯ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#advantages" className="nav-link">
                    БЭКАПЫ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#advantages" className="nav-link">
                    АУДИТ БЕЗОПАСНОСТИ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#advantages" className="nav-link">
                    ОПТИМИЗАЦИЯ СКОРОСТИ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#advantages" className="nav-link">
                    ПЕРЕЕЗД НА HTTPS
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#" className="nav-link">
                ПРОДВИЖЕНИЕ
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="nav-link">
                РЕКЛАМА
              </a>
            </li>
            <li className={`menu-item has-submenu ${submenuOpen.about ? 'open' : ''}`}>
              <span
                className="submenu-trigger"
                data-submenu="about"
                onClick={handleSubmenuClick}
              >
                О НАС
              </span>
              <ul
                className={`submenu ${submenuOpen.about ? 'open' : ''}`}
                data-submenu="about"
              >
                <li className="menu-item">
                  <a href="#team" className="nav-link">
                    КОМАНДА
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    DRUPALGIVE
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#blog" className="nav-link">
                    БЛОГ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    КУРСЫ DRUPAL
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#blog" className="nav-link">
                ПРОЕКТЫ
              </a>
            </li>
            <li className="menu-item">
              <a href="#contacts" className="nav-link">
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
