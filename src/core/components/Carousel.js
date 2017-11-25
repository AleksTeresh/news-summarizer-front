import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        let divStyle={
            marginBottom: "4%",
            position: "relative",
            marginLeft: "-15px",
            marginRight: "-15px",
            height: "300px",
            backgroundColor: "#FFF2CC"
        }
        let caroucelText= {
            position: "relative",
            width: "100%",
            height: "100%",
            display: "inline-block",
            verticalAlign: "middle",
            color: "white"

        }
        let imgStyle = {
            width: "100%"
        }
        let imgWrapperStyle = {
            backgroundColor: "grey",
            opacity: 0.7
        }
        let carouselImgSrc = "";
        return (
            <div style={divStyle} className="carousel">
                <div style={{display:"inline-block", height:"100%", width:"100%"}}>
                    <h1 className="text-center" style={caroucelText}>News Hot Topics</h1>
                </div>
            </div>
        )

    }
}
export default Carousel;
