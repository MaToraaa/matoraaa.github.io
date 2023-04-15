// declare realkey variable
let realKey = "";

// random chars length
let leng = 80;
// key integer length xor loop
let k = 0;

// characters
const abc = "abcdefghiklmnopqrstuvwxy";
// characters table
let abcTab = [];

// inserting chars
for (let i = 0; i < abc.length; i++) {
  abcTab[i] = abc[i];
}

// ran{m string
let ran1 = "";
let ran2 = "";
let ran3 = "";
let ran4 = "";
let ran5 = "";
let ran6 = "";
for (let i = 0; i < leng; i++) {
  ran1 += abcTab[Math.floor(Math.random() * abcTab.length)];
  ran2 += abcTab[Math.floor(Math.random() * abcTab.length)];
  ran3 += abcTab[Math.floor(Math.random() * abcTab.length)];
  ran4 += abcTab[Math.floor(Math.random() * abcTab.length)];
  ran5 += abcTab[Math.floor(Math.random() * abcTab.length)];
  ran6 += abcTab[Math.floor(Math.random() * abcTab.length)];
}

// function encrypt xor
const xorE = (sc, key) => {
  const tabel = [];
  let k = 0;
  for (let i = 0; i < sc.length; i++) {
    let byteValue = sc.charCodeAt(i) + key.charCodeAt(k);
    k++;
    tabel.push(byteValue);
    if (k == key.length) {
      k = 0;
    }
  }
  return tabel;
};

const xorE2 = (sc, key) => {
  let tabel = [];
  for (let i = 0; i < sc.length; i++) {
    k += 1;
    let byte = sc.charCodeAt(i) + key.charCodeAt(k);
    tabel.push(byte);
    if (k == key.length) {
      k = 0;
    }
  }
  k = 0;
  return tabel;
};

// function decrypt xor for testing
const xorD = (tabel) => {
  let hasil = "";
  for (const v of tabel) {
    k = k + 1;
    hasil = hasil + String.fromCharCode(v - key.charCodeAt(k));
    if (k == key.length) {
      k = 0;
    }
  }
  return hasil;
};

// declare tabel alibi
let tab1 = [];
let tab2 = [];
let tab3 = [];
let tab4 = [];
let tab5 = [];
let tab6 = [];

for (let i = 0; i < leng; i++) {
  // tab1[i] = string.byte(abcTab[math.ranm(1, #abcTab)]
  tab1[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
  tab2[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
  tab3[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
  tab4[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
  tab5[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
  tab6[i] = abcTab[Math.floor(Math.random() * abcTab.length)].charCodeAt(0);
}

tab1 = tab1.join();
tab2 = tab2.join();
tab3 = tab3.join();
tab4 = tab4.join();
tab5 = tab5.join();
tab6 = tab6.join();

// function alibi alias pengalhan
// @param var1 key
// @param var2 string
// @param var3 variable
// @param tablenya table

const alibi = (var1, var2, var3, tablenya) => {
  return `_ENV={string=string,table=table,math=math,pairs=pairs,load=load,print=print};${var1}="${var2}";${var2}="${var1}";${var3}={${tablenya}};function xor(t)local ciphertext="";for i=1,#${var2} do local byte=string.byte(${var2}, i);local quibit=string.byte(${var1},(i-1)%#${var1}+1);ciphertext=ciphertext..string.char(bit.bxor(byte,quibit));end;return ciphertext;end;bit={bxor=function(a,b)local r,m=0,1;while a>0 and b>0 do local aa,bb=a%2,b%2;r=r+m*((aa+bb)%2);m=m*2;a=math.floor(a/2);b=math.floor(b/2) end;if a>0 then r=r+m*a end;if b>0 then r=r+m*b end;return r;end};xor(${var3})${ran1}z="Encrypt By Dentoo";`;
};

// @return function decrypt real
const decX = (tabel) => {
  // ran3
  let script = ran3;
  // ran4
  let keyleng = ran4;
  // ran1
  let l = ran1;
  // ran2
  let v = ran2;
  // ran5
  let hasil = ran5;
  return `${script}={${tabel.join()}};${keyleng}=0;${hasil}='';for ${l},${v} in pairs(${script}) do ${keyleng}=${keyleng}+1;${hasil}=${hasil}.._ENV["\\115\\116\\114\\105\\110\\103"]["\\99\\104\\97\\114"](${v}-_ENV["\\115\\116\\114\\105\\110\\103"]["\\98\\121\\116\\101"]("${realKey}",${keyleng}));if ${keyleng}==#"${realKey}" then ${keyleng}=0;end;end;if ${ran1}z=="\\69\\110\\99\\114\\121\\112\\116\\32\\66\\121\\32\\68\\101\\110\\116\\111\\111" then _ENV["\\108\\111\\97\\100"](${hasil})() else print("Error whle runing this code");end;`;
};

// @return Gabungan semuanya
// Output = templateE + alibi(ran1,ran2,ran3,tab1) + decX(xorE())
// console.log(Output)

const fileInput = document.getElementById("file");
const fileChoosen = document.getElementById("num-of-files");
const read = new FileReader();
const form = document.getElementById("form");
console.log(form);

fileInput.addEventListener("change", () => {
  let fileName = fileInput.files[0].name;
  let fileSize = (fileInput.files[0].size / 1024).toFixed(2);
  if (fileName.endsWith(".lua") || fileName.endsWith(".txt")) {
    fileChoosen.innerHTML = `${fileName} (${fileSize}Kb)`;
  } else {
    fileChoosen.innerHTML = `Please upload only lua file or txt file!`;
  }
});

form.addEventListener("submit", (event) => {
  console.log("Encrypting..");
  let file = document.getElementById("file").files[0];
  if (file == null) alert("Please upload file first!");
  let keys = document.getElementById("key").value;
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    realKey += "\\" + keys.charCodeAt(i);
  }
  read.readAsText(file);
  read.onload = () => {
    const sc = read.result;
    const templateE = `local Segel=[[${keys}]];Pesan1 ="Ini Encrypted By Dentoo";Pesan2 ="Script ini murah jadi plis jangan di decrypt";Pesan3 ="Mohon dengan sangat ya kak :("; AboutMe ="Aku hanyalah seorang wibu yang iseng belajar Lua";PesanTerakhir = "Sekian Terimakasih";${ran6}="Aku Imut Ehe :v";`;
    const Output = templateE + decX(xorE(sc, keys));
    let blob = new Blob([Output], { type: "octet-stream" });
    const href = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), {
      href,
      style: "display:none",
      download: `Encrypted_${file.name}`,
    });
    a.click();
    console.log("Downloading..");
    URL.revokeObjectURL(href);
    a.remove();
  };
});
