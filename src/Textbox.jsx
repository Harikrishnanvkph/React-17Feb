function Textbox({ placeholder, value, setValue, classId }) {
  const setHeight = () => {
    let tBox = document.querySelector(`.${classId}`);
    tBox.style.height = "fit-content";
    tBox.style.height = tBox.scrollHeight + "px";
  };

  const setVal = (event) => {
    const val = event.target.value;
    if (val.length <= 30) {
      setValue(val);
    }else if(val.length > 30){
        if(classId=="tDist"){
            if(val.length < 60){
                setValue(val);
            }
        }
    }
    setHeight();
  };

  return (
    <>
      <div className="col-xl-4 col-lg-5 col-md-12 m-2 d-flex justify-content-center">
        <textarea
          className={`textbox ${classId}`}
          rows="1"
          placeholder={placeholder}
          value={value}
          onInput={setVal}
        ></textarea>
      </div>
    </>
  );
}

export default Textbox;
