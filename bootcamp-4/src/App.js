import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(theBuilding) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.props.data.indexOf(theBuilding)
    this.setState({
      selectedBuilding: this.props.data.indexOf(theBuilding)
    })
  }

  handleDelete = ourListing => {
    alert("Button Clicked!");
    /*console.log('id: ' + id);
    console.log(this.props.data[id]);
    //const buildings = data.
    this.props.data.splice(id - 1, 1);
    for (var i = id; i < this.props.data.length; i++) //FIXME
    {
      this.props.data[i].id =  this.props.data[i].id - 1;
      //console.log(this.props.data[i].id);
    }*/
    console.log('array length:' + this.props.data.length);
    console.log('the listing: ' + ourListing.name);
    console.log('index: ' + this.props.data.indexOf(ourListing));
    this.props.data.splice(this.props.data.indexOf(ourListing), 1);
    console.log('array length after splice:' + this.props.data.length);
    this.forceUpdate();

  };

  render() {

    //console.log('filterText state from parent component', this.state.filterText)
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    onDelete={this.handleDelete}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              selectedBuilding={this.state.selectedBuilding}
              data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;