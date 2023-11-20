import patchEmployee from "../Business logic layer/patchEmployee.js"

const employeeController = {};

employeeController.patchEmployee = async function (req, res) {
    const employeeId = Number(req.params.employeeId);
    const [data, error] = await patchEmployee(employeeId, req.body);
    if(error) {
        res.status(error.status);
        res.send(error)
    }
    else {
        res.send(data);
    }
}

export default employeeController;