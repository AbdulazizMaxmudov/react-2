import { useState } from 'react';
import './App.css';
import Todoitem from './components/Todoitem/Todoitem';

function App() {
	const [array, setArray] = useState([]);
	const [newValue, setValue] = useState();

	function submit(e) {
		e.preventDefault();
		setArray([...array, newValue]);

		const elInput = e.target.firstChild;
		elInput.value = '';
	}

	function change(evt) {
		setValue({
			name: evt.target.value,
			id: array.length + 1,
		});
	}

	function dalete(evt) {
		const dataID = evt.target.dataset.id;
		setArray(array.filter((e) => e.id != dataID));
	}

	return (
		<div>
			<form method='post' onSubmit={submit}>
				<input
					name='todoinput'
					onChange={change}
					placeholder='kriting'
					aria-label='bajariladigan ish '
				/>
				<button type='submit'>create</button>
			</form>

			<ul>
				{array.map((element) => (
					<Todoitem element={element} 
          dalete = {dalete}
          />

				))}
			</ul>
		</div>
	);
}
export default App;
