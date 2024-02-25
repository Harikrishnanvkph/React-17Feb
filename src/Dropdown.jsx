import { useState } from "react";

function Dropdown({listOfSelects, dropStatus, compOffSet,classId}){

    const [selectState, setSelectState] = useState(false);

    const styleSelect = {
        display : selectState ? "block" : "none"
    }

    const btnColor = {
        backgroundColor : dropStatus == "Not Completed" 
        ? "#fe7f81" : dropStatus == "Completed" ? "#13ad89" : "grey"
    }

    const setSelect = () => {
        setSelectState(!selectState);
    }

    return<>
        <div className="dropdown">
            <a href="#" 
            onClick={setSelect}
            style={btnColor}
            >{dropStatus}</a>
            <div className={`select ${classId}`} style={styleSelect}>
                {
                    listOfSelects.map((it,key)=>(
                        <div className="option" key={key}
                        onClick={()=>{
                            setSelectState(!selectState)
                            compOffSet(it);
                        }}>
                            <a href="#">{it}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default Dropdown;