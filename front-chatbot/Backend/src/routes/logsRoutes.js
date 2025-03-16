import express from 'express';
import { deleteLogs, getLogs } from '../services/logsServices.js';

const router = express.Router();

router.get('/logs', getLogs)
router.delete('/logs/:id', deleteLogs)

export default router;