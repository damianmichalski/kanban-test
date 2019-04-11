import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, updateNoteRequest, editNote, moveWithinLane } from './NoteActions';

const mapDispatchToProps = {
  deleteNote: deleteNoteRequest,
  updateNote: updateNoteRequest,
  onValueClick: editNote,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
