const {query} = require("../mysql");
const {router} = require("express/lib/application");

module.exports = (router) =>{
    router.get('/organizations', async(req,res)=>{
        const organization = await query('SELECT * FROM organisation')
        res.json(organization)
    })

    router.get('/getOrganization/:orgId',async(req,res)=>{
        const orgId = req.params.orgId
        const result = await query(`SELECT * FROM organisation WHERE id = ?`, orgId)
        res.json(result)
    })

    router.post('/addOrganization',async(req,res)=>{
        const requestBody = req.body
        const columns = Object.keys(requestBody)
        const values = Object.values(requestBody)

        const placeholders = new Array(values.length).fill('?').join(', ');
        const addOrgQuery = `INSERT INTO organisation (${columns}) VALUES (${placeholders})`;

        const result = await query(addOrgQuery,values)
        res.json(result)
    })

    router.put('/updateOrganization/:orgId',async(req,res)=>{
        const orgId = req.params.orgId

        const requestBody = req.body
        const columns = Object.keys(requestBody).map((column)=> `${column} = ?`).join(',')
        const values = Object.values(requestBody)

        const updateQuery = `UPDATE organisation SET ${columns} WHERE id = ?`
        const queryValues = [...values,orgId]

        const result = await query(updateQuery,queryValues)
        res.json(result)
    })
}