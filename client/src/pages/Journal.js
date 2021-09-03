import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../components/layout/Spinner";
import { connect } from "react-redux";
import JournalItem from "../pages/journalDetail";
import { getJournal } from "../redux/actions/journal";
import { Link } from "react-router-dom";

const Journal = ({ getJournal, journal: { journal, loading }, match }) => {
  useEffect(() => {
    getJournal(match.params.id);
  }, [getJournal, match.params.id]);

  return loading || journal === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/jmsjournal" className="btn-dark">
        Back to Journals
      </Link>
      <JournalItem journal={journal} />
    </Fragment>
  );
};

Journal.propTypes = {
  getJournal: PropTypes.func.isRequired,
  journal: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  journal: state.journal,
});

export default connect(mapStateToProps, { getJournal })(Journal);
