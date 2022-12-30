import React, { useState, useEffect, useRef, useContext } from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import SettingList from "../../Components/SettingList/SettingList";
import "./style.scss";
import MainCard from "../../Components/MainCard/MainCard";
import API from "../../API/API";
import Loading from "../../Components/Loading/Loading";
// import context from "../../context/context";
import context from "../../context/context";
import HomenavigateLink from "./HomeNavigatePages/HomenavigateLink";
import NavigateLinks from "../../Components/NavigateLinks/NavigateLinks";
import OrdersHome from "../../Components/OrdersHome/OrdersHome";
import Input from "../../Components/Input/Input";
const Home = () => {
          //   pageNumber,
          // paginate,
          // fetchByName,
          // fetchCategoryName,
          // category,
          // loading,
          // categoryItem,
  // const { lastData } = useContext(context);
  // const [category, setCategory] = useState([]);
  // const [categoryItem, setCategoryItem] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [test, setTest] = useState("Test");
  // const ErrorPage = useRef();
  // All Category
  // const fetchCategory = async () => {
  //   const res = await API.getAllCategorys();
  //   setCategory(res.categories);
  //   setLoading(true);
  // };
  // // Category Items
  // const fetchCategoryName = async (Name) => {
  //   const res = await API.getFilterCategorys(Name);
  //   setCategoryItem(res.meals);
  //   setLoading(true);
  // };
  // // search
  // const fetchByName = async (name) => {
  //   const res = await API.searchByName(name);
  //   if (!res.meals) {
  //   } else {
  //     setCategoryItem(res.meals);
  //   }
  // };
  // Pagination start

  // const [currentPage, setCurrentPage] = useState(1);

  // const [totalPage, setTotalPage] = useState(6);

  // const firstPage = currentPage * totalPage;

  // const lastPage = firstPage - totalPage;

  // const lastData = categoryItem.slice(lastPage, firstPage);

  // const paginate = (id) => {
  //   setCurrentPage(id);
  // };

  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(categoryItem.length / totalPage); i++) {
  //   pageNumber.push(i);
  // }

  // Start fetch function
  // useEffect(() => {
  //   fetchCategory();
  //   fetchCategoryName("Seafood");
  //   // fetchByName("Arrabiata");

  //   // fetchByName("a")
  // }, []);


  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardData, setCardData] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardTable , setCardTable]=useState("")
  return (
    <>
      <div className="row">
        <div className="col-8 WrapperLeftPage">
          <PageTitle
            input={"input put"}
            title="Jaegar Resto"
            date="Tuesday, 2 Feb 2021"
            icon="bi-search"
          />
          <NavigateLinks />
          {/* <div className="row WrapperCard">
                <div className="col-6">
                  <h3>Choose Dishes</h3>
                </div>
                <div className="col-6 text-end ">
                  <div className="select text-end">
                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        fetchCategoryName(e.target.value);
                      }}
                    >
                      {category.map((item, key) => {
                        return <option>{item.strCategory}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="row" ref={ErrorPage}>
                  {loading ? (
                    lastData.map((item, key) => {
                      return <MainCard key={key} data={item} />;
                    })
                  ) : (
                    <Loading />
                  )}
                </div>

                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    {pageNumber.map((pageEl) => {
                      return (
                        <li
                          className="page-item   rounded-5 mx-auto my-2"
                          onClick={() => paginate(pageEl)}
                        >
                          <a className="page-link">{pageEl}</a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div> */}

          <div className="Pay">
            <span className="Pay__Span">
              <h2 className="Pay__Span__title">Payment</h2>
              <p className="Pay__Span__deck">3 payment method available</p>
            </span>
            <hr />

            <h2 className="Pay__title">Payment Method</h2>
            {/* <!-- Tabs navs --> */}
            <ul class="nav nav-tabs mb-3 Pay-ul" id="ex1" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="ex3-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex3-tabs-1"
                  role="tab"
                  aria-controls="ex3-tabs-1"
                  aria-selected="true"
                  className="TabPay d-flex"
                >
                  {/* <div className="payCard"> */}
                  <i class="bi bi-brightness-low-fill ptichka"></i>
                  <i class="bi bi-credit-card cardichka"></i>
                  Credit Card
                  {/* </div> */}
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex3-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex3-tabs-2"
                  role="tab"
                  aria-controls="ex3-tabs-2"
                  aria-selected="false"
                  className="TabPay d-flex"
                >
                  <i class="bi bi-brightness-low-fill ptichka"></i>
                  <i class="bi bi-paypal cardichka"></i>
                  Paypal
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex3-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex3-tabs-3"
                  role="tab"
                  aria-controls="ex3-tabs-3"
                  aria-selected="false"
                  className="TabPay d-flex"
                >
                  <i class="bi bi-brightness-low-fill ptichka"></i>
                  <i class="bi bi-wallet2 cardichka"></i>
                  Cash
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div class="tab-content" id="ex3-content">
              <div
                class="tab-pane fade show active"
                id="ex3-tabs-1"
                role="tabpanel"
                aria-labelledby="ex3-tab-1"
              >
                <form action="" className="Tab1Form">
                  <label htmlFor="Tab1Input1">Cardholder Name</label>
                  <Input
                    type="text"
                    id="Tab1Input1"
                    inputClass="Tab1InputClass"
                    val={cardName}
                    setValue={setCardName}
                  />
                  <label htmlFor="Tab1Input2">Card Number</label>
                  <Input
                    type="text"
                    id="Tab1Input2"
                    autoComplete="off"
                    inputClass="Tab1InputClass"
                    val={cardNumber}
                    setValue={setCardNumber}
                  />
                  <div className="d-flex smalInput">
                    <span>
                      <label htmlFor="Tab1Input3">Expiration Date</label>
                      <Input
                        type="date"
                        id="Tab1Input3"
                        inputClass="Tab1InputClass"
                        val={cardData}
                        setValue={setCardData}
                      />
                    </span>
                    <span>
                      <label htmlFor="Tab1Input4">CVV</label>
                      <Input
                        type="password"
                        id="Tab1Input4"
                        inputClass="Tab1InputClass"
                        val={cvv}
                        setValue={setCvv}
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex smalInput2">
                    <span>
                      <label htmlFor="Tab1Input5">Order Type</label>
                      <div className="Tab1Select" id="Tab1Input5">
                        <select>
                          <option>Dine In</option>
                          <option>Dine In</option>
                        </select>
                      </div>
                    </span>
                    <span>
                      <label htmlFor="Tab1Input6">Table no.</label>
                      <Input
                        type="password"
                        id="Tab1Input6"
                        inputClass="Tab1InputClass"
                        val={cardTable}
                        setValue={setCardTable}
                      />
                    </span>
                  </div>
                </form>

                <div className="paymennt d-flex mt-4">
                  <button className="Cancel w-50">Cancel</button>
                  <button className="Confirm w-50">Confirm Payment</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="ex3-tabs-2"
                role="tabpanel"
                aria-labelledby="ex3-tab-2"
              >
                <form action="" className="Tab1Form">
                  <label htmlFor="Tab1Input1">Cardholder Name</label>
                  <Input
                    type="text"
                    id="Tab1Input1"
                    inputClass="Tab1InputClass"
                    val={cardName}
                    setValue={setCardName}
                  />
                  <label htmlFor="Tab1Input2">Card Number</label>
                  <Input
                    type="text"
                    id="Tab1Input2"
                    autoComplete="off"
                    inputClass="Tab1InputClass"
                    val={cardNumber}
                    setValue={setCardNumber}
                  />
                  <div className="d-flex smalInput">
                    <span>
                      <label htmlFor="Tab1Input3">Expiration Date</label>
                      <Input
                        type="date"
                        id="Tab1Input3"
                        inputClass="Tab1InputClass"
                        val={cardData}
                        setValue={setCardData}
                      />
                    </span>
                    <span>
                      <label htmlFor="Tab1Input4">CVV</label>
                      <Input
                        type="password"
                        id="Tab1Input4"
                        inputClass="Tab1InputClass"
                        val={cvv}
                        setValue={setCvv}
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex smalInput2">
                    <span>
                      <label htmlFor="Tab1Input5">Order Type</label>
                      <div className="Tab1Select" id="Tab1Input5">
                        <select>
                          <option>Dine In</option>
                          <option>Dine In</option>
                        </select>
                      </div>
                    </span>
                    <span>
                      <label htmlFor="Tab1Input6">Table no.</label>
                      <Input
                        type="password"
                        id="Tab1Input6"
                        inputClass="Tab1InputClass"
                        val={cardTable}
                        setValue={setCardTable}
                      />
                    </span>
                  </div>
                </form>

                <div className="paymennt d-flex mt-4">
                  <button className="Cancel w-50">Cancel</button>
                  <button className="Confirm w-50">Confirm Payment</button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="ex3-tabs-3"
                role="tabpanel"
                aria-labelledby="ex3-tab-3"
              >
                <form action="" className="Tab1Form">
                  <label htmlFor="Tab1Input1">Cardholder Name</label>
                  <Input
                    type="text"
                    id="Tab1Input1"
                    inputClass="Tab1InputClass"
                    val={cardName}
                    setValue={setCardName}
                  />
                  <label htmlFor="Tab1Input2">Card Number</label>
                  <Input
                    type="text"
                    id="Tab1Input2"
                    autoComplete="off"
                    inputClass="Tab1InputClass"
                    val={cardNumber}
                    setValue={setCardNumber}
                  />
                  <div className="d-flex smalInput">
                    <span>
                      <label htmlFor="Tab1Input3">Expiration Date</label>
                      <Input
                        type="date"
                        id="Tab1Input3"
                        inputClass="Tab1InputClass"
                        val={cardData}
                        setValue={setCardData}
                      />
                    </span>
                    <span>
                      <label htmlFor="Tab1Input4">CVV</label>
                      <Input
                        type="password"
                        id="Tab1Input4"
                        inputClass="Tab1InputClass"
                        val={cvv}
                        setValue={setCvv}
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex smalInput2">
                    <span>
                      <label htmlFor="Tab1Input5">Order Type</label>
                      <div className="Tab1Select" id="Tab1Input5">
                        <select>
                          <option>Dine In</option>
                          <option>Dine In</option>
                        </select>
                      </div>
                    </span>
                    <span>
                      <label htmlFor="Tab1Input6">Table no.</label>
                      <Input
                        type="password"
                        id="Tab1Input6"
                        inputClass="Tab1InputClass"
                        val={cardTable}
                        setValue={setCardTable}
                      />
                    </span>
                  </div>
                </form>

                <div className="paymennt d-flex mt-4">
                  <button className="Cancel w-50">Cancel</button>
                  <button className="Confirm w-50">Confirm Payment</button>
                </div>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
          
        </div>
        <div className="col-4 py-4 pt-2 ordersWrapp1 m-0">
          <div className="ordersWrapp2">
            <OrdersHome />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
