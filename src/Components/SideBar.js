import React, { Component } from 'react';
import '../App.css';

export class SideBar extends Component {
  state = {
    open: false,
    query: ""
  }
  searchKey = (newQuery) => {
    this.setState({ query: newQuery });
    this.props.filterPlaces(newQuery);
  }
  render() {
/* The side navigation menu 
code is mainly based on https://www.w3schools.com/howto/howto_js_sidenav.asp */

/* Set the width of the side navigation to 250px */
    var openNav=()=> {
      document.getElementById("mapSidebar").style.width = "250px";
      this.setState({open: true});
      document.getElementById("openbtn").hidden=true;
      document.getElementById("closebtn").hidden=false;
      document.getElementById("mapSidebar").hidden=false;
      document.getElementById("closebtn").focus();
    }

/* Set the width of the side navigation to 0 */

    var closeNav=()=> {
      document.getElementById("mapSidebar").style.width = "0";
      this.setState({open: false});
      document.getElementById("closebtn").hidden=true;
      document.getElementById("openbtn").hidden=false;
      document.getElementById("mapSidebar").hidden=true;
      document.getElementById("openbtn").focus();
    }
    return (
      <div>
        <div>
          <span id="openbtn" tabIndex='0' role='button'
            onClick={openNav} onKeyPress={openNav}>  Keller,  Texas   Restaurants   &#9776;
          </span>
        </div>
        <div id="mapSidebar" className="sidebar" tabIndex='-1'>
          <span id="closebtn" role='button' tabIndex='0' 
            style={{color: 'white', cursor: 'pointer'}} 
            onClick={closeNav} onKeyPress={closeNav}>  Keller,  Texas   Restaurants   &times;
          </span>
          <input id="filter" tabIndex="0"
            type="text"
            placeholder="Filter list"
            onChange={e => this
              .searchKey(e.target.value)}
              value={this.state.query} />
          <ul id="buttonGrp" tabIndex="-1">
            {this.props.places && this
              .props
              .places
              .map((places, index) => {
              return (
                <li key={index}>
                  <button key={index} tabIndex="-1" onClick={e => this.props.clickedVenue(index)}>
                  <b>{places.name}</b></button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar