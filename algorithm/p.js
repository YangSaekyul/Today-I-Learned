function solution(array) {
  var answer = [];

  answer.push(Math.max(...array));
  answer.push(indexOf(Math.max(...array)));

  return answer;
}
