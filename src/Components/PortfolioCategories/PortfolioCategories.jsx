import { useSelector } from "react-redux";
import "./PortfolioCategories.css";
import { useState } from "react";
import { useEffect } from "react";

const PortfolioCategories = ({setMyData , portfolioSectionData}) => {
    const { data } = useSelector(state => state.categoriesReducer);
    const [myCat ,setMyCat] = useState({
        ActiveXObject: null,
        objects: [],
    });

    useEffect(()=>{
        if(myCat.objects.length === 0){
            setMyCat({
                ActiveXObject: data[0],
                objects: data,
            });
        }
    },[data]);

    const toggleActivatedClass = (id) => {
        setMyCat({
            ...myCat,
            ActiveXObject: myCat.objects.find(el => +el?.id === +id ),
        });
    };
    const isActivatedHandle = (id) => {
        if(myCat.objects.find(el=> +el?.id === id) === myCat.ActiveXObject){
            return "activatedList";
        }else {
            return "";
        }
    };

    return (
        <ul className="portfolioCategories mb-5 gap-0 flex-wrap">
            {myCat.objects.map(el => <li onClick={() =>{
                toggleActivatedClass(el?.id);
                setMyData(portfolioSectionData?.filter(e => e?.cat.toLowerCase().includes(el?.name.toLowerCase())));
            }} className={`portfolioCategory position-relative ${isActivatedHandle(el?.id)}`} key={el?.id}>{el?.name}</li>)}
        </ul>
    );
}

export default PortfolioCategories;