// beerdetailcard recibe un objeto beer con todas las propriedades 
//del objeto de la api: image, name , attenuation level, .... por eso es mas facil pasar todo 
//el objeto beer que pasar una a una las propriedades individualmente.
function BeerDetailCard({beer}) {
  const imgstyle = { "max-width": "200px"};
  const centerimage = { "text-align": "center"};

  return (
    <>
      <div className="card">
          <div className="card-body">
            <div className="row" style={centerimage}>
              <div className="col">
                <img
                  src={beer.image_url}
                  className="card-img-top"
                  style={imgstyle}
                  alt={beer.name}
                />
              </div>
            </div>

            <div className="row">
              <div className="col offset-lg-2 col-lg-5">
                <h1 className="card-title">{beer.name}</h1>
              </div>
              <div className="col col-lg-1 offset-lg-3">
                <h2 className="card-text">{beer.attenuation_level}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col offset-lg-2 col-lg-5">
                <p className="card-text">
                  <small className="text-body-secondary">{beer.tagline}</small>
                </p>
              </div>
              <div className="col col-lg-1 offset-lg-3">
                <p className="card-text">{beer.first_brewed}</p>
              </div>
            </div>

            <div className="row">
              <div className="col offset-lg-2">
                <p className="card-text">{beer.description}</p>
              </div>
            </div>

            <div className="row">
              <div className="col offset-lg-2">
                <p>Contrinuted by: {beer.contributed_by}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default BeerDetailCard;
