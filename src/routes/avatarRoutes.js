import { Router } from "express";
import { addAvatar, getAvatar, getAvatars, updateAvatar, deleteAvatar } from "../controllers/avatarController.js";

const router = Router()

router.get('/avatars', getAvatars)

router.get('/avatar/:id', getAvatar)

router.post('/avatar', addAvatar)

router.put('/avatar/:id', updateAvatar)

router.delete('/avatar/:id', deleteAvatar)

export default router