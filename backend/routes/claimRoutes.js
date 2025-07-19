import express from 'express';
import { claimPoints, getClaimHistory } from '../controllers/historyController.js';

const router = express.Router();
router.post('/:userId', claimPoints);
router.get('/history', getClaimHistory);
export default router;
