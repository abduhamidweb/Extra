import React from "react";
import SettingList from "../../Components/SettingList/SettingList";
import { Outlet } from "react-router-dom";
import "./style.scss";
import PageTitit from "../../Components/PageTitile/PageTitle";
const Setting = () => {
  return (
    <>
      <PageTitit title={"Setting"} />
      <div className="select_sidebar_Setting">
        <div class="row">
          <div class="col-3 select_sidebar_item">
            <div
              class="nav flex-column nav-tabs text-center"
              id="v-tabs-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                className="ItemWrapper"
                class="nav-link "
                id="v-tabs-home-tab"
                data-mdb-toggle="tab"
                href="#v-tabs-home"
                role="tab"
                aria-controls="v-tabs-home"
                aria-selected="true"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Appereance"}</h4>
                  <p>{"Dark and Light mode, Font size"}</p>
                </div>
              </div>
              <div
                className="ItemWrapper"
                class="nav-link"
                id="v-tabs-profile-tab"
                data-mdb-toggle="tab"
                href="#v-tabs-profile"
                role="tab"
                aria-controls="v-tabs-profile"
                aria-selected="false"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"title"}</h4>
                  <p>{"desc"}</p>
                </div>
              </div>
              <div
                className="ItemWrapper"
                class="nav-link active"
                id="v-tabs-messages-tab"
                data-mdb-toggle="tab"
                href="#v-tabs-messages"
                role="tab"
                aria-controls="v-tabs-messages"
                aria-selected="false"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"title"}</h4>
                  <p>{"desc"}</p>
                </div>
              </div>

              {/* twoo */}
              <div
                className="ItemWrapper"
                class="nav-link"
                id="v-tabs-home-tab2"
                data-mdb-toggle="tab"
                href="#v-tabs-home2"
                role="tab"
                aria-controls="v-tabs-home2"
                aria-selected="false"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Appereance"}</h4>
                  <p>{"Dark and Light mode, Font size"}</p>
                </div>
              </div>
              <div
                className="ItemWrapper"
                class="nav-link"
                id="v-tabs-profile-tab2"
                data-mdb-toggle="tab"
                href="#v-tabs-profile2"
                role="tab"
                aria-controls="v-tabs-profile2"
                aria-selected="false"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"title"}</h4>
                  <p>{"desc"}</p>
                </div>
              </div>
              <div
                className="ItemWrapper"
                class="nav-link"
                id="v-tabs-messages-tab2"
                data-mdb-toggle="tab"
                href="#v-tabs-messages2"
                role="tab"
                aria-controls="v-tabs-messages2"
                aria-selected="false"
              >
                <div className="iconWrapper">
                  <i className={"bi bi-heart"}></i>
                </div>
                <div className="textWrapper">
                  <h4>{"title"}</h4>
                  <p>{"desc"}</p>
                </div>
              </div>
              {/* sss */}
            </div>
          </div>
          <div class="col-8  select_sidebar_content">
            <div class="tab-content" id="v-tabs-tabContent">
              {/* one */}
              <div
                class="tab-pane fade "
                id="v-tabs-home"
                role="tabpanel"
                aria-labelledby="v-tabs-home-tab"
              >
                Home content
              </div>
              <div
                class="tab-pane fade"
                id="v-tabs-profile"
                role="tabpanel"
                aria-labelledby="v-tabs-profile-tab"
              >
                Profile content
              </div>
              <div
                class="tab-pane fade show active"
                id="v-tabs-messages"
                role="tabpanel"
                aria-labelledby="v-tabs-messages-tab"
              >
                Messages conten22t
              </div>
              {/* twoo */}
              <div
                class="tab-pane fade "
                id="v-tabs-home2"
                role="tabpanel"
                aria-labelledby="v-tabs-home-tab2"
              >
                1
              </div>
              <div
                class="tab-pane fade"
                id="v-tabs-profile2"
                role="tabpanel"
                aria-labelledby="v-tabs-profile-tab2"
              >
                2
              </div>
              <div
                class="tab-pane fade"
                id="v-tabs-messages2"
                role="tabpanel"
                aria-labelledby="v-tabs-messages-tab2"
              >
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
