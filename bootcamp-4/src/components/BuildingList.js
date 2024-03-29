import React from 'react';

export default ({data, filterText, selectedUpdate, onDelete}) => {
	
		//console.log('This is my directory file', this.props.data);
		const buildingList = data
		.filter(name => {
			//remove buildings that do not match current filter text
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {

			return (
				
				<tr key={directory.id} /*onClick={() => selectedUpdate(directory)}*/
					>
					<td onClick={() => selectedUpdate(directory)}>{directory.code} </td>
					<td onClick={() => selectedUpdate(directory)}> {directory.name} </td>
					<button

					onClick={() => onDelete(directory)}
					//onClick={onDelete}
					className="btn btn-lg btn-outline-danger ml-4">
              Delete
            </button>
				</tr>
			);
		});

		return <div>
		{buildingList}
		</div>;
	
}