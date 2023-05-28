import { Link } from 'react-router-dom';

function BeerCard({image, name, tagline, contributed_by, id}) {
  const style = { "max-width": "540px"};
  const imgstyle = { "max-height": "200px"};

  return (
    <>
<div key={id} className="card mb-3" style={style}>
  <div className="row g-0">
    <div className="col-md-4">
      <Link to={id}>
      <img src={image} style={imgstyle} className="img-fluid rounded-start" alt="..." />
      </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{tagline}</p>
        <p className="card-text"><small className="text-body-secondary">Created by: {contributed_by}</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default BeerCard;
