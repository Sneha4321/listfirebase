var firebaseConfig = {
    apiKey: "AIzaSyDETMSvQM_9zH7yAokXi5t9BXJVOxKOYpc",
    authDomain: "practice-19899.firebaseapp.com",
    databaseURL: "https://practice-19899-default-rtdb.firebaseio.com",
    projectId: "practice-19899",
    storageBucket: "practice-19899.appspot.com",
    messagingSenderId: "409451530327",
    appId: "1:409451530327:web:2f1285fd03b48c39987b12",
    measurementId: "G-M8ZVWYDG3D"
  };
  

  firebase.initializeApp(firebaseConfig);


//var stdNo = 0;

function addItemsToList(name,page,url){
    var ul = document.getElementById('list');
    //var header = document.createElement('h2')

    var _name = document.createElement('li');
    var _page= document.createElement('li');
    var _url= document.createElement('li');
    
//header.innerHTML = 'Student- ' + (++stdNo);

_name.innerHTML = 'Author: ' + name;
_page.innerHTML = 'Page: ' + page;
_url.innerHTML =  'Title: ' ;

//ul.appendChild(header);
ul.appendChild(_name);
ul.appendChild(_page);
ul.appendChild(_url);


if(url.indexOf("http://" ) === 0){
                            var a = document.createElement('a');
                            var link = document.createTextNode(name)
                            a.appendChild(link);
                            a.title = name;
                            a.href = url;
                            a.target="_blank"
                            document.body.appendChild(a);
                            _url.append(a);
                        }else{
                            if(url.indexOf("https://") === 0){
                            var a = document.createElement('a');
                            var link = document.createTextNode(name)
                            a.appendChild(link);
                            a.title = name;
                            a.href = url;
                            a.target="_blank"
                            document.body.appendChild(a);
                            _url.append(a);
                        }else {
                            _url.innerHTML =  'Title: ' + url; 
                        }

                        }                  

}

function FetchAllData(){
    firebase.database().ref('student').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().Name;
                let page = ChildSnapshot.val().Page;
                let url = ChildSnapshot.val().Url;

addItemsToList(name,page,url);

            }
        );
        
    });

}

window.onload = FetchAllData;
