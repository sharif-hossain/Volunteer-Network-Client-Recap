import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="row my-5">
      <div className="col-md-2"></div>
      <div className="col-md-8 col-md-offset-8 search">
        <div className="mb-3">
          <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div class="input-group">
              <div class="custom-file ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="search ..."
                  id="inputGroupFile04"
                />
              </div>
              <div class="input-group-append">
                <button class="btn btn-success" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Filter;
