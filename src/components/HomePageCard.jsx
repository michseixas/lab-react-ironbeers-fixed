import { Link } from 'react-router-dom';

function HomePageCard({link, image, title, description}) {
  const style = { width: "18rem" };

  return (
    <>
    <div className="card" style={style}>
    <Link to={link}>
      <img src={image} className="card-img-top" alt="..." />
    </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
    </>
  );
}

export default HomePageCard;
