export default function Destinos() {
    return  <div className="container-fluid text-black">
    <div className="destino-gallery">
      <div className="card m-3 card-w">
      <img src={process.env.PUBLIC_URL + '/img1.jpg'} className="card-img-top pt-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rio de Janeiro</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card m-3 card-w">
      <img src={process.env.PUBLIC_URL + '/img2.jpg'} className="card-img-top pt-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Salvador</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card m-3 card-w">
      <img src={process.env.PUBLIC_URL + '/img3.jpg'} className="card-img-top pt-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Porto Alegre</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>
}