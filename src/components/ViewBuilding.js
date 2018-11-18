import React from 'react';

class ViewBuilding extends React.Component {
	render() {



			const {data, selectedBuilding} = this.props;
			// The data is coming from App.js <ViewBuilding />




			console.log('selected building id:', selectedBuilding);
			// This test worked, when I clicked on Anderson Hall
			//    this got me "3" for the variable selectedBuiliding
   			{/*
        			id: 3,
        			code: 'AND',
        			name: 'Anderson Hall',
        			coordinates: {
            			latitude: 29.6515682,
            			longitude: -82.3418895
        	},
        			address: '1507 W University Ave, Gainesville, FL 32611, United States'
    		*/}



			const viewBuilding = data
			// This works just likes how we filtered the building names in BuildingList.js
			//   but we are filtering by the building id instead
			//   for each building in the data.js
			//   find the building where it matches with the id
			//   then map it to our building variable
			//   so we can call it's properties by like
			//   building.id, building.code, building.name, building.address


				.filter(building => building.id === selectedBuilding)


				.map(building =>{
					

					// Data is not cleaned up
					//   some has: id, code, names => default case (the data has this as bare minimum)
					//   some has: id, code, name, address => return size is 4
					//   some has: id, code, name, coordinates, address => return size is 5 (default)
					// 
					// This will test for the size of the building object
					//   limitation is IE8+

					
					switch( Object.keys(building).length ) {


							case 4:
								return (
									<ul key = {building.selectedBuilding}>
										<li>Code: {building.code}</li>
										<li>Name: {building.name}</li>
										<li>Address: {building.address}</li>

									</ul>
								)
								
								break;


							case 5:

								return (
									<ul key = {building.selectedBuilding}>
										<li>Code: {building.code}</li>
										<li>Name: {building.name}</li>
										<li>Address: {building.address}</li>
										<li>Coordinates: {building.coordinates.latitude} , {building.coordinates.longitude} </li>
									</ul>
								)
								
								break;


							default:

								return (
									<ul key = {building.selectedBuilding}>
										<li>Code: {building.code}</li>
										<li>Name: {building.name}</li>
									</ul>
								)

								break;

					} // end of switch

			}) // end of mapping
						 
				


		return (
			<div>
				<p> {' '}	<i>Click on a name to view more information</i> </p>
				{viewBuilding}
			</div>
		



		);




	}
}




export default ViewBuilding;
