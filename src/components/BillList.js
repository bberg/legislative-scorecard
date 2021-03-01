import React from 'react'
import { billPath } from '../services/bill-helpers'
import { Link } from 'react-router-dom'


export default function BillList(props) {
  const { bills } = props

  const renderedBills = bills.map(function(bill) {
    return <Bill key={bill.uniqueKey} bill={bill} />;
  })

  return (
    <div className="card list">
      {renderedBills}
    </div>
  )
}


function Bill(props) {
  const { bill } = props

  const {
    uniqueKey,
    title,
    action,
    additionalInformation,
    votes,
  } = bill

  const billId = props.bill.uniqueKey.replace(/\s/g, '\u00A0')

  return (
    <div className="list-item">
      <div className="row">
        <div className="col-xs"><div className="box title-description">
            {title} - {action} &nbsp;
          <div className="description">{uniqueKey}</div>
          <div className="description">{additionalInformation}</div>
          <div className="description"> {JSON.stringify(votes,null,4)} </div>
        </div></div>
        <div className="col-xs-12 col-sm-2"><div className="box">
        </div></div>
        <div className="col-xs-12 col-sm-2"><div className="box">
          <Link to={billPath(bill)} className="button full-width">Details</Link>
        </div></div>

      </div>
    </div>
  )
}



    // <div className="list-item">
    //   <div className="row">
    //     <div className="col-xs"><div className="box title-description">
    //       <Link to={billPath(bill)} className="title">
    //         {shorthand_title} &nbsp;
    //         <span className="bill-id">{billId}</span>
    //       </Link>
    //       <div className="description">{short_description}</div>
    //     </div></div>
    //     { mpa_stance &&
    //       <div className="col-xs-3 col-sm-2">
    //         <div className="box">
    //           <div className="title">MPA stance</div>
    //           <div className={`stance ${mpa_stance}`}>{mpa_stance}</div>
    //         </div>
    //       </div>
    //     }
    //     <div className="col-xs-12 col-sm-2"><div className="box">
    //       <Link to={billPath(bill)} className="button full-width">Details</Link>
    //     </div></div>
    //   </div>
    // </div>