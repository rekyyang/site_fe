import { Carousel, Radio } from 'antd';
import React from "react";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class PhotoWall extends React.Component {
    render() {
        return (
            <>
                <Carousel dotPosition={"left"}>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                </Carousel>
            </>
        );
    }
}

export default PhotoWall;