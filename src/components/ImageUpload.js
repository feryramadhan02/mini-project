import React from "react";

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            imagePreviewUrl: []
        };
        //this._handleImageChange = this._handleImageChange.bind(this);
        //this._handleSubmit = this._handleSubmit.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({ file: [...this.state.file] });
    //     // TODO: do something with -> this.state.file
    // }

    // handleImageChange(e) {
    //     e.preventDefault();

    //     let reader = new FileReader();
    //     let file = e.target.files[0];

    //     this.setState({
    //         file: file,
    //         imagePreviewUrl: reader.result
    //     });


    //     reader.readAsDataURL(file)
    // }
    addTodo = async () => {
        // update UI
        this.setState({
            file: [...this.state.file]
        });
    }
    change = e => {
        //langsung berganti di halaman itu juga
        //e: event  target.value adalah sasaran nya pada value
        this.setState({ title: e.target.value })
    }

    render() {
        let { imagePreviewUrl } = this.state.file;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="" />);
        }

        return (
            <div>
                <form onSubmit={this.addTodo}>
                    {/* <input type="file" onChange={this.handleImageChange} /> */}
                    <input type="file" value={this.state.file} onChange={this.change} />
                    <button type="submit" onClick={this.addTodo}>add</button>
                    {/* <button type="submit" onClick={this.handleSubmit}>Upload Image</button> */}
                </form>
                {$imagePreview}
            </div>
        )
    }

}
export default ImageUpload;