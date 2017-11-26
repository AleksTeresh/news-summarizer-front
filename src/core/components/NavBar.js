import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../action-creators'
import logo from '../../../src/logo2.png';

export class Navbar extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            active: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);

        props.actions.core.fetchKeyWords(15)
    }
    onClickHandler() {
        this.setState({ active: this.state.active ? false : true });
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img id="logo" className="pull-left" src={logo} alt="logo" />
                            <a className="navbar-brand" href="/">RED Grenade</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={this.state.active ? "active touchable" : "touchable"}><a onClick={this.onClickHandler}>MENU</a></li>
                                <li className={this.state.active ? "active" : " "}>
                                  <Link to="/"><i style={{ color: 'white' }} className="fa fa-home fa-2x" />
                                  <br />
                                  <span>HOME</span></Link>
                                  </li>
                                <li className={this.state.active ? "active" : " "}><Link to="/global"><i style={{ color: 'white' }} className="fa fa-globe fa-2x" /><br /><span>GLOBAL NEWS</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/trend"><i style={{ color: 'white' }} className="fa fa-fire fa-2x" /><br /><span>TREND</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/economy"><i style={{ color: 'white' }} className="fa fa-usd fa-2x" /><br /><span>ECONOMY</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/tech"><i style={{ color: 'white' }} className="fa fa-desktop fa-2x" /><br /><span>TECHNOLOGY</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/health"><i style={{ color: 'white' }} className="fa fa-heartbeat fa-2x" /><br /><span>HEALTH</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/search"><i style={{ color: 'white' }} className="fa fa-search fa-2x" /><br /><span>SEARCH</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      core: bindActionCreators(actionCreators, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
