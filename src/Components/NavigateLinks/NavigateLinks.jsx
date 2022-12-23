import React from 'react';
import NavigateLink from "../../Components/NavigateLink/NavigateLink";
import "./NavigateLinks.css"
const NavigateLinks = () => {
    return (
      <>
        {/* <!-- Tabs navs --> */}
        <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              Tab 1
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-2"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              Tab 2
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-3"
              data-mdb-toggle="tab"
              href="#ex1-tabs-3"
              role="tab"
              aria-controls="ex1-tabs-3"
              aria-selected="false"
            >
              Tab 3
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-4"
              data-mdb-toggle="tab"
              href="#ex1-tabs-4"
              role="tab"
              aria-controls="ex1-tabs-4"
              aria-selected="false"
            >
              Tab 4
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-5"
              data-mdb-toggle="tab"
              href="#ex1-tabs-5"
              role="tab"
              aria-controls="ex1-tabs-5"
              aria-selected="false"
            >
              Tab 5
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-6"
              data-mdb-toggle="tab"
              href="#ex1-tabs-6"
              role="tab"
              aria-controls="ex1-tabs-6"
              aria-selected="false"
            >
              Tab 6
            </a>
          </li>
        </ul>
        {/* <!-- Tabs navs --> */}

        {/* <!-- Tabs content --> */}
        <div class="tab-content" id="ex1-content">
          <div
            class="tab-pane fade show active"
            id="ex1-tabs-1"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            Tab 1 content
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-2"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            Tab 2 content
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-3"
            role="tabpanel"
            aria-labelledby="ex1-tab-3"
          >
            Tab 3 content
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-4"
            role="tabpanel"
            aria-labelledby="ex1-tab-4"
          >
            Tab 4 content
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-5"
            role="tabpanel"
            aria-labelledby="ex1-tab-5"
          >
            Tab 5 content
          </div>
          <div
            class="tab-pane fade"
            id="ex1-tabs-6"
            role="tabpanel"
            aria-labelledby="ex1-tab-6"
          >
            Tab 6 content
          </div>
        </div>
        {/* <!-- Tabs content --> */}



        
      </>

    );
};

export default NavigateLinks;