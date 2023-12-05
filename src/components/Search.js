import React from "react";
import axios from "axios";
import Images from "./Images"
class Search extends React.Component {
    state = {
        keyword: "",
        photos: [],
        loader: false
        };
        
    inputHandle = (e) => {
        this.setState({ keyword: e.target.value });
    };
    searchImages = async (e) => {
        e.preventDefault();
        this.setState({ loader: true })
        const res = await
            axios.get(`https://api.pexels.com/v1/search?query=${this.state.keyword}&per_page=15&page=1`,
                {
                    headers: {
                        Authorization: `6YoXoUy1nt6hebTthGtZ6f0KDM6is1CKf9c3p0jWPmwA0Imsk1vMoRgu`
                    },
                }
            );
        this.setState({ loader: false });
        this.setState({ photos: res.data.photos });
        console.log(this.state.photos);
    }
    render() {
        return (
            <>
                <form onSubmit={this.searchImages}>
                    <div className="form-group ">
                        <input type="text" name="keyword"
                            className="form-control " value={this.state.keyword}
                            onChange={this.inputHandle}
                            placeholder="Search images..."
                        />
                    </div>
                    <div className='form-group text-center mt-3 '>
                        <input
                            type="submit"
                            value="Search Images"
                            className="btn btn-primary  border border border-dark border-1 "
                        />
                    </div>
                </form>
                <div className="row">
                    {
                        !this.state.loader ? (
                            this.state.photos.map((img) => <Images image={img}
                                key={img.id} />)
                        ) : (
                            < h1 > Loading...</h1 >
                        )
                    }
                </div>
            </>
        );
    }
}
export default Search;