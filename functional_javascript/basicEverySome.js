module.exports = function checkUsersValid(goodUsers) {
  function check(elem, index, array) {
    return goodUsers.some(function(guElem, guIndex, guArr) {
      return guElem.id === elem.id;
    });
  }

  return function(submittedUsers) {
    return submittedUsers.every(check);
  };
}
