import React, { FC, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowUpShort } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scroll-to-top.css'; // import your CSS file

interface ScrollToTopProps { }

const ScrollToTop: FC<ScrollToTopProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible &&
        <Button onClick={scrollToTop} className="scrollToTopBtn btn-lg" variant="primary">
          <BsArrowUpShort id="backtotop" /> Back to top
        </Button>}
    </div>
  );
};

export default ScrollToTop;
