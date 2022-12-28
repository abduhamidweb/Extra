import React from 'react';
import Appetizer from '../../Pages/Home/HomeNavigatePages/Appetizer';
import Colddishes from '../../Pages/Home/HomeNavigatePages/Colddishes';
import Desert from '../../Pages/Home/HomeNavigatePages/Desert';
import Grill from '../../Pages/Home/HomeNavigatePages/Grill';
import HotDishes from '../../Pages/Home/HomeNavigatePages/HotDishes';
import Soup from '../../Pages/Home/HomeNavigatePages/Soup';
import "./NavigateLinks.css"
const NavigateLinks = () => {
    return (
      <>
        {/* <!-- Tabs navs --> */}
        <ul className="nav nav-tabs mb-3 nav-tabs2" id="ex1" role="tablist">
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link active"
              id="ex2-tab-1"
              data-mdb-toggle="tab"
              href="#ex2-tabs-1"
              role="tab"
              aria-controls="ex2-tabs-1"
              aria-selected="true"
            >
              Hot Dishes
            </a>
          </li>
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link"
              id="ex2-tab-2"
              data-mdb-toggle="tab"
              href="#ex2-tabs-2"
              role="tab"
              aria-controls="ex2-tabs-2"
              aria-selected="false"
            >
              Cold Dishes
            </a>
          </li>
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link"
              id="ex2-tab-3"
              data-mdb-toggle="tab"
              href="#ex2-tabs-3"
              role="tab"
              aria-controls="ex2-tabs-3"
              aria-selected="false"
            >
              Soup
            </a>
          </li>
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link"
              id="ex2-tab-4"
              data-mdb-toggle="tab"
              href="#ex2-tabs-4"
              role="tab"
              aria-controls="ex2-tabs-4"
              aria-selected="false"
            >
              Grill
            </a>
          </li>
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link"
              id="ex2-tab-5"
              data-mdb-toggle="tab"
              href="#ex2-tabs-5"
              role="tab"
              aria-controls="ex2-tabs-5"
              aria-selected="false"
            >
              Appetizer
            </a>
          </li>
          <li className="nav-item nav-itemm2" role="presentation">
            <a
              className="nav-link"
              id="ex2-tab-6"
              data-mdb-toggle="tab"
              href="#ex2-tabs-6"
              role="tab"
              aria-controls="ex2-tabs-6"
              aria-selected="false"
            >
              Dessert
            </a>
          </li>
        </ul>
        {/* <!-- Tabs navs --> */}

        {/* <!-- Tabs content --> */}
        <div className="tab-content" id="ex1-content">
          <div
            className="tab-pane fade show active"
            id="ex2-tabs-1"
            role="tabpanel"
            aria-labelledby="ex2-tab-1"
          >
            <HotDishes />
          </div>
          <div
            className="tab-pane fade"
            id="ex2-tabs-2"
            role="tabpanel"
            aria-labelledby="ex2-tab-2"
          >
           <Colddishes/>
          </div>
          <div
            className="tab-pane fade"
            id="ex2-tabs-3"
            role="tabpanel"
            aria-labelledby="ex2-tab-3"
          >
            <Soup/>
          </div>
          <div
            className="tab-pane fade"
            id="ex2-tabs-4"
            role="tabpanel"
            aria-labelledby="ex2-tab-4"
          >
           <Grill/>
          </div>
          <div
            className="tab-pane fade"
            id="ex2-tabs-5"
            role="tabpanel"
            aria-labelledby="ex2-tab-5"
          >
            <Appetizer/>
          </div>
          <div
            className="tab-pane fade"
            id="ex2-tabs-6"
            role="tabpanel"
            aria-labelledby="ex2-tab-6"
          >
            <Desert/>
          </div>
        </div>
        {/* <!-- Tabs content --> */}
      </>
    );
};

export default NavigateLinks;