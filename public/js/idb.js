//BASED ON 18.4

let db;

const request = indexedDB.open('challenge19', 1)

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('challenge19', { autoIncrement: true });
  };

  // upon a successful 
request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
    }
  };
  
request.onerror = function(event) {
// log error here
console.log(event.target.errorCode);
};