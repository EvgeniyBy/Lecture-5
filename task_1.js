function multiply(operand_1, operand_2) {
    if ((!isFinite(operand_1) || typeof operand_1 != 'number' || isNaN(operand_1)) || (!isFinite(operand_2) ||  typeof operand_2 != 'number' || isNaN(operand_2))) {
        return null;
    }
    return operand_1 * operand_2;
}

function multiplyBy10(operand_2) {
    let operand_1 = 10;
    return multiply(operand_1, operand_2)
}