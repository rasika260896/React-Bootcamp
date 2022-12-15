import NoResultComponent from './NoResultComponent';
import CardComponent from './CardComponent';

const CardContainer = ({ filteredUser }) => {
  if (!filteredUser.length) return <NoResultComponent />
  else {
    return filteredUser.map((item) => (  
        <CardComponent item={item} />
    ))
  }

}

export default CardContainer;