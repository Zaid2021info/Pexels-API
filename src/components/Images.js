import React from 'react';
class Images extends React.Component {
    render() {
        const { image } = this.props;
        console.log(image);
        return (
            <>
            
                <div className="col-md-4 mt-3">
                    <img src={image.src.large} alt="Not Found" className="img-fluid border border-dark border-2" />
                </div>
            </>
        );
    }
}
export default Images;