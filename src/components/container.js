import React from "react";

const Container = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Shop Name</h1>
          <div className="list-group">
            <a href="#" className="list-group-item">
              Category 1{console.log(props.data, "sad ")}
            </a>
            <a href="#" className="list-group-item">
              Category 2
            </a>
            <a href="#" className="list-group-item">
              Category 3
            </a>
          </div>
        </div>

        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide my-4"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block img-fluid"
                  src="http://placehold.it/900x350"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="http://placehold.it/900x350"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="http://placehold.it/900x350"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="row">
            {props.data.map((row, index) => {
              return <h1 key={index}>{row.id}</h1>;
            })}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    {/* <a href="#">{product.name}</a> */}
                  </h4>
                  {/* <h5>{product.rate}</h5> */}
                  <p
                    className="card-text"
                    // dangerouslySetInnerHTML={{
                    //   __html: product.des.substring(0, 75) + "..."
                    // }}
                  />
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <button
                      type="button"
                      className={"btn btn-primary"}
                      onClick={() => {
                        props.product();
                      }}
                    >
                      More Info
                    </button>
                    <button
                      type="button"
                      className={
                        1 == 1 ? "btn  btn-warning" : "btn btn-primary"
                      }
                      onClick={() => {
                        props.update();
                        // console.log(props);
                      }}
                    >
                      "Add To Cart"
                    </button>
                  </small>
                </div>
              </div>
            </div>
            {/* ); */}
            {/* }) */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
