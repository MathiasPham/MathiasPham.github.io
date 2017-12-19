function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBVxqcvXQE4xQB0hkxpuBUF2DyndBVqDqg",
        authDomain: "pham1-2be69.firebaseapp.com",
        databaseURL: "https://pham1-2be69.firebaseio.com",
        projectId: "pham1-2be69",
        storageBucket: "pham1-2be69.appspot.com",
        messagingSenderId: "331923555063"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visland(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
<div>
<h4>${navn}</h4>
<ul>
<li>Capitol ${info.capitol}
<li>${info.title}
<li>${info.leader}
`;
    }
    ref.on("child_added", visland);


}

