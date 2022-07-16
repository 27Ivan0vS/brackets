module.exports = function check(str, bracketsConfig) {
  const openingBrackets = [];
  const closingBrackets = [];
  const expectedBracketList = [];
  const bracketMap = {};

  bracketsConfig.forEach(item => {
    openingBrackets.push(item[0]);
    closingBrackets.push(item[1]);
    bracketMap[item[0]] = item[1];
  })
  //console.log('openingBrackets =', openingBrackets, bracketMap)

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];
    if (openingBrackets.includes(currentBracket) && currentBracket !== expectedBracketList[expectedBracketList.length - 1]) {
      expectedBracketList.push(bracketMap[currentBracket])
      //console.log('expectedBracketList =', expectedBracketList)
    } else {
      const expectedBracket = expectedBracketList.pop();

      //console.log('expectedBracket =', expectedBracket, 'currentBracket =', currentBracket)
      if (expectedBracket !== currentBracket) {
        return false;
      }
      //console.log('bracketMap.currentBracket =', bracketMap[currentBracket])
    }
  }

  return expectedBracketList.length === 0 ? true : false;
}
