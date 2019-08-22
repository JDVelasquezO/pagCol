// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAWTtf3oufVcOYnzXMsO77N4JVwiQ943Jc",
authDomain: "imageswilliam.firebaseapp.com",
databaseURL: "https://imageswilliam.firebaseio.com",
projectId: "imageswilliam",
storageBucket: "imageswilliam.appspot.com",
messagingSenderId: "79424202780",
appId: "1:79424202780:web:b025675d0e58a767"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export { db }