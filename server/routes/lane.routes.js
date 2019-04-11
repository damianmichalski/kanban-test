import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add a new lane
router.route('/lanes').post(LaneController.addLane);

// Get all laneSchema
router.route('/lanes').get(LaneController.getLanes);

// Delete a lane bulanId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Edit Lane Name
router.route('/lanes/:laneId').put(LaneController.editLaneName);

export default router;
