let { PythonShell } = require("python-shell");
let path = require("path");
let gestureSetId = "def";
// const dialog = require('electron').dialog;
function get_gesture_input() {
  let connectionStatus = document.getElementById("connection-status");
let gesture0 = document.getElementById("element0").value;
let gesture1 = document.getElementById("element1").value;
let gesture2 = document.getElementById("element2").value;
let gesture3 = document.getElementById("element3").value;
let gesture4 = document.getElementById("element4").value;
let gesture5 = document.getElementById("element5").value;
let gesture6 = document.getElementById("element6").value;
let gesture7 = document.getElementById("element7").value;
let gesture8 = document.getElementById("element8").value;
let gesture9 = document.getElementById("element9").value;
let gesture10 = document.getElementById("element10").value;
let gesture11 = document.getElementById("element11").value;
let gesture12 = document.getElementById("element12").value;
let gesture13 = document.getElementById("element13").value;
let gesture14 = document.getElementById("element14").value;
let gesture15 = document.getElementById("element15").value;
let gesture16 = document.getElementById("element16").value;
let gesture17 = document.getElementById("element17").value;
let gesture18 = document.getElementById("element18").value;
let gesture19 = document.getElementById("element19").value;
let gesture20 = document.getElementById("element20").value;
let gesture21 = document.getElementById("element21").value;
let gesture22 = document.getElementById("element22").value;
let gesture23 = document.getElementById("element23").value;
let gesture24 = document.getElementById("element24").value;
let gesture25 = document.getElementById("element25").value;
let gesture26 = document.getElementById("element26").value;
let gesture27 = document.getElementById("element27").value;
  
  connectionStatus.innerHTML = "🟢 Connected";
document.getElementById("element0").disabled = true;
document.getElementById("element1").disabled = true;
document.getElementById("element2").disabled = true;
document.getElementById("element3").disabled = true;
document.getElementById("element4").disabled = true;
document.getElementById("element5").disabled = true;
document.getElementById("element6").disabled = true;
document.getElementById("element7").disabled = true;
document.getElementById("element8").disabled = true;
document.getElementById("element9").disabled = true;
document.getElementById("element10").disabled = true;
document.getElementById("element11").disabled = true;
document.getElementById("element12").disabled = true;
document.getElementById("element13").disabled = true;
document.getElementById("element14").disabled = true;
document.getElementById("element15").disabled = true;
document.getElementById("element16").disabled = true;
document.getElementById("element17").disabled = true;
document.getElementById("element18").disabled = true;
document.getElementById("element19").disabled = true;
document.getElementById("element20").disabled = true;
document.getElementById("element21").disabled = true;
document.getElementById("element22").disabled = true;
document.getElementById("element23").disabled = true;
document.getElementById("element24").disabled = true;
document.getElementById("element25").disabled = true;
document.getElementById("element26").disabled = true;
document.getElementById("element27").disabled = true;
  document.getElementById("submit-button").disabled = true;
 
  let options = {
    scriptPath: path.join(__dirname, "/../engine/"),
    args: [
      gesture0,
      gesture1,
      gesture2,
      gesture3,
      gesture4,
      gesture5,
      gesture6,
      gesture7,
      gesture8,
      gesture9,
      gesture10,
      gesture11,
      gesture12,
      gesture13,
      gesture14,
      gesture15,
      gesture16,
      gesture17,
      gesture18,
      gesture19,
      gesture20,
      gesture21,
      gesture22,
      gesture23,
      gesture24,
      gesture25,
      gesture26,
      gesture27
    ],
    // pythonPath: "/Library/Frameworks/Python.framework/Versions/3.9/bin/python3",
  };

  let pyshell = new PythonShell("python_code_updated.py", options, function (
    err,
    results
  ) {
    if (err) throw err;
    console.log("results: %j", results);
  });
  pyshell.on("message", function (message) {
    // swal(message);
    document.getElementById("element0").disabled = false;
    document.getElementById("element1").disabled = false;
    document.getElementById("element2").disabled = false;
    document.getElementById("element3").disabled = false;
    document.getElementById("element4").disabled = false;
    document.getElementById("element5").disabled = false;
    document.getElementById("element6").disabled = false;
    document.getElementById("element7").disabled = false;
    document.getElementById("element8").disabled = false;
    document.getElementById("element9").disabled = false;
    document.getElementById("element10").disabled = false;
    document.getElementById("element11").disabled = false;
    document.getElementById("element12").disabled = false;
    document.getElementById("element13").disabled = false;
    document.getElementById("element14").disabled = false;
    document.getElementById("element15").disabled = false;
    document.getElementById("element16").disabled = false;
    document.getElementById("element17").disabled = false;
    document.getElementById("element18").disabled = false;
    document.getElementById("element19").disabled = false;
    document.getElementById("element20").disabled = false;
    document.getElementById("element21").disabled = false;
    document.getElementById("element22").disabled = false;
    document.getElementById("element23").disabled = false;
    document.getElementById("element24").disabled = false;
    document.getElementById("element25").disabled = false;
    document.getElementById("element26").disabled = false;
    document.getElementById("element27").disabled = false;
    document.getElementById("submit-button").disabled = false;
    connectionStatus.innerHTML = "🔴 Disconnected";
  });
  // console.log('Hi')
  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    // console.log("The exit code was: " + code);
    // console.log("The exit signal was: " + signal);
    console.log("finished");
  });
}

 // --------------FIREBASE CONFIG----------------------
  const firebaseConfig = {
    apiKey: "AIzaSyA3Bzvz8ogR-rqkKc4mQib2HoyY9t5jtO8",
    authDomain: "gesture-navigation-system.firebaseapp.com",
    projectId: "gesture-navigation-system",
    storageBucket: "gesture-navigation-system.appspot.com",
    messagingSenderId: "366819068277",
    appId: "1:366819068277:web:75d3d4ec831dc94f59eb3c",
    measurementId: "G-WB4572JMRZ",
  };

  firebase.initializeApp(firebaseConfig);

  let cloudDB = firebase.firestore();
  
// --------------------WRITE TO FIREBASE --------------
function Add_Doc_WithAutoID() {
let gesture0 = document.getElementById("element0").value;
let gesture1 = document.getElementById("element1").value;
let gesture2 = document.getElementById("element2").value;
let gesture3 = document.getElementById("element3").value;
let gesture4 = document.getElementById("element4").value;
let gesture5 = document.getElementById("element5").value;
let gesture6 = document.getElementById("element6").value;
let gesture7 = document.getElementById("element7").value;
let gesture8 = document.getElementById("element8").value;
let gesture9 = document.getElementById("element9").value;
let gesture10 = document.getElementById("element10").value;
let gesture11 = document.getElementById("element11").value;
let gesture12 = document.getElementById("element12").value;
let gesture13 = document.getElementById("element13").value;
let gesture14 = document.getElementById("element14").value;
let gesture15 = document.getElementById("element15").value;
let gesture16 = document.getElementById("element16").value;
let gesture17 = document.getElementById("element17").value;
let gesture18 = document.getElementById("element18").value;
let gesture19 = document.getElementById("element19").value;
let gesture20 = document.getElementById("element20").value;
let gesture21 = document.getElementById("element21").value;
let gesture22 = document.getElementById("element22").value;
let gesture23 = document.getElementById("element23").value;
let gesture24 = document.getElementById("element24").value;
let gesture25 = document.getElementById("element25").value;
let gesture26 = document.getElementById("element26").value;
let gesture27 = document.getElementById("element27").value;

  // --- ADD RANDOM ID
  cloudDB
    .collection("gestures")
    .add({
      gesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
      gesture12: gesture12,
      gesture13: gesture13,
      gesture14: gesture14,
      gesture15: gesture15,
      gesture16: gesture16,
      gesture17: gesture17,
      gesture18: gesture18,
      gesture19: gesture19,
      gesture20: gesture20,
      gesture21: gesture21,
      gesture22: gesture22,
      gesture23: gesture23,
      gesture24: gesture24,
      gesture25: gesture25,
      gesture26: gesture26,
      gesture27: gesture27,
      id: gestureSetId,
    })
    .then(function (docRef) {
      console.log("Doc written with ID", docRef);
      updateLocalData();
    })
    .catch(function (err) {
      console.log("error found at 131", err);
    });
}

function Add_Doc_WithID() {
let gesture0 = document.getElementById("element0").value;
let gesture1 = document.getElementById("element1").value;
let gesture2 = document.getElementById("element2").value;
let gesture3 = document.getElementById("element3").value;
let gesture4 = document.getElementById("element4").value;
let gesture5 = document.getElementById("element5").value;
let gesture6 = document.getElementById("element6").value;
let gesture7 = document.getElementById("element7").value;
let gesture8 = document.getElementById("element8").value;
let gesture9 = document.getElementById("element9").value;
let gesture10 = document.getElementById("element10").value;
let gesture11 = document.getElementById("element11").value;
let gesture12 = document.getElementById("element12").value;
let gesture13 = document.getElementById("element13").value;
let gesture14 = document.getElementById("element14").value;
let gesture15 = document.getElementById("element15").value;
let gesture16 = document.getElementById("element16").value;
let gesture17 = document.getElementById("element17").value;
let gesture18 = document.getElementById("element18").value;
let gesture19 = document.getElementById("element19").value;
let gesture20 = document.getElementById("element20").value;
let gesture21 = document.getElementById("element21").value;
let gesture22 = document.getElementById("element22").value;
let gesture23 = document.getElementById("element23").value;
let gesture24 = document.getElementById("element24").value;
let gesture25 = document.getElementById("element25").value;
let gesture26 = document.getElementById("element26").value;
let gesture27 = document.getElementById("element27").value;
  // --- ADD CUSOM ID
  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .set({
      gesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
      gesture12: gesture12,
      gesture13: gesture13,
      gesture14: gesture14,
      gesture15: gesture15,
      gesture16: gesture16,
      gesture17: gesture17,
      gesture18: gesture18,
      gesture19: gesture19,
      gesture20: gesture20,
      gesture21: gesture21,
      gesture22: gesture22,
      gesture23: gesture23,
      gesture24: gesture24,
      gesture25: gesture25,
      gesture26: gesture26,
      gesture27: gesture27,
      id: gestureSetId,
    })
    .then(function () {
      console.log("Doc written with ID", gestureSetId);
      updateLocalData();
    })
    .catch(function (err) {
      console.log("error found at 131", err);
    });
}


//  --------------UPDATE DATA _----------------------

function Update_Gesture() {
let gesture0 = document.getElementById("element0").value;
let gesture1 = document.getElementById("element1").value;
let gesture2 = document.getElementById("element2").value;
let gesture3 = document.getElementById("element3").value;
let gesture4 = document.getElementById("element4").value;
let gesture5 = document.getElementById("element5").value;
let gesture6 = document.getElementById("element6").value;
let gesture7 = document.getElementById("element7").value;
let gesture8 = document.getElementById("element8").value;
let gesture9 = document.getElementById("element9").value;
let gesture10 = document.getElementById("element10").value;
let gesture11 = document.getElementById("element11").value;
let gesture12 = document.getElementById("element12").value;
let gesture13 = document.getElementById("element13").value;
let gesture14 = document.getElementById("element14").value;
let gesture15 = document.getElementById("element15").value;
let gesture16 = document.getElementById("element16").value;
let gesture17 = document.getElementById("element17").value;
let gesture18 = document.getElementById("element18").value;
let gesture19 = document.getElementById("element19").value;
let gesture20 = document.getElementById("element20").value;
let gesture21 = document.getElementById("element21").value;
let gesture22 = document.getElementById("element22").value;
let gesture23 = document.getElementById("element23").value;
let gesture24 = document.getElementById("element24").value;
let gesture25 = document.getElementById("element25").value;
let gesture26 = document.getElementById("element26").value;
let gesture27 = document.getElementById("element27").value;
  // --- ADD CUSOM ID
  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .update({
      ggesture0: gesture0,
      gesture1: gesture1,
      gesture2: gesture2,
      gesture3: gesture3,
      gesture4: gesture4,
      gesture5: gesture5,
      gesture6: gesture6,
      gesture7: gesture7,
      gesture8: gesture8,
      gesture9: gesture9,
      gesture10: gesture10,
      gesture11: gesture11,
      gesture12: gesture12,
      gesture13: gesture13,
      gesture14: gesture14,
      gesture15: gesture15,
      gesture16: gesture16,
      gesture17: gesture17,
      gesture18: gesture18,
      gesture19: gesture19,
      gesture20: gesture20,
      gesture21: gesture21,
      gesture22: gesture22,
      gesture23: gesture23,
      gesture24: gesture24,
      gesture25: gesture25,
      gesture26: gesture26,
      gesture27: gesture27,
    })
    .then(function (docRef) {
      console.log("Doc written with ID", docRef);
      updateLocalData();
    })
    .catch(function (err) {
      console.log("error found at 131", err);
    });
}


function RetriveData() {
let gesture0Entity = document.getElementById("element0");
let gesture1Entity = document.getElementById("element1");
let gesture2Entity = document.getElementById("element2");
let gesture3Entity = document.getElementById("element3");
let gesture4Entity = document.getElementById("element4");
let gesture5Entity = document.getElementById("element5");
let gesture6Entity = document.getElementById("element6");
let gesture7Entity = document.getElementById("element7");
let gesture8Entity = document.getElementById("element8");
let gesture9Entity = document.getElementById("element9");
let gesture10Entity = document.getElementById("element10");
let gesture11Entity = document.getElementById("element11");
let gesture12Entity = document.getElementById("element12");
let gesture13Entity = document.getElementById("element13");
let gesture14Entity = document.getElementById("element14");
let gesture15Entity = document.getElementById("element15");
let gesture16Entity = document.getElementById("element16");
let gesture17Entity = document.getElementById("element17");
let gesture18Entity = document.getElementById("element18");
let gesture19Entity = document.getElementById("element19");
let gesture20Entity = document.getElementById("element20");
let gesture21Entity = document.getElementById("element21");
let gesture22Entity = document.getElementById("element22");
let gesture23Entity = document.getElementById("element23");
let gesture24Entity = document.getElementById("element24");
let gesture25Entity = document.getElementById("element25");
let gesture26Entity = document.getElementById("element26");
let gesture27Entity = document.getElementById("element27");



  cloudDB
    .collection("gestures")
    .doc(gestureSetId)
    .get().then((docRef) => {
      if (docRef.exists) {
        gesture0Entity.value = docRef.data().gesture0;
        gesture1Entity.value = docRef.data().gesture1;
        gesture2Entity.value = docRef.data().gesture2;
        gesture3Entity.value = docRef.data().gesture3;
        gesture4Entity.value = docRef.data().gesture4;
        gesture5Entity.value = docRef.data().gesture5;
        gesture6Entity.value = docRef.data().gesture6;
        gesture7Entity.value = docRef.data().gesture7;
        gesture8Entity.value = docRef.data().gesture8;
        gesture9Entity.value = docRef.data().gesture9;
        gesture10Entity.value = docRef.data().gesture10;
        gesture11Entity.value = docRef.data().gesture11;
        gesture12Entity.value = docRef.data().gesture12;
        gesture13Entity.value = docRef.data().gesture13;
        gesture14Entity.value = docRef.data().gesture14;
        gesture15Entity.value = docRef.data().gesture15;
        gesture16Entity.value = docRef.data().gesture16;
        gesture17Entity.value = docRef.data().gesture17;
        gesture18Entity.value = docRef.data().gesture18;
        gesture19Entity.value = docRef.data().gesture19;
        gesture20Entity.value = docRef.data().gesture20;
        gesture21Entity.value = docRef.data().gesture21;
        gesture22Entity.value = docRef.data().gesture22;
        gesture23Entity.value = docRef.data().gesture23;
        gesture24Entity.value = docRef.data().gesture24;
        gesture25Entity.value = docRef.data().gesture25;
        gesture26Entity.value = docRef.data().gesture26;
        gesture27Entity.value = docRef.data().gesture27;
        console.log("DATA READ SUCCESSFUL")
        updateLocalData();
      } else {
        console.log("does not exist")
      }
    }).catch(function (err) {
      console.log("error found at 263", err);
    })
}


  // -------------------BUTTON EVENT-------------------
function add_to_firebase(){
  // Add_Doc_WithAutoID();
  Add_Doc_WithID();
}

function read_from_firebase() {
  RetriveData();
}
function updateText(val) {
  gestureSetId = val;
}

// -------------- DOWNLOAD JSON ---------------
function downloadFile() {

let gesture0 = document.getElementById("element0").value;
let gesture1 = document.getElementById("element1").value;
let gesture2 = document.getElementById("element2").value;
let gesture3 = document.getElementById("element3").value;
let gesture4 = document.getElementById("element4").value;
let gesture5 = document.getElementById("element5").value;
let gesture6 = document.getElementById("element6").value;
let gesture7 = document.getElementById("element7").value;
let gesture8 = document.getElementById("element8").value;
let gesture9 = document.getElementById("element9").value;
let gesture10 = document.getElementById("element10").value;
let gesture11 = document.getElementById("element11").value;
let gesture12 = document.getElementById("element12").value;
let gesture13 = document.getElementById("element13").value;
let gesture14 = document.getElementById("element14").value;
let gesture15 = document.getElementById("element15").value;
let gesture16 = document.getElementById("element16").value;
let gesture17 = document.getElementById("element17").value;
let gesture18 = document.getElementById("element18").value;
let gesture19 = document.getElementById("element19").value;
let gesture20 = document.getElementById("element20").value;
let gesture21 = document.getElementById("element21").value;
let gesture22 = document.getElementById("element22").value;
let gesture23 = document.getElementById("element23").value;
let gesture24 = document.getElementById("element24").value;
let gesture25 = document.getElementById("element25").value;
let gesture26 = document.getElementById("element26").value;
let gesture27 = document.getElementById("element27").value;
  
let UnConvertedContent = {
  gesture0: gesture0,
  gesture1: gesture1,
  gesture2: gesture2,
  gesture3: gesture3,
  gesture4: gesture4,
  gesture5: gesture5,
  gesture6: gesture6,
  gesture7: gesture7,
  gesture8: gesture8,
  gesture9: gesture9,
  gesture10: gesture10,
  gesture11: gesture11,
  gesture12: gesture12,
  gesture13: gesture13,
  gesture14: gesture14,
  gesture15: gesture15,
  gesture16: gesture16,
  gesture17: gesture17,
  gesture18: gesture18,
  gesture19: gesture19,
  gesture20: gesture20,
  gesture21: gesture21,
  gesture22: gesture22,
  gesture23: gesture23,
  gesture24: gesture24,
  gesture25: gesture25,
  gesture26: gesture26,
  gesture27: gesture27,
  gestureSetId: gestureSetId,
};
  let content = JSON.stringify(UnConvertedContent);

  let fileName = "gesture_backup.json";
  let contentType = "application/json";
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// ------- IMPORT ----------
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}


document.getElementById("file-upload").onchange = function () {

  let filePath = document.getElementById("file-upload").files[0].path;
  
  readTextFile(filePath, function (text) {
    var data = JSON.parse(text);
    // console.log(data);
     let gesture0Entity = document.getElementById("element0");
     let gesture1Entity = document.getElementById("element1");
     let gesture2Entity = document.getElementById("element2");
     let gesture3Entity = document.getElementById("element3");
     let gesture4Entity = document.getElementById("element4");
     let gesture5Entity = document.getElementById("element5");
     let gesture6Entity = document.getElementById("element6");
     let gesture7Entity = document.getElementById("element7");
     let gesture8Entity = document.getElementById("element8");
     let gesture9Entity = document.getElementById("element9");
     let gesture10Entity = document.getElementById("element10");
     let gesture11Entity = document.getElementById("element11");
     let gesture12Entity = document.getElementById("element12");
     let gesture13Entity = document.getElementById("element13");
     let gesture14Entity = document.getElementById("element14");
     let gesture15Entity = document.getElementById("element15");
     let gesture16Entity = document.getElementById("element16");
     let gesture17Entity = document.getElementById("element17");
     let gesture18Entity = document.getElementById("element18");
     let gesture19Entity = document.getElementById("element19");
     let gesture20Entity = document.getElementById("element20");
     let gesture21Entity = document.getElementById("element21");
     let gesture22Entity = document.getElementById("element22");
     let gesture23Entity = document.getElementById("element23");
     let gesture24Entity = document.getElementById("element24");
     let gesture25Entity = document.getElementById("element25");
     let gesture26Entity = document.getElementById("element26");
     let gesture27Entity = document.getElementById("element27");
      let gestureId = document.getElementById("gesture-set-id");

    let {
      gesture0,
      gesture1,
      gesture2,
      gesture3,
      gesture4,
      gesture5,
      gesture6,
      gesture7,
      gesture8,
      gesture9,
      gesture10,
      gesture11,
      gesture12,
      gesture13,
      gesture14,
      gesture15,
      gesture16,
      gesture17,
      gesture18,
      gesture19,
      gesture20,
      gesture21,
      gesture22,
      gesture23,
      gesture24,
      gesture25,
      gesture26,
      gesture27,
      gestureSetId,
    } = data;
    // console.log(gesture0, gesture1, gesture2, gesture3, gesture4)
    gesture0Entity.value = gesture0;
    gesture1Entity.value = gesture1;
    gesture2Entity.value = gesture2;
    gesture3Entity.value = gesture3;
    gesture4Entity.value = gesture4;
    gesture5Entity.value = gesture5;
    gesture6Entity.value = gesture6;
    gesture7Entity.value = gesture7;
    gesture8Entity.value = gesture8;
    gesture9Entity.value = gesture9;
    gesture10Entity.value = gesture10;
    gesture11Entity.value = gesture11;
    gesture12Entity.value = gesture12;
    gesture13Entity.value = gesture13;
    gesture14Entity.value = gesture14;
    gesture15Entity.value = gesture15;
    gesture16Entity.value = gesture16;
    gesture17Entity.value = gesture17;
    gesture18Entity.value = gesture18;
    gesture19Entity.value = gesture19;
    gesture20Entity.value = gesture20;
    gesture21Entity.value = gesture21;
    gesture22Entity.value = gesture22;
    gesture23Entity.value = gesture23;
    gesture24Entity.value = gesture24;
    gesture25Entity.value = gesture25;
    gesture26Entity.value = gesture26;
    gesture27Entity.value = gesture27;
    gestureId.value = gestureSetId;
    updateLocalData();
  });
};

function updateCardStatus(spanId, selectId) {
  let e = document.getElementById(selectId);
  document.getElementById(spanId).innerHTML = e.options[e.selectedIndex].text;
};

window.onload = function () {
  updateLocalData();
}


function updateLocalData() {
  updateCardStatus("stat-0", "element0");
  updateCardStatus("stat-1", "element1");
  updateCardStatus("stat-2", "element2");
  updateCardStatus("stat-3", "element3");
  updateCardStatus("stat-4", "element4");
  updateCardStatus("stat-5", "element5");
  updateCardStatus("stat-6", "element6");
  updateCardStatus("stat-7", "element7");
  updateCardStatus("stat-8", "element8");
  updateCardStatus("stat-9", "element9");
  updateCardStatus("stat-10", "element10");
  updateCardStatus("stat-11", "element11");
  updateCardStatus("stat-12", "element12");
  updateCardStatus("stat-13", "element13");
  updateCardStatus("stat-14", "element14");
  updateCardStatus("stat-15", "element15");
  updateCardStatus("stat-16", "element16");
  updateCardStatus("stat-17", "element17");
  updateCardStatus("stat-18", "element18");
  updateCardStatus("stat-19", "element19");
  updateCardStatus("stat-20", "element20");
  updateCardStatus("stat-21", "element21");
  updateCardStatus("stat-22", "element22");
  updateCardStatus("stat-23", "element23");
  updateCardStatus("stat-24", "element24");
  updateCardStatus("stat-25", "element25");
  updateCardStatus("stat-26", "element26");
  updateCardStatus("stat-27", "element27");
}