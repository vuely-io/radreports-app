import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { CustomerService } from "../service/CustomerService";

export default function BasicDemo() {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);

  const [lazyState, setlazyState] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      servicerequest: { value: "", matchMode: "contains" },
      id: { value: "", matchMode: "contains" },
      status: { value: "", matchMode: "contains" },
      bodysite: { value: "", matchMode: "contains" },
      priority: { value: "", matchMode: "contains" },
      time: { value: "", matchMode: "contains" },
      reason: { value: "", matchMode: "contains" },
    },
  });

  useEffect(() => {
    loadLazyData();
  }, [lazyState]);

  const loadLazyData = async () => {
    setLoading(true);
    const data = await CustomerService.getCustomers();
    setTotalRecords(data);
    setCustomers(data);
    setLoading(false);
  };
  const onPage = (event) => {
    setlazyState(event);
  };

  const onSort = (event) => {
    setlazyState(event);
  };

  const onFilter = (event) => {
    event["first"] = 0;
    setlazyState(event);
  };

  return (
    <>
      <div className="card flex-right">
        <Link to="/Serviceorder">
          <Button
            label="New"
            style={{ float: "right" }}
            className="mt-4 mr-8"
          />
        </Link>
      </div>
      <center>
        <div className="col-10">
          <div className="card">
            <h1
              className="mb-0 pb-4 pt-5 align-items-start"
              style={{ background: "rgb(32, 1, 46)" }}
            >
              Service Order
            </h1>
            <DataTable
              value={customers}
              filterDisplay="row"
              dataKey="id"
              totalRecords={totalRecords}
              onLazyLoad={onPage}
              onPage={onPage}
              onSort={onSort}
              sortField={lazyState.sortField}
              sortOrder={lazyState.sortOrder}
              onFilter={onFilter}
              filters={lazyState.filters}
              loading={loading}
              tableStyle={{ minWidth: "75rem" }}
              className="p-datatable "
            >
              
              <Column
                field="servicerequest"
                header="ServiceRequest"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="id"
                header="Id"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="status"
                header="Status"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="bodysite"
                header="Bodysite"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="priority"
                header="Priority"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="time"
                header="Date"
                sortable
                filter
                filterPlaceholder="Search"
              />
              <Column
                field="reason"
                header="Reason"
                sortable
                filter
                filterPlaceholder="Search"
              />
            </DataTable>
          </div>
        </div>
      </center>
    </>
  );
}
