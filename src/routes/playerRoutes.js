import { Router } from "express";
import { getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer } from '../controllers/playerController.js'

const router = Router()

router.get('/players', getPlayers)

router.get('/players/:id', getPlayer)

router.post('/player', addPlayer)

router.put('/player/:id', updatePlayer)

router.delete('/player/:id', deletePlayer)

export default router