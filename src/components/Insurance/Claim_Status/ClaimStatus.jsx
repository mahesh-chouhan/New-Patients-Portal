import React, { Component } from "react";
import "../../Styles/Appointment.css";
import {
  BootstrapTable,
  ExportCSVButton,
  TableHeaderColumn,
} from "react-bootstrap-table";
// import '../../../public/styles/style.css';
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import sikkaCsv from "../../../assets/SikkaCsv.png";
import { Border } from "react-bootstrap-icons";
import '../../Styles/ClaimStatus.css';
const { SearchBar } = Search;
const products = [];

class ClaimStatus extends React.Component {
  constructor(props) {
    super(props);
    this.dataInfo = this.dataInfo.bind(this);
    this.companyInfo = this.companyInfo.bind(this);
  }

  componentWillMount() {
    function addProducts(quantity) {
      const startId = products.length;
      for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        var items = {};
        items.sent_date = "6/27/2020";
        items.total_bill = "$3,092.00";
        items.payment_amount = "$3,092.00";
        items.estimated_insurance = "$1,106.50";
        items.total_paid = "$0.00";

        var companyData = {};
        companyData.payment_date = "11/11/1111";
        companyData.company = "Delta Dental Of Ca.";
        products.push({
          item_data: items,
          company_data: companyData,
          name: "Open",
        });
      }
    }
    addProducts(30);
  }

  dataInfo(row) {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <b>Sent Date:</b>
          </div>
          <div className="col-sm-6">{row.sent_date}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <b>Total billed:</b>
          </div>
          <div className="col-sm-6">{row.total_bill}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <b>Payment Amount:</b>
          </div>
          <div className="col-sm-6">{row.payment_amount}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <b>Estimated Insurance Portion:</b>
          </div>
          <div className="col-sm-6">{row.estimated_insurance}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <b>Total Paid:</b>
          </div>
          <div className="col-sm-6">{row.total_paid}</div>
        </div>
      </div>
    );
  }

  companyInfo(row) {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <b>Payment Date:</b>
          </div>
          <div className="col-sm-6">{row.payment_date}</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <b>Insurance Company:</b>
          </div>
          <div className="col-sm-6">{row.company}</div>
        </div>
      </div>
    );
  }

  render() {
    const options = {
      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "All",
          value: products.length,
        },
      ],
      sizePerPage: 5,
      paginationSize: 3,
      hideSizePerPage: true,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
    };

    return (
      <div>
        <hr id="hrline" style={{ width: "100%" }} />
        <br />
        <div id="table1">
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div>
                    <ToolkitProvider
                      keyField="id"
                      data={products}
                      // columns={columns}
                      search
                    >
                      {(props) => (
                        <div class="row BstTable" Style="padding-top: 0px;">
                          <div class="col-12 col-lg-12">
                            <ExportCSVButton {...props.csvProps} 
                            style={{
                              background:"none",
                              border:"none",
                              float: "right",
                            }}
                            >
                              <img
                                src={sikkaCsv}
                                id="imgs"
                                style={{ width: "30px" }}
                                alt=""
                              />
                            </ExportCSVButton>
                            <SearchBar
                              {...props.searchProps}
                              style={{
                                float: "right",
                                width: "300px",
                              }}
                            />
                            <br />
                            <br />
                            <div className="data-table-claim">
                              <BootstrapTable
                                data={products}
                                pagination={true}
                                options={options}
                              >
                                <TableHeaderColumn
                                  dataField="item_data"
                                  width="300px"
                                  dataFormat={this.dataInfo}
                                  isKey={true}
                                >
                                  Claim Details
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="company_data"
                                  dataFormat={this.companyInfo}
                                  width="300px"
                                ></TableHeaderColumn>
                                <TableHeaderColumn
                                  dataField="name"
                                  width="150px"
                                >
                                  Claim Status
                                </TableHeaderColumn>
                              </BootstrapTable>
                            </div>
                          </div>
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="footer"><FOOTER /></div> */}
      </div>
    );
  }
}

export default ClaimStatus;
