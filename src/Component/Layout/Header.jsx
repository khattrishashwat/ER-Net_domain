import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import httpClient from "../../HttpClient/HttpClients";

const MobileMenuItem = memo(({ item, activeMenu, toggleMenu }) => {
  return (
    <li style={{ cursor: "pointer" }}>
      {!item.submenu ? (
        <a href={item.link}>{item.name}</a>
      ) : (
        <>
          <a
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              toggleMenu(item.name);
            }}
          >
            {item.name} <FaChevronDown />
          </a>
          {activeMenu === item.name && (
            <ul className="mobile-submenu">
              {item.submenu[0].columns.map((column, colIndex) =>
                column.map((subItem, subIndex) => (
                  <li key={`${colIndex}-${subIndex}`}>
                    <a href={subItem.link}>{subItem.name}</a>
                  </li>
                ))
              )}
            </ul>
          )}
        </>
      )}
    </li>
  );
});

const DesktopMenuItem = memo(
  ({ item, activeMenu, handleMenuHover, handleMenuLeave }) => {
    return (
      <li
        className={`${
          item.submenu
            ? item.name.toLowerCase().replace(" ", "-") + "-menu"
            : ""
        } ${activeMenu === item.name ? "active" : ""}`}
        onMouseEnter={() => item.submenu && handleMenuHover(item.name)}
        onMouseLeave={() => item.submenu && handleMenuLeave()}
        style={{ cursor: "pointer" }}
      >
        {!item.submenu ? (
          <a href={item.link}>{item.name}</a>
        ) : (
          <>
            <a className="mm-arr">
              {item.name} <FaChevronDown />
            </a>
            {activeMenu === item.name && (
              <div className="mm-pos">
                <div
                  className={`${item.name
                    .toLowerCase()
                    .replace(" ", "-")}-mm m-menu`}
                >
                  <div className="m-menu-inn">
                    {item.submenu.map((sub, subIndex) => (
                      <React.Fragment key={subIndex}>
                        {sub.columns.map((column, colIndex) => (
                          <div
                            key={colIndex}
                            className={`mm1-com mm1-s${colIndex + 1}`}
                          >
                            <ul>
                              {column.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.link}>{link.name}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </li>
    );
  }
);

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [topBarData, setTopBarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [menuItems, setMenuItems] = useState([{ name: "Home", link: "/" }]);
  const [isSTop, setIsSTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateStickyState = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsSticky(currentScrollY > 20);
        lastScrollY = currentScrollY;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateStickyState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transformHeaderData = useCallback((data) => {
    if (!data) return [];

    return data.map((headerItem) => {
      // Make Contact menu static
      if (headerItem.title === "Contact") {
        return {
          name: headerItem.title,
          slug: headerItem.slug,
          link: `/${headerItem.slug}`,
        };
      }

      const baseItem = {
        name: headerItem.title,
        slug: headerItem.slug,
        link: `/${headerItem.slug}`,
      };

      if (headerItem.menuItems?.length > 0 && headerItem.title !== "Contact") {
        const columns = [];
        const items = headerItem.menuItems.map((menuItem) => ({
          name: menuItem.title,
          link: `/${menuItem.slug}`,
          description: menuItem.description,
        }));

        for (let i = 0; i < items.length; i += 6) {
          columns.push(items.slice(i, i + 6));
        }

        return {
          ...baseItem,
          submenu: [
            {
              title: headerItem.description || headerItem.title,
              columns: columns,
            },
          ],
        };
      }

      return baseItem;
    });
  }, []);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setLoading(true);
        const response = await httpClient.get("/dashboard/header");
        const data = response.data.data;

        setTopBarData(data.topbar);
        const transformedItems = transformHeaderData(data.header);

        setMenuItems((prev) => [
          prev[0], // Keep "Home" item
          ...transformedItems,
        ]);
      } catch (error) {
        setError(error.message || "Failed to fetch header data");
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderData();
  }, [transformHeaderData]);

  const toggleMenu = useCallback((menu) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((current) => !current);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  }, [mobileMenuOpen]);

  const handleMenuHover = useCallback((menu) => {
    setActiveMenu(menu);
  }, []);

  const handleMenuLeave = useCallback(() => {
    const timer = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const TopOpen = useCallback(() => {
    setIsSTop(!isSTop);
  }, [isSTop]);

  const toggle = useCallback(
    (mode) => () => {
      console.log(`Toggle ${mode}`);
    },
    []
  );

  const incText = useCallback(() => {
    console.log("Increase text size");
  }, []);

  const decText = useCallback(() => {
    console.log("Decrease text size");
  }, []);

  const mobileMenu = useMemo(
    () => (
      <div className={`ed-mob-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="ed-mob-menu-con">
          <div className="ed-mm-left">
            {topBarData.ministry_icon_url && (
              <a href={topBarData.ministry_icon_link}>
                <img src={topBarData.ministry_icon_url} alt="Ministry Icon" />
              </a>
            )}
          </div>
          <div className="ed-mm-right">
            <div className="ed-mm-menu">
              <a className="ed-micon" onClick={toggleMobileMenu}>
                <FaBars />
              </a>
              <div className={`ed-mm-inn ${mobileMenuOpen ? "ed-mm-act" : ""}`}>
                <a href="#!" className="ed-mi-close" onClick={toggleMobileMenu}>
                  <FaTimes />
                </a>
                <ul>
                  {menuItems.map((item, index) => (
                    <MobileMenuItem
                      key={index}
                      item={item}
                      activeMenu={activeMenu}
                      toggleMenu={toggleMenu}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [
      mobileMenuOpen,
      topBarData,
      menuItems,
      activeMenu,
      toggleMenu,
      toggleMobileMenu,
    ]
  );

  const logoSection = useMemo(
    () => (
      <div className={`top-logo ${isSticky ? "sticky-logo" : ""}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="wed-logo">
                {topBarData.icon_url && (
                  <a href={topBarData.icon_link}>
                    <img src={topBarData.icon_url} alt="Logo" />
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="search-container">
                <div className="search-form">
                  <form role="search">
                    <div className="sf-type">
                      <div className="sf-input">
                        <input
                          type="text"
                          id="sf-box"
                          placeholder="Search here..."
                          aria-label="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-right">
              {topBarData.digital_india_icon_url && (
                <a href={topBarData.digital_india_icon_link}>
                  <img
                    src={topBarData.digital_india_icon_url}
                    alt="Ministry Icon"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    [isSticky, topBarData]
  );

  const mainMenu = useMemo(
    () => (
      <div
        className={`main-menu search-top ${isSticky ? "sticky" : ""}`}
        id="myHeader"
      >
        <ul>
          {menuItems.map((item, index) => (
            <DesktopMenuItem
              key={index}
              item={item}
              activeMenu={activeMenu}
              handleMenuHover={handleMenuHover}
              handleMenuLeave={handleMenuLeave}
            />
          ))}
        </ul>
      </div>
    ),
    [isSticky, menuItems, activeMenu, handleMenuHover, handleMenuLeave]
  );

  const topBarSection = useMemo(
    () => (
      <div className="ed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="ed-com-t1-left">
                <div className="main-left-div">
                  <ul>
                    <li>
                      <span>
                        <img
                          src="https://www.nic.gov.in/wp-content/themes/sdo-theme/images/flag.svg"
                          alt="Indian Flag"
                          aria-hidden="true"
                        />
                      </span>
                    </li>
                    <li>
                      <a
                        lang="hi"
                        href="https://www.इंडिया.सरकार.भारत/"
                        onClick={(e) => {
                          if (
                            !window.confirm(
                              "You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies."
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        aria-label="भारत सरकार - External site that opens in a new window"
                        title="भारत सरकार - External site that opens in a new window"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        भारत सरकार
                      </a>
                    </li>
                    <li>
                      <a
                        lang="en"
                        href="https://www.india.gov.in/"
                        onClick={(e) => {
                          if (
                            !window.confirm(
                              "You are being redirected to an external website. Please note that National Informatics Centre cannot be held responsible for external websites content & privacy policies."
                            )
                          ) {
                            e.preventDefault();
                          }
                        }}
                        aria-label="Government of India - External site that opens in a new window"
                        title="Government of India - External site that opens in a new window"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Government of India
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ed-com-t1-right">
                <ul>
                  <li className="language-toggle border-0">
                    <div className="">
                      <svg
                        width={28}
                        height={28}
                        aria-label="Skip to main Content icon"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.0335 5.69397H8.61686C8.04223 5.69397 7.49113 5.92224 7.0848 6.32857C6.67847 6.7349 6.4502 7.286 6.4502 7.86064V12.194H8.08324V7.19397H27.7002V23.694H8.06142V18.694H6.4502V23.0273C6.4502 23.6019 6.67847 24.153 7.0848 24.5594C7.49113 24.9657 8.04223 25.194 8.61686 25.194H27.0335C27.6082 25.194 28.1593 24.9657 28.5656 24.5594C28.9719 24.153 29.2002 23.6019 29.2002 23.0273V7.86064C29.2002 7.286 28.9719 6.7349 28.5656 6.32857C28.1593 5.92224 27.6082 5.69397 27.0335 5.69397ZM10.7835 18.694V16.5754H3.2002V14.694H10.7835V12.194L14.5 15.5L10.7835 18.694ZM24.8669 16H17.2835V14.3606H24.8669V16ZM24.8669 12.194H17.2835V10.694H24.8669V12.194ZM21.6169 20.194H17.2835V18.694H21.6169V20.194Z"
                          fill="#000"
                        />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="language-dropdown">
                      <button className="language-toggle">
                        <svg
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.125 3.735V12H12.91V3.735H11.815V2.67H15.685V3.735H14.125ZM8.47 2.52C9.25 2.52 9.845 2.715 10.255 3.105C10.675 3.495 10.885 3.985 10.885 4.575C10.885 5.005 10.77 5.395 10.54 5.745C10.32 6.085 9.99 6.355 9.55 6.555C9.11 6.755 8.56 6.865 7.9 6.885L7.825 5.835C8.505 5.815 8.985 5.695 9.265 5.475C9.555 5.255 9.7 4.96 9.7 4.59C9.7 4.23 9.58 3.97 9.34 3.81C9.11 3.65 8.84 3.57 8.53 3.57C8.16 3.57 7.825 3.62 7.525 3.72C7.225 3.955 6.905 4.125 6.565 4.125L6.19 3.09C6.45 2.95 6.77 2.82 7.15 2.7C7.54 2.58 7.98 2.52 8.47 2.52ZM11.05 8.73C11.05 9.19 10.945 9.575 10.735 9.885C10.525 10.195 10.24 10.425 9.88 10.575C9.53 10.725 9.13 10.8 8.68 10.8C8.11 10.8 7.58 10.66 7.09 10.38C6.61 10.1 6.15 9.655 5.71 9.045C5.28 8.435 4.855 7.64 4.435 6.66L5.5 6.27C5.79 6.98 6.09 7.595 6.4 8.115C6.72 8.625 7.06 9.02 7.42 9.3C7.78 9.57 8.165 9.705 8.575 9.705C8.955 9.705 9.265 9.62 9.505 9.45C9.745 9.27 9.865 8.985 9.865 8.595C9.865 8.115 9.7 7.7 9.37 7.35C9.04 7 8.64 6.68 8.17 6.39L9.055 6.345L9.7 6.21C9.84 6.33 9.995 6.475 10.165 6.645C10.335 6.815 10.47 6.985 10.57 7.155L10.645 7.44C10.775 7.63 10.875 7.83 10.945 8.04C11.015 8.25 11.05 8.48 11.05 8.73ZM11.29 6.75C11.77 6.75 12.185 6.715 12.535 6.645C12.885 6.565 13.295 6.44 13.765 6.27V7.35C13.335 7.54 12.945 7.665 12.595 7.725C12.255 7.785 11.88 7.815 11.47 7.815C11.32 7.815 11.145 7.805 10.945 7.785C10.745 7.755 10.555 7.725 10.375 7.695C10.205 7.655 10.08 7.62 10 7.59L9.295 6.75L9.385 6.525C9.675 6.595 9.98 6.65 10.3 6.69C10.62 6.73 10.95 6.75 11.29 6.75Z"
                            fill="#000"
                          />
                          <path
                            d="M19.63 22L18.426 18.906H14.464L13.274 22H12L15.906 11.962H17.04L20.932 22H19.63ZM18.048 17.786L16.928 14.762C16.9 14.6873 16.8533 14.552 16.788 14.356C16.7227 14.16 16.6573 13.9593 16.592 13.754C16.536 13.5393 16.4893 13.376 16.452 13.264C16.3773 13.5533 16.298 13.838 16.214 14.118C16.1393 14.3887 16.074 14.6033 16.018 14.762L14.884 17.786H18.048Z"
                            fill="#000"
                          />
                        </svg>{" "}
                        <span>English</span>
                      </button>
                      <ul className="language-menu">
                        <li>English</li>
                        <li>
                          Assamese <span>(অসমীয়া)</span>
                        </li>
                        <li>
                          Bengali <span>(বাংলা)</span>
                        </li>
                        <li>
                          Gujarati <span>(ગુજરાતી)</span>
                        </li>
                        <li>
                          Hindi <span>(हिंदी)</span>
                        </li>
                        <li>
                          Kannada <span>(ಕನ್ನಡ)</span>
                        </li>
                        <li>
                          Malayalam <span>(മലയാളം)</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language-toggle border-0">
                    <div className="customization_popup_trigger">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-label="Accessibility panal icon"
                        xmlns="http://www.w3.org/2000/svg"
                        className="jsx-4107003866"
                        onClick={TopOpen}
                      >
                        <path
                          d="M9.10943 11.1626C8.04754 11.1626 7.02744 11.1644 6.00735 11.1608C5.80813 11.1608 5.60625 11.1537 5.41059 11.1217C4.5817 10.9865 3.99295 10.2771 4.00006 9.43694C4.00718 8.61724 4.63684 7.89088 5.44883 7.77442C5.62403 7.74953 5.80279 7.74241 5.98067 7.74241C9.981 7.74064 13.9813 7.73886 17.9817 7.74508C18.2449 7.74508 18.5197 7.76642 18.7688 7.84377C19.5114 8.07403 19.9721 8.78171 19.9223 9.55963C19.8742 10.3118 19.2944 10.9794 18.5446 11.1101C18.2734 11.1572 17.9923 11.1581 17.7158 11.1599C16.7633 11.1652 15.8099 11.1617 14.7613 11.1617C14.82 12.0783 14.7666 12.9816 14.9543 13.8315C15.3945 15.823 15.9548 17.7878 16.4555 19.7659C16.6912 20.6985 16.1994 21.6044 15.3207 21.9032C14.3264 22.241 13.2796 21.6667 13.0279 20.6194C12.6864 19.196 12.368 17.7664 12.039 16.3404C12.0256 16.2817 12.0061 16.2248 11.9243 16.1652C11.7597 16.8818 11.5943 17.5993 11.4289 18.3159C11.2546 19.0724 11.0918 19.8317 10.9033 20.5847C10.6516 21.5867 9.71508 22.1485 8.73768 21.9058C7.79585 21.6711 7.22933 20.7127 7.47746 19.7303C7.92747 17.9451 8.35614 16.1537 8.86397 14.3845C9.16635 13.331 9.08898 12.2774 9.10854 11.1626H9.10943ZM11.9972 8.88306C10.0077 8.88306 8.01819 8.88306 6.0278 8.88306C5.8944 8.88306 5.75921 8.88039 5.62937 8.90173C5.33766 8.94796 5.14556 9.172 5.14289 9.4485C5.14022 9.73032 5.32165 9.94992 5.61692 10.0024C5.73609 10.0237 5.8606 10.0219 5.98244 10.0219C7.01588 10.0237 8.0502 10.0166 9.08364 10.0255C9.68307 10.0308 10.198 10.4051 10.2176 10.9394C10.2505 11.8587 10.3207 12.8011 10.1615 13.6955C9.91074 15.1002 9.48385 16.4737 9.12988 17.8607C8.94846 18.5701 8.75547 19.276 8.58026 19.9873C8.47976 20.3944 8.67898 20.7216 9.05162 20.8087C9.39669 20.8896 9.70708 20.6772 9.81469 20.2851C9.82359 20.2531 9.82625 20.2193 9.83337 20.1873C10.2336 18.435 10.632 16.6827 11.0393 14.9321C11.0865 14.7303 11.1514 14.5178 11.2661 14.3507C11.4636 14.0644 11.7659 13.948 12.1137 14.0129C12.5166 14.0884 12.7522 14.3418 12.8438 14.7392C13.2574 16.5449 13.6736 18.3505 14.089 20.1562C14.0961 20.1882 14.0978 20.2229 14.1058 20.2549C14.2108 20.6709 14.5221 20.895 14.876 20.8114C15.2602 20.7207 15.4479 20.3864 15.3394 19.957C15.0744 18.9142 14.804 17.8722 14.5319 16.8311C14.0578 15.0184 13.5002 13.2252 13.6656 11.3048C13.7385 10.4522 14.1085 10.0237 14.9739 10.021C15.9628 10.0184 16.9527 10.021 17.9417 10.0202C18.0528 10.0202 18.1649 10.0219 18.2734 10.0033C18.5989 9.94814 18.7999 9.70543 18.7821 9.40493C18.7643 9.11244 18.5589 8.91507 18.2334 8.88662C18.1231 8.87684 18.011 8.88039 17.8999 8.88039C15.9326 8.88039 13.9653 8.88039 11.9972 8.88039V8.88306Z"
                          fill="#000"
                          className="jsx-4107003866"
                        />
                        <path
                          d="M11.8704 6.62963C10.5698 6.62692 9.54923 5.59711 9.55557 4.29402C9.56192 3.02713 10.6133 1.9928 11.8876 2.00004C13.1583 2.00818 14.1879 3.05065 14.1852 4.3275C14.1824 5.60707 13.1519 6.63144 11.8704 6.62872V6.62963ZM13.026 4.31031C13.0214 3.67415 12.4867 3.1502 11.8522 3.15925C11.2296 3.16829 10.7157 3.68953 10.7148 4.31121C10.713 4.96185 11.2205 5.46861 11.8713 5.46771C12.5238 5.4668 13.0314 4.95733 13.026 4.3094V4.31031Z"
                          fill="#000"
                          className="jsx-4107003866"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className={`customization_popup ${isSTop ? "is-visible" : ""}`}
                role="alert"
              >
                <div className="customization_popup_container">
                  <a
                    onClick={() => setIsSTop(false)}
                    className="customization_popup_close img-replace"
                  >
                    X
                  </a>
                  <div className="mt-5 pop-box-contain">
                    <h3>
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-label="Accessibility panal icon"
                        xmlns="http://www.w3.org/2000/svg"
                        className="jsx-4107003866"
                      >
                        <path
                          d="M9.10943 11.1626C8.04754 11.1626 7.02744 11.1644 6.00735 11.1608C5.80813 11.1608 5.60625 11.1537 5.41059 11.1217C4.5817 10.9865 3.99295 10.2771 4.00006 9.43694C4.00718 8.61724 4.63684 7.89088 5.44883 7.77442C5.62403 7.74953 5.80279 7.74241 5.98067 7.74241C9.981 7.74064 13.9813 7.73886 17.9817 7.74508C18.2449 7.74508 18.5197 7.76642 18.7688 7.84377C19.5114 8.07403 19.9721 8.78171 19.9223 9.55963C19.8742 10.3118 19.2944 10.9794 18.5446 11.1101C18.2734 11.1572 17.9923 11.1581 17.7158 11.1599C16.7633 11.1652 15.8099 11.1617 14.7613 11.1617C14.82 12.0783 14.7666 12.9816 14.9543 13.8315C15.3945 15.823 15.9548 17.7878 16.4555 19.7659C16.6912 20.6985 16.1994 21.6044 15.3207 21.9032C14.3264 22.241 13.2796 21.6667 13.0279 20.6194C12.6864 19.196 12.368 17.7664 12.039 16.3404C12.0256 16.2817 12.0061 16.2248 11.9243 16.1652C11.7597 16.8818 11.5943 17.5993 11.4289 18.3159C11.2546 19.0724 11.0918 19.8317 10.9033 20.5847C10.6516 21.5867 9.71508 22.1485 8.73768 21.9058C7.79585 21.6711 7.22933 20.7127 7.47746 19.7303C7.92747 17.9451 8.35614 16.1537 8.86397 14.3845C9.16635 13.331 9.08898 12.2774 9.10854 11.1626H9.10943ZM11.9972 8.88306C10.0077 8.88306 8.01819 8.88306 6.0278 8.88306C5.8944 8.88306 5.75921 8.88039 5.62937 8.90173C5.33766 8.94796 5.14556 9.172 5.14289 9.4485C5.14022 9.73032 5.32165 9.94992 5.61692 10.0024C5.73609 10.0237 5.8606 10.0219 5.98244 10.0219C7.01588 10.0237 8.0502 10.0166 9.08364 10.0255C9.68307 10.0308 10.198 10.4051 10.2176 10.9394C10.2505 11.8587 10.3207 12.8011 10.1615 13.6955C9.91074 15.1002 9.48385 16.4737 9.12988 17.8607C8.94846 18.5701 8.75547 19.276 8.58026 19.9873C8.47976 20.3944 8.67898 20.7216 9.05162 20.8087C9.39669 20.8896 9.70708 20.6772 9.81469 20.2851C9.82359 20.2531 9.82625 20.2193 9.83337 20.1873C10.2336 18.435 10.632 16.6827 11.0393 14.9321C11.0865 14.7303 11.1514 14.5178 11.2661 14.3507C11.4636 14.0644 11.7659 13.948 12.1137 14.0129C12.5166 14.0884 12.7522 14.3418 12.8438 14.7392C13.2574 16.5449 13.6736 18.3505 14.089 20.1562C14.0961 20.1882 14.0978 20.2229 14.1058 20.2549C14.2108 20.6709 14.5221 20.895 14.876 20.8114C15.2602 20.7207 15.4479 20.3864 15.3394 19.957C15.0744 18.9142 14.804 17.8722 14.5319 16.8311C14.0578 15.0184 13.5002 13.2252 13.6656 11.3048C13.7385 10.4522 14.1085 10.0237 14.9739 10.021C15.9628 10.0184 16.9527 10.021 17.9417 10.0202C18.0528 10.0202 18.1649 10.0219 18.2734 10.0033C18.5989 9.94814 18.7999 9.70543 18.7821 9.40493C18.7643 9.11244 18.5589 8.91507 18.2334 8.88662C18.1231 8.87684 18.011 8.88039 17.8999 8.88039C15.9326 8.88039 13.9653 8.88039 11.9972 8.88039V8.88306Z"
                          fill="#002147"
                          className="jsx-4107003866"
                        />
                        <path
                          d="M11.8704 6.62963C10.5698 6.62692 9.54923 5.59711 9.55557 4.29402C9.56192 3.02713 10.6133 1.9928 11.8876 2.00004C13.1583 2.00818 14.1879 3.05065 14.1852 4.3275C14.1824 5.60707 13.1519 6.63144 11.8704 6.62872V6.62963ZM13.026 4.31031C13.0214 3.67415 12.4867 3.1502 11.8522 3.15925C11.2296 3.16829 10.7157 3.68953 10.7148 4.31121C10.713 4.96185 11.2205 5.46861 11.8713 5.46771C12.5238 5.4668 13.0314 4.95733 13.026 4.3094V4.31031Z"
                          fill="#002147"
                          className="jsx-4107003866"
                        />
                      </svg>{" "}
                      Accessibility Controls
                    </h3>
                    <div className="popup-side">
                      <div
                        className="pop-body-text"
                        onClick={toggle("contrast")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={48}
                          height={48}
                          viewBox="0 -960 960 960"
                          fill="#002147"
                        >
                          <path d="M480-288.46 531.54-340H620v-88.46L671.54-480 620-531.54V-620h-88.46L480-671.54 428.46-620H340v88.46L288.46-480 340-428.46V-340h88.46L480-288.46Zm0-81.54v-220q45.77 0 77.88 32.12Q590-525.77 590-480q0 45.77-32.12 77.88Q525.77-370 480-370ZM172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM160-240v-480 480Z"></path>
                        </svg>
                        <p>Dark Contrast </p>
                      </div>
                      <div className="pop-body-text" onClick={toggle("invert")}>
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="contrast">
                            <mask
                              id="mask0_69_158538"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={40}
                              height={40}
                            >
                              <rect
                                id="Bounding box"
                                width={40}
                                height={40}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158538)">
                              <path
                                id="contrast_2"
                                d="M20.0004 36.9458C17.6572 36.9458 15.4553 36.5016 13.3948 35.6131C11.3343 34.7247 9.5401 33.5166 8.01219 31.9889C6.48424 30.4611 5.27601 28.6668 4.38748 26.606C3.49895 24.5451 3.05469 22.3432 3.05469 20.0001C3.05469 17.6569 3.49938 15.4549 4.38877 13.3939C5.27816 11.3329 6.48615 9.5391 8.01273 8.01252C9.53931 6.48596 11.3332 5.27688 13.3943 4.38527C15.4554 3.49366 17.6577 3.04785 20.0012 3.04785C22.3447 3.04785 24.5467 3.49366 26.6073 4.38527C28.6678 5.27688 30.4614 6.48596 31.988 8.01252C33.5145 9.5391 34.7236 11.3329 35.6152 13.3941C36.5068 15.4552 36.9526 17.6575 36.9526 20.001C36.9526 22.3444 36.5068 24.5465 35.6152 26.6071C34.7236 28.6676 33.5145 30.4612 31.988 31.9878C30.4614 33.5144 28.6676 34.7223 26.6067 35.6117C24.5458 36.5011 22.3437 36.9458 20.0004 36.9458ZM21.2111 33.7278C24.8013 33.386 27.7952 31.9302 30.193 29.3604C32.5907 26.7906 33.7896 23.6705 33.7896 20.0003C33.7896 16.3483 32.5907 13.2344 30.193 10.6587C27.7952 8.08296 24.8013 6.622 21.2111 6.27581V33.7278Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Invert </p>
                      </div>
                      <div
                        className="pop-body-text"
                        onClick={toggle("saturation")}
                      >
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="invert_colors">
                            <mask
                              id="mask0_69_158549"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={40}
                              height={40}
                            >
                              <rect
                                id="Bounding box"
                                width={40}
                                height={40}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158549)">
                              <path
                                id="invert_colors_2"
                                d="M19.9975 35.2788C16.2495 35.2788 13.0441 33.9788 10.3811 31.3788C7.71819 28.7788 6.38672 25.6112 6.38672 21.876C6.38672 20.0038 6.74004 18.2632 7.44668 16.6541C8.15329 15.045 9.13541 13.6183 10.3931 12.3739L18.3276 4.5644C18.5649 4.32971 18.8309 4.15711 19.1256 4.04661C19.4202 3.93611 19.7114 3.88086 19.9991 3.88086C20.2867 3.88086 20.5779 3.93611 20.8726 4.04661C21.1672 4.15711 21.4332 4.32971 21.6706 4.5644L29.6051 12.3739C30.863 13.6166 31.8463 15.043 32.555 16.6531C33.2637 18.2632 33.618 20.0036 33.618 21.8742C33.618 25.5914 32.2896 28.7548 29.6326 31.3644C26.9757 33.974 23.764 35.2788 19.9975 35.2788ZM19.9991 32.1224V7.36482L12.5476 14.7151C11.568 15.6807 10.8223 16.7586 10.3106 17.9488C9.79897 19.139 9.54314 20.4475 9.54314 21.8742C9.54314 24.7279 10.565 27.1494 12.6088 29.1386C14.6526 31.1278 17.116 32.1224 19.9991 32.1224Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Saturation </p>
                      </div>
                      <div className="pop-body-text" onClick={incText}>
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="text_increase">
                            <mask
                              id="mask0_69_158560"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={40}
                              height={40}
                            >
                              <rect
                                id="Bounding box"
                                width={40}
                                height={40}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158560)">
                              <path
                                id="text_increase_2"
                                d="M7.49716 25.6365L5.63303 30.5528C5.50381 30.8898 5.29493 31.1596 5.00641 31.3623C4.71788 31.565 4.39524 31.6663 4.03849 31.6663C3.40955 31.6663 2.92114 31.4076 2.57328 30.8902C2.22542 30.3728 2.16885 29.8238 2.40357 29.2433L10.2112 9.50601C10.3612 9.14831 10.5899 8.8634 10.8973 8.65126C11.2047 8.43909 11.5378 8.33301 11.8964 8.33301H13.3878C13.7659 8.33301 14.1055 8.43963 14.4065 8.65288C14.7075 8.86616 14.933 9.15385 15.0829 9.51597L22.8214 29.2618C23.0565 29.8445 22.9949 30.3909 22.6377 30.9011C22.2804 31.4113 21.7939 31.6663 21.1781 31.6663C20.7934 31.6663 20.446 31.5599 20.1359 31.3471C19.8259 31.1343 19.6039 30.8446 19.47 30.4779L17.6774 25.6365H7.49716ZM8.59982 22.6108H16.5748L12.6785 12.07H12.5156L8.59982 22.6108ZM30.2439 21.5114H26.4778C26.0495 21.5114 25.6904 21.3662 25.4007 21.0758C25.1109 20.7854 24.9661 20.4255 24.9661 19.9962C24.9661 19.5669 25.1109 19.2082 25.4007 18.92C25.6904 18.632 26.0495 18.4879 26.4778 18.4879H30.2439V14.7219C30.2439 14.2905 30.3907 13.9306 30.6844 13.6424C30.9781 13.3542 31.3401 13.2101 31.7704 13.2101C32.2008 13.2101 32.5595 13.3542 32.8467 13.6424C33.1338 13.9306 33.2774 14.2905 33.2774 14.7219V18.4879H37.0434C37.4717 18.4879 37.8307 18.6331 38.1205 18.9235C38.4103 19.214 38.5552 19.5738 38.5552 20.0031C38.5552 20.4325 38.4103 20.7912 38.1205 21.0793C37.8307 21.3674 37.4717 21.5114 37.0434 21.5114H33.2774V25.2775C33.2774 25.7089 33.1328 26.0687 32.8437 26.3569C32.5545 26.6451 32.1935 26.7892 31.7607 26.7892C31.3304 26.7892 30.97 26.6428 30.6795 26.35C30.3891 26.0573 30.2439 25.6965 30.2439 25.2675V21.5114Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Text Size Increase </p>
                      </div>
                      <div className="pop-body-text" onClick={decText}>
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="text_decrease">
                            <mask
                              id="mask0_69_157790"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={40}
                              height={40}
                            >
                              <rect
                                id="Bounding box"
                                width={40}
                                height={40}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_157790)">
                              <path
                                id="text_decrease_2"
                                d="M26.8224 21.5114C26.3919 21.5114 26.0324 21.3672 25.7437 21.0788C25.455 20.7904 25.3107 20.4311 25.3107 20.0011C25.3107 19.571 25.455 19.2113 25.7437 18.9219C26.0324 18.6326 26.3919 18.4879 26.8224 18.4879H37.0438C37.4742 18.4879 37.8338 18.6321 38.1225 18.9206C38.4112 19.209 38.5555 19.5682 38.5555 19.9983C38.5555 20.4283 38.4112 20.7881 38.1225 21.0774C37.8338 21.3668 37.4742 21.5114 37.0438 21.5114H26.8224ZM7.49754 25.6365L5.63342 30.5528C5.5042 30.8898 5.29611 31.1596 5.00917 31.3623C4.72222 31.565 4.39881 31.6663 4.03892 31.6663C3.40661 31.6663 2.91736 31.4076 2.57117 30.8902C2.225 30.3728 2.16927 29.8238 2.40396 29.2433L10.2116 9.50601C10.3616 9.14831 10.588 8.8634 10.891 8.65126C11.1939 8.43909 11.5292 8.33301 11.8968 8.33301H13.3882C13.758 8.33301 14.0955 8.43963 14.4007 8.65288C14.7058 8.86616 14.9333 9.15385 15.0833 9.51597L22.8218 29.2618C23.0565 29.8445 22.9957 30.3909 22.6393 30.9011C22.2829 31.4113 21.7966 31.6663 21.1803 31.6663C20.7943 31.6663 20.4473 31.5612 20.1392 31.3508C19.8311 31.1405 19.6081 30.8495 19.4704 30.4779L17.6778 25.6365H7.49754ZM8.60021 22.6108H16.5752L12.6836 12.07H12.516L8.60021 22.6108Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Text Size Descrease </p>
                      </div>
                      <div
                        className="pop-body-text"
                        onClick={toggle("highlightLinks")}
                      >
                        <svg
                          width={48}
                          height={48}
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="link">
                            <mask
                              id="mask0_69_158582"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={48}
                              height={48}
                            >
                              <rect
                                id="Bounding box"
                                width={48}
                                height={48}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158582)">
                              <path
                                id="link_2"
                                d="M42.3116 36.4699L38.8931 33.0634V9.10795H14.9377L11.5312 5.68945H38.8931C39.8163 5.68945 40.6169 6.0284 41.2948 6.7063C41.9727 7.38417 42.3116 8.18472 42.3116 9.10795V36.4699ZM9.10831 42.2993C8.18834 42.2993 7.39059 41.9615 6.71506 41.286C6.03956 40.6105 5.70181 39.8127 5.70181 38.8928V10.7928L3.56591 8.65685C3.24998 8.34092 3.09001 7.96665 3.08601 7.53405C3.08201 7.10145 3.24001 6.72717 3.56001 6.4112C3.88001 6.0873 4.25528 6.92535 4.68581 6.92535C5.11635 6.92535 5.49159 6.0873 5.81156 6.4112L41.6399 42.2395C41.9558 42.5554 42.1158 42.9194 42.1198 43.3314C42.1237 43.7433 41.9638 44.1112 41.6399 44.4352C41.3239 44.7511 40.9496 44.9091 40.517 44.9091C40.0844 44.9091 39.7101 44.7511 39.3942 44.4352L37.2083 42.2993H9.10831ZM29.229 34.258H13.3366C12.9907 34.258 12.7427 34.1062 12.5924 33.8027C12.4421 33.4991 12.479 33.1951 12.7029 32.8906L16.8594 27.458C17.034 27.2341 17.254 27.1181 17.5192 27.1102C17.7844 27.1022 18.0123 27.2102 18.2029 27.4341L22.3007 32.8525L24.717 29.746L9.10831 14.1493V38.8928H33.8518L29.229 34.258Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Highlight Links </p>
                      </div>
                      <div
                        className="pop-body-text"
                        onClick={toggle("hideImages")}
                      >
                        <svg
                          width={48}
                          height={48}
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="hide_image">
                            <mask
                              id="mask0_69_158626"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={48}
                              height={48}
                            >
                              <rect
                                id="Bounding box"
                                width={48}
                                height={48}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158626)">
                              <path
                                id="hide_image_2"
                                d="M42.3116 36.4699L38.8931 33.0634V9.10795H14.9377L11.5312 5.68945H38.8931C39.8163 5.68945 40.6169 6.0284 41.2948 6.7063C41.9727 7.38417 42.3116 8.18472 42.3116 9.10795V36.4699ZM9.10831 42.2993C8.18834 42.2993 7.39059 41.9615 6.71506 41.286C6.03956 40.6105 5.70181 39.8127 5.70181 38.8928V10.7928L3.56591 8.65685C3.24998 8.34092 3.09001 7.96665 3.08601 7.53405C3.08201 7.10145 3.24001 6.72717 3.56001 6.4112C3.88001 6.0873 4.25528 6.92535 4.68581 6.92535C5.11635 6.92535 5.49159 6.0873 5.81156 6.4112L41.6399 42.2395C41.9558 42.5554 42.1158 42.9194 42.1198 43.3314C42.1237 43.7433 41.9638 44.1112 41.6399 44.4352C41.3239 44.7511 40.9496 44.9091 40.517 44.9091C40.0844 44.9091 39.7101 44.7511 39.3942 44.4352L37.2083 42.2993H9.10831ZM29.229 34.258H13.3366C12.9907 34.258 12.7427 34.1062 12.5924 33.8027C12.4421 33.4991 12.479 33.1951 12.7029 32.8906L16.8594 27.458C17.034 27.2341 17.254 27.1181 17.5192 27.1102C17.7844 27.1022 18.0123 27.2102 18.2029 27.4341L22.3007 32.8525L24.717 29.746L9.10831 14.1493V38.8928H33.8518L29.229 34.258Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Hide Images </p>
                      </div>
                      <div
                        className="pop-body-text"
                        onClick={toggle("defaultCursor")}
                      >
                        <svg
                          width={48}
                          height={48}
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="web_traffic">
                            <mask
                              id="mask0_69_158637"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x={0}
                              y={0}
                              width={48}
                              height={48}
                            >
                              <rect
                                id="Bounding box"
                                width={48}
                                height={48}
                                fill="#D9D9D9"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_69_158637)">
                              <path
                                id="web_traffic_2"
                                d="M7.48967 21.2779H10.7777C11.227 21.2779 11.6013 21.4256 11.9006 21.7209C12.1998 22.0162 12.3495 22.3924 12.3495 22.8497C12.3495 23.3069 12.2018 23.6832 11.9065 23.9785C11.6113 24.2738 11.235 24.4214 10.7777 24.4214H7.48967C7.0404 24.4214 6.66614 24.2738 6.36687 23.9785C6.0676 23.6832 5.91797 23.3069 5.91797 22.8497C5.91797 22.3924 6.0656 22.0162 6.36087 21.7209C6.65617 21.4256 7.03244 21.2779 7.48967 21.2779ZM10.6299 32.9236L13.0299 30.5116C13.3125 30.237 13.6638 30.0997 14.0837 30.0997C14.5037 30.0997 14.8549 30.237 15.1375 30.5116C15.4122 30.7942 15.5495 31.1455 15.5495 31.5654C15.5495 31.9853 15.4082 32.3366 15.1256 32.6192L12.7256 35.0192C12.4429 35.2938 12.0917 35.4332 11.6718 35.4372C11.2518 35.4412 10.9046 35.3018 10.6299 35.0192C10.3473 34.7366 10.208 34.3873 10.212 33.9714C10.216 33.5555 10.3553 33.2062 10.6299 32.9236ZM13.0299 15.0258L10.6299 12.6258C10.3553 12.3431 10.216 11.9919 10.212 11.572C10.208 11.152 10.3473 10.8008 10.6299 10.5182C10.9125 10.2435 11.2618 10.1062 11.6777 10.1062C12.0937 10.1062 12.4429 10.2475 12.7256 10.5301L15.1375 12.9301C15.4122 13.2127 15.5495 13.564 15.5495 13.9839C15.5495 14.4038 15.4122 14.7511 15.1375 15.0258C14.8549 15.3084 14.5017 15.4497 14.0777 15.4497C13.6538 15.4497 13.3046 15.3084 13.0299 15.0258ZM36.3321 39.5856L27.9582 31.2116L26.544 35.5421C26.4694 35.7406 26.3618 35.8939 26.2212 36.0019C26.0807 36.1098 25.9191 36.1638 25.7364 36.1638C25.5538 36.1638 25.3859 36.1098 25.2326 36.0019C25.0794 35.8939 24.9694 35.7406 24.9027 35.5421L20.9788 21.8203C20.9042 21.5631 20.8959 21.3288 20.9538 21.1176C21.0118 20.9064 21.1321 20.7221 21.3147 20.5649C21.4973 20.4076 21.6879 20.302 21.8864 20.248C22.085 20.194 22.3169 20.2044 22.5821 20.279L36.0919 24.541C36.2824 24.6156 36.4357 24.7212 36.5517 24.8578C36.6676 24.9944 36.7256 25.158 36.7256 25.3486C36.7256 25.5312 36.6779 25.6908 36.5826 25.8274C36.4874 25.964 36.3444 26.0696 36.1538 26.1442L31.4495 27.8084L39.7734 36.1323C40.1133 36.4721 40.2832 36.8739 40.2832 37.3377C40.2832 37.8015 40.1133 38.2033 39.7734 38.5432L38.731 39.5856C38.3912 39.9254 37.9913 40.0933 37.5316 40.0894C37.0718 40.0854 36.6719 39.9174 36.3321 39.5856ZM21.7777 10.7279V7.43987C21.7777 6.9906 21.9254 6.61633 22.2207 6.31707C22.516 6.0178 22.8922 5.86816 23.3495 5.86816C23.8067 5.86816 24.183 6.0158 24.4783 6.31107C24.7736 6.60637 24.9212 6.98263 24.9212 7.43987V10.7279C24.9212 11.1772 24.7736 11.5515 24.4783 11.8508C24.183 12.15 23.8067 12.2997 23.3495 12.2997C22.8922 12.2997 22.516 12.152 22.2207 11.8567C21.9254 11.5614 21.7777 11.1852 21.7777 10.7279ZM31.5734 12.9301L33.9734 10.5301C34.256 10.2475 34.6073 10.1082 35.0272 10.1122C35.4471 10.1162 35.7984 10.2595 36.081 10.5421C36.3556 10.8247 36.493 11.1719 36.493 11.5839C36.493 11.9958 36.3517 12.3431 36.069 12.6258L33.669 15.0258C33.3864 15.3084 33.0352 15.4497 32.6152 15.4497C32.1953 15.4497 31.848 15.3084 31.5734 15.0258C31.2908 14.7511 31.1495 14.4038 31.1495 13.9839C31.1495 13.564 31.2908 13.2127 31.5734 12.9301Z"
                                fill="#002147"
                              />
                            </g>
                          </g>
                        </svg>
                        <p>Default Cursor </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    [isSTop, TopOpen, toggle, incText, decText]
  );

  return (
    <>
      {topBarSection}
      {mobileMenu}
      {logoSection}
      {mainMenu}
    </>
  );
};

export default memo(Header);
