import '../Card/Card.css'
import './CardSkeleton.css';

const CardSkeleton = () => {
  return (
    <div className='card'>
      <div className="card-header">
        <div className='skeleton skeleton-img'></div>
      </div>
      <div className="card-body">
        <h3 className='skeleton skeleton-name'></h3>
        <p className='skeleton skeleton-email'></p>
      </div>
    </div>
  )
}

export { CardSkeleton };
