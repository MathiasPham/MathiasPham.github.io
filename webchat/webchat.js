function setup() {
    // Initialize Firebase
var config = {
    apiKey: "AIzaSyDOU-ZIP6Cu8nzp6rOviZJP5OY7dzI1bfI",
    authDomain: "webchat-8de70.firebaseapp.com",
    databaseURL: "https://webchat-8de70.firebaseio.com",
    projectId: "webchat-8de70",
    storageBucket: "webchat-8de70.appspot.com",
    messagingSenderId: "983423477740"
  };
  firebase.initializeApp(config);

  let divListe = document.getElementById("forum");

  let ref = firebase.database().ref("medlem");

  function vismedlemmer(snapshot) {
      let medlemnr = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
        <div>
          <h4>Medlem nr ${medlemnr}</h4>
          <ul>
           <li>${info.fornavn} ${info.etternavn}
           <li>Epost ${info.epost}
           <li>Adresse ${info.adresse}
           <li>Etternavn ${info.etternavn}
          </ul>
        </div>
      `;
  }
  ref.on("child_added", visMedlemmer);