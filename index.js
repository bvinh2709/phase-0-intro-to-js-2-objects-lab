// Write your solution in this file!
const employee = {
    name: "Jane Doe",
    streetAddress: "123 Street A",
};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key)
{
    const newObj = {...employee};
    delete newObj.name;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee.name;
    return employee;
}