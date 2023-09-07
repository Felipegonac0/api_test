import { pool } from '../db.js'

export const getAvatars = async (req,res) => {
    try {
        const[ rows ] = await pool.query('SELECT * FROM Avatar')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Get All A"
        })
    }
}

export const getAvatar = async (req,res) => {
    try {
        const[ rows ] = await pool.query('SELECT * FROM Avatar WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Avatar not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Get ID A"
        })
    }
}

export const addAvatar = async (req,res) => {
    const {name, avatarSprite} = req.body
    try {
        const[rows] = await pool.query('INSERT INTO Avatar(name, avatar) VALUES (?,?)', [name, avatarSprite])
        res.send({
            id: rows.insertId,
            name,
            avatarSprite
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Add A"
        })
    }
}

export const updateAvatar = async (req,res) => {
    const {id} = req.params
    const {name, avatarSprite} = req.body
    try {
        const[result] = await pool.query('UPDATE Avatar SET name = IFNULL(?,name), avatar = IFNULL(?,avatar) WHERE id = ?', [name, avatarSprite, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Avatar not found'
        })
        const[rows] = await pool.query('SELECT * FROM Avatar WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Update A"
        })
    }
}

export const deleteAvatar = async (req,res) => {
    const {id} = req.params
    try {
        const[result] = await pool.query('DELETE FROM Avatar WHERE id = ?', [id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Avatar not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Update A"
        })
    }
}
