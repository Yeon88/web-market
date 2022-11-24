

const List2 = ({ data = [], renderItem, renderEmpty }) => (
    !data.length ? renderEmpty : (
    <ul>
    {data.map((item, i) => (
    <li key={i}>{renderItem(item)}</li> ))}
    </ul> )
);


export default List2;
    