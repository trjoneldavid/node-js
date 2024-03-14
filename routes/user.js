const {query} = require("../mysql");

module.exports = (router) =>{
    router.get('/users',async (req,res) => {

        const users = await query(`SELECT CONCAT(firstname, ' ', lastname) as fullname, birthday, YEAR(CURRENT_DATE()) - YEAR(birthday) as age, organisation_id FROM user`)
        res.json(users)
    })

    router.get('/getUser/:userId', async(req,res) =>{
        const userId = req.params.userId;
        const getQuery = `SELECT CONCAT(firstname, ' ', lastname) as fullname, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, YEAR(CURRENT_DATE()) - YEAR(birthday) AS age FROM user WHERE id = ?`;

        const selectedUser = await query(getQuery, userId);
        res.json(selectedUser);
    })

    router.post('/addUser', async (req, res) => {
        const requestBody = req.body
        const columns = Object.keys(requestBody)
        const values = Object.values(requestBody)

        const placeholders = new Array(values.length).fill('?').join(', ');
        const addUserQuery = `INSERT INTO user (${columns}) VALUES (${placeholders})`;

        const addQuery = await query(addUserQuery,values)
        res.json(addQuery)
    });

    router.put('/updateUser/:userId', async(req,res)=>{
        const user = req.params.userId
        const requestBody = req.body

        const columns = Object.keys(requestBody).map((column) => `${column} = ?`).join(', ');
        const values = Object.values(requestBody)

        const updateQuery = `UPDATE user SET ${columns} WHERE id = ?`;
        const updateValue = [...values, user]

        const result = await query(updateQuery,updateValue)
        res.json(result)
    })

    router.delete('/deleteUser/:userId', async(req,res) =>{
        const user = req.params.userId
        const deleteQuery = `DELETE FROM user WHERE id = ?`
        const result = await query(deleteQuery,user)
        res.json(res)
    })
}

