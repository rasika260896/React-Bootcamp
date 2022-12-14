import NoResultComponent from './NoResultComponent';
import CardComponent from './CardComponent';
//import { Link } from "react-router-dom"

const CardContainer = ({ filteredUser }) => {
  if (!filteredUser.length) return <NoResultComponent />
  else {
    return filteredUser.map((item) => (
      //<Link to={`/member/${item?.login}`}>
        <CardComponent item={item} />
      //</Link>
    ))
  }

}

export default CardContainer;