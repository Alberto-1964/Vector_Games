const myHeading = document.getElementById("myHeading");
myHeading.style.textAlign = "center";

const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = solution.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = solution[i];
  solution[i] = solution[j];
  solution[j] = k;
}
s1 = solution[0];
s2 = solution[1];
s3 = solution[2];
s4 = solution[3];
s5 = solution[4];
s6 = solution[5];
s7 = solution[6];
s8 = solution[7];
s9 = solution[8];

s123 = s1 * s2 * s3;
s456 = s4 * s5 * s6;
s789 = s7 * s8 * s9;
s147 = s1 * s4 * s7;
s258 = s2 * s5 * s8;
s369 = s3 * s6 * s9;
enterButton = "ENTRAR";

document.getElementById("s123").innerHTML = s123;
document.getElementById("s456").innerHTML = s456;
document.getElementById("s789").innerHTML = s789;
document.getElementById("s147").innerHTML = s147;
document.getElementById("s258").innerHTML = s258;
document.getElementById("s369").innerHTML = s369;
document.getElementById("enterButton").innerHTML = enterButton;

function checkCorrectness(u1, u2, u3, u4, u5, u6, u7, u8, u9) {
  userInputCorrect =
    u1 * u2 * u3 == s123 &&
    u4 * u5 * u6 == s456 &&
    u7 * u8 * u9 == s789 &&
    u1 * u4 * u7 == s147 &&
    u2 * u5 * u8 == s258 &&
    u3 * u6 * u9 == s369;
  if (userInputCorrect) {
    window.alert("Correcto");
  } else {
    window.alert("Incorrecto");
  }
}
