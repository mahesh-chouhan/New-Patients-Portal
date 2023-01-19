


   
    import React from "react";
    import "../Styles/Appointment.css";
    import data from './Treatment.json';
    import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
    import BootstrapTable from "react-bootstrap-table-next";
    import paginationFactory from "react-bootstrap-table2-paginator";
    import ToolkitProvider, {
      Search,
      CSVExport,
    } from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
    import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
    import filterFactory from "react-bootstrap-table2-filter";
    import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
    // import { FaFileCsv } from "react-icons/fa";
    import { FaSearch } from "react-icons/fa";
    // import LoginFooter from "../Login/LoginFooter";
    import sikkaCsv from '../../assets/SikkaCsv.png'
    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;
    const ClearButton = (props) => {
      const handleClick = () => {
        props.onSearch("");
      };
    
      return (
        <p id="clearButton" onClick={handleClick}>
          X
        </p>
      );
    };
    
    const columns = [
      {
        dataField: "Procedure Date",
        text: "Procedure Date",
        sort: true,
      },
      {
        dataField: "Procedure",
        text: "Procedure",
        sort: true,
      },
      {
        dataField: "Practice",
        text: "Practice",
        sort: true,
      },
      {
        dataField: "Amount",
        text: "Amount",
        sort: true,
      },
    ];
    const defaultSorted = [
      {
        dataField: "name",
        order: "desc",
      },
    ];
    
    const pagination = paginationFactory({
      sizePerPage: 5,
      paginationSize: 3,
      hideSizePerPage: true,
      lastPageText: ">>",
      firstPageText: "<<",
      nextPageText: ">",
      prePageText: "<",
    });
    function TreatmentPlanTable() {
      return (
        <div>
          <div id="table" className="container-fluid">
            <ToolkitProvider
              keyField="serviceId"
              data={data}
              columns={columns}
              exportCSV
              search
              bootstrap4
            >
              {(props) => (
                <div>
                  <ExportCSVButton
                    {...props.csvProps}
                    id="Exportbtn1"
                    className="btn"
                    style={{
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
                  <div
                    className=""
                    style={{
                      float: "right",
                    }}>
                    <SearchBar
                      className="custome-search-field"
                      onfocus="this.placeholder = ''"
                      placeholder="Search Data"
                      {...props.searchProps}
                      style={{
                        position: "relative",
                        float: "right",
                        marginRight: "",
                        paddingLeft: "50px",
                      }}
                    />
    
                    <FaSearch
                      className="searchOrder"
                      icon="FaSearch"
                      size="18px"
                      // style={style}
                    />
    
                    <ClearButton {...props.searchProps} />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="data-table">
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4
                      pagination={pagination}
                      filter={filterFactory()}
                      keyField="id"
                      columns={columns}
                      data={data}
                      defaultSorted={defaultSorted}
                    />
                  </div>
                </div>
              )}
            </ToolkitProvider>
          </div>
         
        </div>
      );
    }
    
    
    
    
    
    export default TreatmentPlanTable
    