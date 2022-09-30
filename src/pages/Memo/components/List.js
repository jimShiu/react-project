import Item from "./Item";

const List = ({ listData, deleteData, submittingStatue }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item; //建立空字串 防止undifine
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            // submittingStatue={submittingStatue}
          />
        );
      })}
    </div>
  );
};

export default List;
