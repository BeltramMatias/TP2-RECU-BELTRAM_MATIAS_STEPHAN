import { Router } from 'express';
const router = Router();
import VotosController from '../controlador/votosController';

router.post('/cargar', VotosController.cargarVoto);
router.get('/generales', VotosController.obtenerVotosGenerales);

export default router;
