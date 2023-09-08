function pieceOfPie(flavoursArray, targetOne, targetTwo) {
    let startIndex = flavoursArray.indexOf(targetOne);
    let endIndex = flavoursArray.indexOf(targetTwo) + 1;
    let result = flavoursArray.slice(startIndex, endIndex);

    return result;
}
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');