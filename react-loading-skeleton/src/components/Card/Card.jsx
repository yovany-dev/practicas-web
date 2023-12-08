import './Card.css';

const Card = ({ urlPhoto, first_name, last_name, email }) => {
  return (
    <div className='card'>
      <div className="card-header">
        <img className='fadeIn' src={urlPhoto} alt="img profile"/>
      </div>
      <div className="card-body">
        <h3 className='card-name fadeIn'>{`${first_name} ${last_name}`}</h3>
        <p className='card-email fadeIn'>{email}</p>
      </div>
    </div>
  )
}

export { Card };
