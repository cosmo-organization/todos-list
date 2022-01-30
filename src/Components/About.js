export const About = () => {
    let jumbotronStyle={
        backgroundColor:"gray"
    }
    return (
        <>
            <main role="main">
                <div className="jumbotron" style={jumbotronStyle}>
                    <div className="container">
                        <h1 className="display-3">About Us</h1>
                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos iusto fuga rerum, esse dolores aperiam
                            molestiae unde autem repudiandae quasi officia sequi suscipit corporis beatae, error rem ea, veniam libero placeat
                            nemo est.
                        </p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Get More</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos iusto fuga rerum, esse dolores aperiam
                                molestiae unde autem repudiandae quasi officia sequi suscipit corporis beatae, error rem ea, veniam libero placeat
                                nemo est.
                            </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Create Task List</h2>
                            <p>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos iusto fuga rerum, esse dolores aperiam
                                molestiae unde autem repudiandae quasi officia sequi suscipit corporis beatae, error rem ea, veniam libero placeat
                                nemo est.
                            </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Local Storage Support</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos iusto fuga rerum, esse dolores aperiam
                                molestiae unde autem repudiandae quasi officia sequi suscipit corporis beatae, error rem ea, veniam libero placeat
                                nemo est.
                            </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                    </div>

                    <hr />

                </div>

            </main>
        </>
    );
};
