$(function() {
        $("#button").click(function(e){
          e.preventDefault();
          cardname = $("#cardname").val();
          $("#img").attr('src', '');
          $("#name").text('');
          $("#cardSet").text('');
          $("#cardSet").css("background-color","#fff");
          $("#cardSet").css("color","#000");
          $("#type").text('');
          $("#rarity").text('');
          $("#rarity").css("background-color","#fff");
          $("#rarity").css("color","#000");
          $("#desc").text('');
          NProgress.start();
          var rand = Math.floor(Math.random() * 1206);
          var cardIndexRef = firebase.database().ref('cardindex/' + rand);
          cardIndexRef.once('value').then(function(snapshot){
            var requrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/'+ snapshot.val();
            requrl += '?locale=koKR';
              $.ajax({
                method: "GET",
                beforeSend: function(request) {
                  request.setRequestHeader("X-Mashape-Key", 'JffA8g8glAmsh2NPH79UZNpC40xbp1V4Y2njsnOsAsnikSS5x2');
                },
                async: true,
                url: requrl,
                dataType: 'json'
              }).done(function(data){
                $("#name").text(data[0]['name']);
                switch(data[0]['cardSet']) {
                  case 'The League of Explorers':
                    $("#cardSet").text("탐험가 연맹");
                    $("#cardSet").css("background-color","#603722");
                    $("#cardSet").css("color","#ebffc4");
                    break;
                  case 'The Grand Tournament':
                    $("#cardSet").text("대 마상시합");
                    $("#cardSet").css("background-color","#a80b52");
                    $("#cardSet").css("color","#fff");
                    break;
                  case 'Blackrock Mountain':
                    $("#cardSet").text("검은바위 산");
                    $("#cardSet").css("background-color","#590007");
                    $("#cardSet").css("color","#ffdccc");
                    break;
                  case 'Goblins vs Gnomes':
                    $("#cardSet").text("고블린 대 노움");
                    $("#cardSet").css("background-color","#8c0700");
                    $("#cardSet").css("color","#fff6d6");
                    break;
                  case 'Naxxramas':
                    $("#cardSet").text("낙스라마스의 저주");
                    $("#cardSet").css("background-color","#340851");
                    $("#cardSet").css("color","#dffcc4");
                    break;
                  case 'Hall of Fame':
                    $("#cardSet").text("명예의 전당");
                    $("#cardSet").css("background-color","#2c1470");
                    $("#cardSet").css("color","#fffdea");
                    break;
                  case "Journey to Un'Goro":
                    $("#cardSet").text("운고로를 향한 여정");
                    $("#cardSet").css("background-color","#1f512d");
                    $("#cardSet").css("color","#ffe0aa");
                    break;
                  case 'Mean Streets of Gadgetzan':
                    $("#cardSet").text("비열한 거리의 가젯잔");
                    $("#cardSet").css("background-color","#16293d");
                    $("#cardSet").css("color","#fff3d3");
                    break;
                  case 'One Night in Karazhan':
                    $("#cardSet").text("한여름 밤의 카라잔");
                    $("#cardSet").css("background-color","#6424a0");
                    $("#cardSet").css("color","#f5d8ff");
                    break;
                  case 'Whispers of the Old Gods':
                    $("#cardSet").text("고대 신의 속삭임");
                    $("#cardSet").css("background-color","#3b0a54");
                    $("#cardSet").css("color","#ffeedb");
                    break;
                  case 'Classic':
                    $("#cardSet").text("오리지널");
                    $("#cardSet").css("background-color","#fff");
                    $("#cardSet").css("color","#000");
                    break;
                  case 'Basic':
                    $("#cardSet").text("베이직");
                    $("#cardSet").css("background-color","#fff");
                    $("#cardSet").css("color","#000");
                    break;
                }
                switch(data[0]['type']){
                  case 'Minion':
                    $("#type").text("하수인");
                    break;
                  case 'Spell':
                    $("#type").text("주문");
                    break;
                  case 'Hero':
                    $("#type").text("영웅");
                    break;
                  case 'Weapon':
                    $("#type").text("무기");
                    break;
                }
                switch(data[0]['rarity']) {
                    case 'Free':
                      $("#rarity").text("기본 카드")
                    break;
                    case 'Common':
                      $("#rarity").text("일반 카드")
                      break;
                    case 'Rare':
                      $("#rarity").text("희귀 카드")
                      $("#rarity").css("background-color","#2161a5");
                      $("#rarity").css("color","#fff");
                      break;
                    case 'Epic':
                      $("#rarity").text("영웅 카드")
                      $("#rarity").css("background-color","#5e2984");
                      $("#rarity").css("color","#fff");
                      break;
                    case 'Legendary':
                      $("#rarity").text("전설 카드")
                      $("#rarity").css("background-color","#ffad32");
                      $("#rarity").css("color","#fff");
                      break;
                }
                if (data[0]['text'] == null) {
                  $("#desc").html('');
                }
                else {
                    var desc = data[0]['text'];
                    desc = desc.replace(/\\n/g,' ')
                           .replace('[x]','')
                           .replace(/\#/g,'')
                           .replace(/\$/g,'');
                    $("#desc").html(desc);
                }    
              });
            var cardInfoRef = firebase.database().ref('cardinfo/' + snapshot.val());
            cardInfoRef.once('value').then(function(snapshot){
               var storage = firebase.storage().ref('cards/' + snapshot.val() + '-gold.gif');
               storage.getDownloadURL().then(function(url){
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = function(event) {
                      var blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                    var img = document.getElementById('img');
                    img.src = url;
                  }).catch(function(error){
                    
                  });
             });
          });
          
          
          NProgress.done();      
          });
        });