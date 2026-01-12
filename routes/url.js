import express from 'express';
import { handelGenrateShortUrl} from '../controller/url.js';
const router = express.Router();

router.post('/', handelGenrateShortUrl);

export default router;
