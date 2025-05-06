import { Router } from 'express';
import * as ctrl from '../controllers/funcionarioController.js';

const router = Router();

router.post('/',       ctrl.create);
router.get('/',        ctrl.list);
router.get('/search',  ctrl.search);            // ?q=texto
router.get('/:id',     ctrl.getOne);
router.put('/:id',     ctrl.update);
router.delete('/:id',  ctrl.remove);

export default router;
