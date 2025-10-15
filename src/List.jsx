function List(props)
{
  const category=props.category;
  const itemList=props.items;
  // const lowCaloryItems=itemList.filter(item=>item.calory<100);
  // const lCaloryItems=lowCaloryItems.map(item=><li key={item.id}>
  //   {item.name}: &nbsp;
  //   <b>{item.calory}</b>
  // </li>)

  // const highCaloryItems=itemList.filter(item=>item.calory>100);
  // const hCaloryItems=highCaloryItems.map(item=><li key={item.id}>
  //   {item.name}: &nbsp;
  //   <b>{item.calory}</b>
  // </li>)

  const listItems=itemList.map(item=><li key={item.id}>
    {item.name}: &nbsp;
    <b>{item.calory}</b>
  </li>)
  return(<>
  <h2 className="list_category">{category}</h2>
  <ol className="list_items">{listItems}</ol></>)
}
export default List;