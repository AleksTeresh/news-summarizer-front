import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div id="footer" className="footer">
                <div className="sponsors container">
                    <h5 className="sponsored"><strong>This web app supports</strong></h5>
                    <div className="sponsored"><a href="https://hackjunction.com/" title="JUNCTION" target="_blank"><img src="http://i.imgur.com/ZrifrOS.png" alt="JUNCTION" /></a></div>
                    <div className="sponsored"><a href="https://www.nordcloud.com/" title="NORDCLOUD" target="_blank"><img src="http://ww1.prweb.com/prfiles/2017/03/06/14122535/nordcloud_logo_large.png" alt="NORDCLOUD" /></a></div>
                </div>
            </div>
        );
    }
}

export default Footer;