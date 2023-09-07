import { pool } from '../db.js'

export const getPlayers = async (req,res) => {
    try {
        const[ rows ] = await pool.query('SELECT * FROM Player')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Get All P"
        })
    }
}

export const getPlayer = async (req,res) => {
    try {
        const[ rows ] = await pool.query('SELECT * FROM Player WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Player not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Get ID P"
        })
    }
}

export const addPlayer = async (req,res) => {
    const {name, avatarId, points} = req.body
    try {
        const[rows] = await pool.query('INSERT INTO Player(name, avatar, point) VALUES (?,?,?)', [name, avatarId, points])
        res.send({
            id: rows.insertId,
            name,
            avatarId, 
            points,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Add P"
        })
    }
}

export const updatePlayer = async (req,res) => {
    const {id} = req.params
    const {name, avatarId, points} = req.body
    try {
        const[result] = await pool.query('UPDATE Player SET name = IFNULL(?,name), avatar = IFNULL(?,avatar), point = IFNULL(?,point) WHERE id = ?', [name, avatarId, points, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Player not found'
        })
        const[rows] = await pool.query('SELECT * FROM Player WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Update P"
        })
    }
}

export const deletePlayer = async (req,res) => {
    const {id} = req.params
    try {
        const[result] = await pool.query('DELETE FROM Player WHERE id = ?', [id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Player not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Error ocurred Update P"
        })
    }
}
