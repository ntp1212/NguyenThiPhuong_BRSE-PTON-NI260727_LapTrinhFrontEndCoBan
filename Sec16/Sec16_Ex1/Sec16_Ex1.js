let input = confirm("Let's play a chess???");
let result = '';
function processConfirm(answer) {
if(answer) {
result = `Excellent. We'll play a nice game of chess.`
} else {
    result = `Maybe later then.`
}
return result;
};
processConfirm(input);
alert(result);