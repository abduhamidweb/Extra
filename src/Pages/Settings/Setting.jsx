import React, { useContext, useRef, useState } from "react";
import SettingList from "../../Components/SettingList/SettingList";
import { Outlet } from "react-router-dom";
import "./style.scss";
import PageTitit from "../../Components/PageTitile/PageTitle";
import AddCard from "../../Components/AddCard/AddCard";
import context from "../../context/context";
import Loading from "../../Components/Loading/Loading";
import FormAddcard from "../../Components/FormAddCard/FormAddcard";
import Input from "../../Components/Input/Input";
import API from "../../API/API";
const Setting = () => {
  const [mealName, setMealName] = useState("");
  const [price, setPrice] = useState("");
  const [blows, setBlows] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategor] = useState("");
  const [statusWrap, setStatusWrap] = useState(false);
  const [cardDataAtr, setCardDataAtr] = useState("");
  const [cardText, setCardText] = useState("add card dishs");

  const formRef = useRef();
  const datas = useRef();
  const Modal = useRef();
  const ModalWrap = useRef();
  const { addUser, loading } = useContext(context);

  function hendlerfunctions() {
    function addUserCard() {
      try {
        fetch(`http://localhost:8080/addUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: mealName,
            price: price,
            bowis: blows,
            category: category,
            img: imgUrl,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
    addUserCard();
  }
  function hendlerfunctions2(e) {
    function UpdateUserCard() {
      try {
        fetch(`http://localhost:8080/addUser/${e}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: mealName,
            price: price,
            bowis: blows,
            category: category,
            img: imgUrl,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
    UpdateUserCard();
  }
  function GetDefoultValue(e) {
    try {
      fetch(`http://localhost:8080/addUser/${e}`)
        .then((response) => response.json())
        .then((data) => {
          setBlows(data.bowis);
          setPrice(data.price);
          setImgUrl(data.img);
          setCategor(data.category);
          setMealName(data.title);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* Modal window  start*/}
      <div className="modalBeckBg" ref={ModalWrap}>
        <div className="container modalWindow" ref={Modal}>
          <div className="row formBlock text-center" ref={formRef}>
            <div className="col-12 text-center">
              <h4 className="text-end text-light p-2">
                <i
                  class="bi bi-x-lg"
                  onClick={() => {
                    Modal.current.style.display = "none";
                    ModalWrap.current.style.display = "none";
                  }}
                ></i>
              </h4>
              <form
                onSubmit={() => {
                  statusWrap
                    ? hendlerfunctions()
                    : hendlerfunctions2(cardDataAtr);
                }}
              >
                <Input
                  type={"text"}
                  plece="Enter the name of the dish"
                  id={"isMealName"}
                  inputClass="mealName w-100"
                  val={mealName}
                  setValue={setMealName}
                />
                <div className="d-flex w-100 mt-2">
                  <Input
                    type={"text"}
                    plece="Enter the Price of the dish"
                    id={"isMealPrice"}
                    inputClass="mealPrice mr-1"
                    val={price}
                    setValue={setPrice}
                  />
                  <Input
                    type={"text"}
                    plece="Enter the blows of the dish"
                    id={"isMealBlows"}
                    inputClass="mealBlows ms-1"
                    val={blows}
                    setValue={setBlows}
                  />
                </div>
                <Input
                  type={"text"}
                  plece="Enter the Category of the dish"
                  id={"isMealBlows"}
                  inputClass="mealBlows w-100 mt-2"
                  val={category}
                  setValue={setCategor}
                />
                <Input
                  type={"text"}
                  plece="Enter the img URL"
                  id={"isMealImg"}
                  inputClass="mealImg w-100 mt-2"
                  val={imgUrl}
                  setValue={setImgUrl}
                />
                <button className="btn w-100 mt-3 " type="submit">
                  {cardText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal window end */}
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
                  <i class="bi bi-bank"></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Your Restaurant"}</h4>
                  <p>{"Dark and Light mode, Font size"}</p>
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
                  <i class="bi bi-cart4"></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Products Management"}</h4>
                  <p>{"Manage your product, pricing, etc"}</p>
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
                  <i class="bi bi-bell-fill"></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Notifications"}</h4>
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
                  <i class="bi bi-file-lock2"></i>
                </div>
                <div className="textWrapper">
                  <h4>{"Security"}</h4>
                  <p>{"Customize your notifications"}</p>
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
                  <i class="bi bi-file-earmark-person"></i>
                </div>
                <div className="textWrapper">
                  <h4>{"About Us"}</h4>
                  <p>{"Find out more about Posly"}</p>
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
                <div className="contentTitle">
                  <h2>Products Management</h2>
                  <button className="btn">
                    <i class="bi bi-filter-right"></i>{" "}
                    <span>Manage Categories</span>
                  </button>
                </div>
                <div className="ManegWraper">
                  <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="ex1-tab-1"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-1r"
                        role="tab"
                        aria-controls="ex1-tabs-1r"
                        aria-selected="true"
                      >
                        Hot Dishes
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="ex1-tab-2t"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-2t"
                        role="tab"
                        aria-controls="ex1-tabs-2t"
                        aria-selected="false"
                      >
                        Cold Dishes
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="ex1-tab-3t"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-3t"
                        role="tab"
                        aria-controls="ex1-tabs-3t"
                        aria-selected="false"
                      >
                        Soup
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="ex1-tab-4t"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-4t"
                        role="tab"
                        aria-controls="ex1-tabs-4t"
                        aria-selected="false"
                      >
                        Grill
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="ex1-tab-5t"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-5t"
                        role="tab"
                        aria-controls="ex1-tabs-5t"
                        aria-selected="false"
                      >
                        Appetizer
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="ex1-tab-66t"
                        data-mdb-toggle="tab"
                        href="#ex1-tabs-66t"
                        role="tab"
                        aria-controls="ex1-tabs-66t"
                        aria-selected="false"
                      >
                        Dessert
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="ex1-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex1-tabs-1r"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1r"
                  >
                    <div className="container">
                      <div
                        className="row cardAddWrapper"
                        ref={datas}
                        onClick={(e) => {
                          if (
                            e.target.classList.contains("edit-dish") ||
                            e.target.classList.contains("btn-txt") ||
                            e.target.classList.contains("bi-pencil-square")
                          ) {
                            setCardText("update meal dish");
                            setCardDataAtr(e.target.getAttribute("data-id"));
                            Modal.current.style.display = "block";
                            ModalWrap.current.style.display = "block";
                            setStatusWrap(false);
                            GetDefoultValue(e.target.getAttribute("data-id"));
                          }
                        }}
                      >
                        <div className="col-4 ">
                          <div
                            className="card card-add cursor"
                            onClick={() => {
                              ModalWrap.current.style.display = "block";
                              Modal.current.style.display = "block";
                              setCardText("add meal dish");
                              setStatusWrap(true);
                              statusWrap(true);
                            }}
                          >
                            <div className="add-dishes">
                              <i class="bi bi-plus"></i>
                              <h6>Add new dish</h6>
                            </div>
                          </div>
                        </div>
                        {loading ? (
                          addUser.map((item, element, index) => {
                            return <AddCard data={item} />;
                          })
                        ) : (
                          <Loading />
                        )}
                      </div>
                      <div className="cardObServer">
                        <div className="container">
                          <div className="row pt-3 pb-3">
                            <div className="col-8 d-flex">
                              <button className="btn discard">
                                Discard Changes
                              </button>
                              <button className="btn ms-2 save">
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-2t"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2t"
                  >
                    Tab 2 content
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-3t"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-3t"
                  >
                    Tab 3 content
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-4t"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-4t"
                  >
                    Tab 4 content
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-5t"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-5t"
                  >
                    Tab 5 content
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-66t"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-6t"
                  >
                    Tab 6 content
                  </div>
                </div>
              </div>
              {/* Product maneger start */}

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
