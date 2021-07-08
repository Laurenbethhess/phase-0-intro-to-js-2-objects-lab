const employee = {
    name: "Lauren Hess",
    streetAddress: "5 Busdick Drive"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const anotherNewEmployee = Object.assign({}, employee)
    delete anotherNewEmployee[key];
    return anotherNewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const anotherNewEmployee = Object.assign(employee)
    delete anotherNewEmployee[key];
    return anotherNewEmployee;
}