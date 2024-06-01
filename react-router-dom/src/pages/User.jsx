import { useParams } from "react-router-dom";

const User = () => {
  const {userId} = useParams();
  return (
    <div>
      <h2 className="title">{'Hello ' + userId + '!'}</h2>
    </div>
  )
}

export { User };
