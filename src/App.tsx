import './App.scss';

import React from 'react';

function App() {
  return (
    <div className="main">
      <div className="sidebar-left">
        <div className="sidebar-left-item">
          <svg
            className="sidebar-left-item-icon"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00003 1.28302L1.89973 5.0222V14.8432H5.76483V9.54529H10.2689V14.8432H14.1003V4.99521L8.00003 1.28302ZM8.00003 0.399994L14.818 4.41583V15.6H9.5513V10.3021H6.48249V15.6H1.18207V4.45187L8.00003 0.399994Z"
              fill="white"
            />
          </svg>
          <a>Home</a>
        </div>
        <div className="sidebar-left-item">
          <svg
            className="sidebar-left-item-icon"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_38)">
              <path
                d="M11.776 10.8473L15.0201 14.6494L13.9039 15.6L10.6685 11.8065C9.62206 12.5042 8.46803 12.853 7.20642 12.853C6.36342 12.853 5.55676 12.6888 4.78646 12.3603C4.01616 12.0318 3.35339 11.59 2.79815 11.0348C2.24292 10.4796 1.80108 9.81679 1.47263 9.04646C1.14418 8.27614 0.979942 7.46948 0.979919 6.6265C0.979897 5.78351 1.14413 4.97686 1.47263 4.20654C1.80112 3.43621 2.24296 2.77344 2.79815 2.21823C3.35334 1.66302 4.01611 1.22117 4.78646 0.892701C5.55681 0.56423 6.36346 0.399994 7.20642 0.399994C8.04938 0.399994 8.85604 0.56423 9.62639 0.892701C10.3967 1.22117 11.0595 1.66302 11.6147 2.21823C12.1699 2.77344 12.6117 3.43621 12.9402 4.20654C13.2687 4.97686 13.433 5.78351 13.4329 6.6265C13.4329 7.16136 13.3661 7.68459 13.2324 8.1962C13.0987 8.7078 12.9083 9.18453 12.6612 9.62638C12.4141 10.0682 12.119 10.4752 11.776 10.8473H11.776ZM7.20646 11.3879C7.85177 11.3879 8.46803 11.2614 9.05522 11.0085C9.64241 10.7556 10.1482 10.417 10.5726 9.99259C10.997 9.56821 11.3356 9.06242 11.5885 8.47522C11.8414 7.88803 11.9679 7.27178 11.9679 6.62646C11.9679 5.98115 11.8414 5.3649 11.5885 4.7777C11.3356 4.19051 10.997 3.68471 10.5726 3.2603C10.1482 2.83589 9.64241 2.49724 9.05522 2.24436C8.46803 1.99148 7.85177 1.86503 7.20646 1.86503C6.56114 1.86503 5.94489 1.99148 5.3577 2.24436C4.77051 2.49724 4.2647 2.8359 3.84029 3.26033C3.41588 3.68477 3.07724 4.19056 2.82435 4.7777C2.57147 5.36485 2.44503 5.9811 2.44503 6.62646C2.44503 7.27182 2.57147 7.88808 2.82435 8.47522C3.07724 9.06237 3.41589 9.56816 3.84033 9.99259C4.26476 10.417 4.77055 10.7557 5.3577 11.0085C5.94484 11.2614 6.5611 11.3878 7.20646 11.3879Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_38">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <a>Search</a>
        </div>
        <div className="sidebar-left-item">
          <svg
            className="sidebar-left-item-icon"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_42)">
              <path
                d="M9.49577 0.82869L15.6 14.5376L14.1648 15.1713L8.06058 1.46242L9.49577 0.82869ZM0.399994 15.0036V0.912575H1.96564V15.0036H0.399994ZM4.31417 15.0036V0.912575H5.87985V15.0036H4.31421H4.31417Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_42">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <a>Your Library</a>
        </div>
        <div className="sidebar-left-item">
          <svg
            className="sidebar-left-item-icon"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_30)">
              <path
                d="M8 0.400002C3.80502 0.400002 0.400002 3.80502 0.400002 8C0.400002 12.2041 3.80502 15.6 8 15.6C12.2041 15.6 15.6 12.195 15.6 8C15.6 3.80502 12.2041 0.400002 8 0.400002ZM11.4777 11.3687C11.3505 11.5957 11.06 11.6593 10.8421 11.5231C9.04421 10.4335 6.80144 10.1883 4.15006 10.7967C3.89582 10.8421 3.64158 10.6877 3.5871 10.4335C3.56894 10.1792 3.7233 9.92497 3.9503 9.87049C6.85592 9.20765 9.36201 9.48913 11.3596 10.7149C11.5957 10.8511 11.6683 11.1417 11.5231 11.3687H11.4777ZM12.4311 9.29845C12.2495 9.57085 11.8863 9.66165 11.6139 9.49821C9.57085 8.227 6.45639 7.8638 4.0411 8.60837C3.75054 8.69917 3.4055 8.51756 3.3147 8.21792C3.2239 7.91828 3.4055 7.58232 3.73238 7.49152C6.49271 6.67431 9.92497 7.08292 12.2676 8.49032C12.54 8.67193 12.6308 9.03513 12.4492 9.30753L12.4311 9.29845ZM12.5219 7.1374C10.0703 5.68459 6.02055 5.54839 3.6779 6.25663C3.3147 6.37467 2.93334 6.16583 2.81529 5.78447C2.69725 5.42127 2.90609 5.01267 3.28746 4.89463C5.97515 4.07742 10.4425 4.24086 13.2574 5.91159C13.5933 6.11135 13.7114 6.54719 13.5025 6.88316C13.3209 7.2282 12.8669 7.33716 12.54 7.1374H12.5219Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_30">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <a>Premium</a>
        </div>
      </div>
      <div className="container">
        <div className="artist__header">
          <h1 className="artist__header-title">Twenty One Pilots</h1>
          <p>123123123 mothly listeners</p>
        </div>
        <div className="artist__status">
          <a className="artist__status-play">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="28" fill="#1DB954" />
              <path d="M21 38.5L39.375 28L21 17.5V38.5Z" fill="white" />
            </svg>
          </a>
          <div>
            <button className="artist__status-follow">FOLLOWING</button>
          </div>
        </div>
        <div className="artist__songs">
          <div className="artist__songs-popular">
            <h2>Popular</h2>
            <div className="artist__songs-popular-top">
              <div className="artist__songs-popular-top-item">
                <div className="artist__songs-popular-top-item-icon">
                  <p>4</p>
                  <img alt="p" src="/assets/albom.jpg"></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">Stressed Out</span>
                  <span className="views">41452345234</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
              <div className="artist__songs-popular-top-item">
                <div className="artist__songs-popular-top-item-icon">
                  <p>4</p>
                  <img alt="p" src="/assets/albom.jpg"></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">Stressed Out</span>
                  <span className="views">41452345234</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
              <div className="artist__songs-popular-top-item">
                <div className="artist__songs-popular-top-item-icon">
                  <p>4</p>
                  <img alt="p" src="/assets/albom.jpg"></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">Stressed Out</span>
                  <span className="views">41452345234</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
              <div className="artist__songs-popular-top-item">
                <div className="artist__songs-popular-top-item-icon">
                  <p>4</p>
                  <img alt="p" src="/assets/albom.jpg"></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">Stressed Out</span>
                  <span className="views">41452345234</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
              <div className="artist__songs-popular-top-item">
                <div className="artist__songs-popular-top-item-icon">
                  <p>4</p>
                  <img alt="p" src="/assets/albom.jpg"></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">Stressed Out</span>
                  <span className="views">41452345234</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
            </div>
            <a>SEE MORE</a>
          </div>
          <div className="artist__songs-liked">
            <h2>Liked Songs</h2>
            <div className="artist__songs-liked-inner">
              <img src="/assets/albom.jpg" alt="p" />
              <div>
                <h2>Youve liked 4 songs</h2>
                <p>by Twenty One Pilots</p>
              </div>
            </div>
          </div>
        </div>
        <div className="artist__alboms">
          <h2 className="artist__alboms-title">Popular releases</h2>
          <div className="artist__alboms-list">
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
            <div className="artist__alboms-list-item">
              <img src="/assets/albom.jpg" alt="p" />
              <h3>Blurryface</h3>
              <p>2015</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-right"></div>
    </div>
  );
}

export default App;
