import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-3">Contact Us</h1>
        <p className="lead">Here is our Contact informations below.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2>Contact us</h2>
          <p>
            Thank you for taking your interest in Clue Mediator. All emails are
            replied to within 24 hours in most cases. If you do not receive a
            reply within that period, please send your inquiry again. For any
            inquiries, contact us at contact@cluemediator.com. Others ways to
            reach out.
          </p>
          <div>
            <a
              href="https://facebook.com/berbahjidey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/dat_nawty_boi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/babajide-bashiru-949a0310a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a
              href="https://instagram.com/dat_nawty_boi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a
              href="https://github.com/jideybash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Contact;
