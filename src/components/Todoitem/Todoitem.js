import "./todoitem.css"
function Todoitem({ element , dalete}) {

	return (
		<li className="list-item">
			<h3 className="title"> {element.name} </h3>
			<button type='button' onClick={dalete} data-id={element.id}>
				delete
			</button>
		</li>
	);
}

export default Todoitem;

