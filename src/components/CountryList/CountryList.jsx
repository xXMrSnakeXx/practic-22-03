import { Link, useLocation } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';


const CountryList = ({ countries }) => {
  const location = useLocation()
  // console.log('CountryList location', location)
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={location}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;

// useParams - {} дінамічних параметрів маршруту
// useLocation - об'єкт місцезнаходження
// useSearchParams - синтаксис як useState працює як ЛС
// useNavigate - navigate === <Navigate/> navigate("/")
