import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import OrdersCard from './OrdersCard'
import context from '../../context/context'
import './styleOrders.css'
const OrdersHome = ({ payRef }) => {
  const { bookmarkData, isBokmarkLoad, bookmarkMoney, setBookmarkMoney } =
    useContext(context)
  const [filterBookmark, setFilterBookmark] = useState([])
  const newData = bookmarkData.filter((item, index) => {
    return (
      index ===
      bookmarkData.findIndex((obj) => {
        return item.idMeal === obj.idMeal
      })
    )
  })
  0
  const [totalSize, setTotelSize] = useState(0)
  function openPayModal() {
    payRef.current.style.right = '0px'
  }

  return (
    <>
      <div className='ordersHomeWrapp'>
        <h3 className='OrdersTitle'>Orders</h3>

        <div className='tabLinkWrapp'>
          <ul className='nav nav-tabs mb-2' id='ex1' role='tablist'>
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link navLinkk active'
                id='ex1-tab-1'
                data-mdb-toggle='tab'
                href='#ex1-tabs-1'
                role='tab'
                aria-controls='ex1-tabs-1'
                aria-selected='true'
              >
                Dine In
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link navLinkk'
                id='ex1-tab-2'
                data-mdb-toggle='tab'
                href='#ex1-tabs-2'
                role='tab'
                aria-controls='ex1-tabs-2'
                aria-selected='false'
              >
                To Go
              </a>
            </li>
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link navLinkk'
                id='ex1-tab-3'
                data-mdb-toggle='tab'
                href='#ex1-tabs-3'
                role='tab'
                aria-controls='ex1-tabs-3'
                aria-selected='false'
              >
                Delivery
              </a>
            </li>
          </ul>
        </div>

        <div className='dineTitleWrapp mt-2 p-0 d-flex'>
          <div className='itemTitleWrapp'>
            <h3 className='itemTitle ordersTitles m-0 p-0'>Item</h3>
          </div>
          <div className='qtyPriceTitleWrapp d-flex align-items-center'>
            <h3 className='qtyTitle ordersTitles m-0 p-0'>Qty</h3>
            <h3 className='priceTitle m-0 p-0 ordersTitles'>Price</h3>
          </div>
        </div>

        <hr className='' />

        <div className='tabWrapp'>
          <div className='tab-content' id='ex1-content'>
            <div
              className='tab-pane fade show active'
              id='ex1-tabs-1'
              role='tabpanel'
              aria-labelledby='ex1-tab-1'
            >
              {isBokmarkLoad
                ? newData.map((item) => {
                    return <OrdersCard data={item} />
                  })
                : 'You have not added a product yet'}
            </div>
            <div
              className='tab-pane fade'
              id='ex1-tabs-2'
              role='tabpanel'
              aria-labelledby='ex1-tab-2'
            >
              To Go
            </div>
            <div
              className='tab-pane fade'
              id='ex1-tabs-3'
              role='tabpanel'
              aria-labelledby='ex1-tab-3'
            >
              Delivery
            </div>
          </div>
        </div>

        <div className='ordersAllInfo pt-2'>
          <div className='discountWrapp d-flex align-items-center justify-content-between my-1'>
            <span className='discountTitleWrapp'>
              <h4 className='discountTitle'>Discount</h4>
            </span>
            <span className='discountPriceWrapp d-flex align-items-center'>
              <h4 className='discountPriceTitle m-0'>$</h4>
              <h4 className='discountPriceTitle m-0 ps-1'>22</h4>
            </span>
          </div>
          <div className='totalWrapp d-flex align-items-center justify-content-between my-1'>
            <span className='totaltTitleWrapp'>
              <h4 className='totaltTitle'>Sub Total</h4>
            </span>
            <span className='totalPriceWrapp d-flex align-items-center'>
              <h4 className='totalPriceTitle m-0'></h4>

              <h4 className='totalPriceTitle m-0 ps-1'>
                $ {''}
                {bookmarkMoney}
              </h4>
            </span>
          </div>
          <button
            className='btn btn navigateToPayPage d-block w-100 mt-3'
            onClick={() => openPayModal()}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  )
}

export default OrdersHome
