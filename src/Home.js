import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <a className="btn btn-success btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
