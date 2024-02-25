import Dropdown from "./Dropdown";

function Card({
  cardKey,
  todoName,
  todoDescription,
  droplist,
  dropStatus,
  deleteKey,
  changeCompletion,
  classId,
  setTodoName,
  setTodoDescription
}) {
  const deleteIt = (it) => {
    deleteKey(it);
  };

  const handleCompletion = (it) => {
    changeCompletion(it);
  };

  return (
    <>
      <div className="card" key={cardKey}>
        <p className="desp">Name : {todoName}</p>
        <p className="desp">Description : {todoDescription}</p>
        <div className="cardDrop d-flex">
          <p className="innerCardDrop">Status</p>
          <Dropdown
            listOfSelects={droplist}
            dropStatus={dropStatus}
            compOffSet={handleCompletion}
            classId={classId}
          />
        </div>
        <div className="actionButtons">
          <button className="btn success m-2">Edit</button>
          <button className="btn danger m-2" onClick={() => deleteIt(cardKey)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
