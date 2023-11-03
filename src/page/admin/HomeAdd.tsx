import MainAdd from "../../component/mainAdd";
import { IProducts, INews } from "../../types";

const HomeAdd = ({data, dataN}:{ data:IProducts[], dataN:INews[]}) => {
  return (
   <div>
     <MainAdd data={data}/>
   </div>
  )
};

export default HomeAdd;