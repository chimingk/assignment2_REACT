import React from 'react';

class BuildingList extends React.Component {
	render() {
		


		const { data, filterText, selectedUpdate } = this.props;



		const buildingList = data
			.filter( building =>{return building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0})
			

			.map(directory => {
				return (
					<tr
					
					onClick={() => selectedUpdate(directory.id)}
					key={directory.id}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});


		return <div>{buildingList}</div>;
	}
}

// Note to self - typo here with BuildingList meant many lost hours to debugging
export default BuildingList;

