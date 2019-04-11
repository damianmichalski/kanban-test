import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete Note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit Note Content
router.route('/notes/:noteId').put(NoteController.editNoteContent);

export default router;
