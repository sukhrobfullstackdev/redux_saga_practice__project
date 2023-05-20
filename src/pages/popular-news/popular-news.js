import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import {getPopularNews} from "../../redux/actions/actionCreator";

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularNews());
  }, [dispatch]);
  console.log("render");
  return(
    <div>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
