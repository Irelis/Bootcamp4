import React from 'react';

/*export default ({data, selectedBuilding}) => {
	const building = selectedBuilding.map(id => {
		const name = data[id].name
		console.log(name)
		return(
			<li key ={id}>{name}</li>
		)
	})
	return (
		<div>
			<p>
				{' '}
				<i>Click on a name to view more information</i>
				<ul>
					{building}
				</ul>
			</p>
		</div>
	);
}*/

class ViewBuilding extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data[this.props.selectedBuilding])//this.props.selectedBuilding)
		const theBuilding = this.props.data[this.props.selectedBuilding];
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i><br></br>
					{theBuilding.code}<br></br>
					{theBuilding.name}<br></br>
					{theBuilding.address}<br></br>
					Latitude: 
					{theBuilding.coordinates && theBuilding.coordinates.latitude}<br></br>
					Longitude:
					{theBuilding.coordinates && theBuilding.coordinates.longitude}<br></br>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
