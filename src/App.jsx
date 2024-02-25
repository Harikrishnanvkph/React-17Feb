import { useState } from "react";
import Textbox from "./Textbox";
import Dropdown from "./Dropdown";
import Card from "./Card";

function App() {
  const [cardList, setCardList] = useState([]);
  const menuList = ["All", "Completed", "Not Completed"];
  const [filter, setFilter] = useState(menuList[0]);
  const dropList = ["Not Completed", "Completed"];
  const [textNameValue, textNameState] = useState("");
  const [textDistValue, textDistState] = useState("");

  const triggerAdd = () => {
    setCardList((card) => {
      let arr = [textNameValue, textDistValue, dropList[0]];
      return [...card, arr];
    });
    textNameState("");
    textDistState("");
    let tBox = document.querySelectorAll("textarea");
    tBox.forEach((it) => {
      it.style.height = "fit-content";
    });
  };

  const deletedKey = (index) => {
    setCardList((prevCardList) => prevCardList.filter((_, i) => i !== index));
  };

  const compOff = (it, index) => {
    setCardList((prevCardList) => {
      const updatedList = [...prevCardList];
      updatedList[index][2] = it;
      return updatedList;
    });
  };

  const handleCompletion = (it) => {
    setFilter(it);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <h3>My Todo</h3>
        </div>
        <div className="row textRow d-flex justify-content-center align-items-start">
          <Textbox
            placeholder="Todo Name"
            value={textNameValue}
            setValue={textNameState}
            classId="tName"
          />
          <Textbox
            placeholder="Todo Discription"
            value={textDistValue}
            setValue={textDistState}
            classId="tDist"
          />
          <div className="col-xl-2 col-lg-12 col-md-12 d-flex justify-content-center">
            <button className="btn success m-2 w-xl-100 w-lg-75 w-md-50"
             onClick={triggerAdd}>
              Add Todo
            </button>
          </div>
        </div>
        <div className="row filter d-flex justify-content-between">
          <p>My Todos</p>
          <div className="innerRow d-flex justify-content-between">
            <p className="statusFilter">Status Filter:</p>
            <Dropdown
              listOfSelects={menuList}
              dropStatus={filter}
              compOffSet={handleCompletion}
              classId="MainDrop"
            />
          </div>
        </div>
        <div className="row cardList">
          {(filter == menuList[0]
            ? cardList
            : filter == menuList[1]
            ? cardList.filter((it) => it[2] == menuList[1])
            : cardList.filter((it) => it[2] == menuList[2])
          ).map((it, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card
                key={index}
                todoName={it[0]}
                todoDescription={it[1]}
                droplist={dropList}
                dropStatus={it[2]}
                deleteKey={() => {
                  deletedKey(index);
                }}
                changeCompletion={(it) => {
                  compOff(it, index);
                }}
                classId="SubDrop"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
