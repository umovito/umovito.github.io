$(function() {
    var video = document.getElementById("bgvid");
    var source = document.getElementById("vdsrc");

      $("#button").click(function(e){
        e.preventDefault();
        cardname = $("#cardname").val();
        $("#img").attr('src', '');
        $("#name").text('카드 이름 - 불러오는 중...');
        $("#name").css("color","gray");
        $("#cardSet").text('카드 세트 - 불러오는 중...');
        $("#cardSet").css("background-color","#000");
        $("#cardSet").css("color","gray");
        $("#type").text('카드 종류 - 불러오는 중...');
        $("#type").css("color","gray");
        $("#rarity").text('카드 등급 - 불러오는 중...');
        $("#rarity").css("background-color","#000");
        $("#rarity").css("color","gray");
        $("#desc").text('카드 설명 - 불러오는 중...');
        $("#desc").css("color","gray");
        NProgress.start();
        var rand = Math.floor(Math.random() * 1206);
        var cardIndexRef = firebase.database().ref('NumtoID/' + rand);
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
            for (var i=0; i<data.length; i++) {
              if (data[i]['name'] != null &&
                data[i]['cardSet'] != null &&
                data[i]['type'] != null &&
                data[i]['rarity'] != null) {
                $("#name").css("color","white");
                  $("#name").text(data[i]['name']);
                      switch(data[i]['cardSet']) {
                        case 'The League of Explorers':
                          $("#cardSet").text("탐험가 연맹");
                          $("#cardSet").css("background-color","#603722");
                          $("#cardSet").css("color","#ebffc4");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/The%20League%20of%20Explorers%20Cinematic%20Trailer.mp4?alt=media&amp;token=92b766b7-cdba-4648-aaed-d9fc4e1bfdb1");
                          video.load();
                          video.play();
                          break;
                        case 'The Grand Tournament':
                          $("#cardSet").text("대 마상시합");
                          $("#cardSet").css("background-color","#a80b52");
                          $("#cardSet").css("color","#fff");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/The%20Grand%20Tournament%20Trailer.mp4?alt=media&amp;token=cac1bfd1-b211-42d6-ab52-cdb94600ed3f");
                          video.load();
                          video.play();
                          break;
                        case 'Blackrock Mountain':
                          $("#cardSet").text("검은바위 산");
                          $("#cardSet").css("background-color","#590007");
                          $("#cardSet").css("color","#ffdccc");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Blackrock%20Mountain%20Cinematic%20Trailer.mp4?alt=media&amp;token=24ef212a-e080-4a7f-b38f-0f6949957b26");
                          video.load();
                          video.play();
                          break;
                        case 'Goblins vs Gnomes':
                          $("#cardSet").text("고블린 대 노움");
                          $("#cardSet").css("background-color","#8c0700");
                          $("#cardSet").css("color","#fff6d6");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Goblins%20vs%20Gnomes%20Trailer.mp4?alt=media&amp;token=bc2bc899-0c10-4594-a33b-c928332078d4");
                          video.load();
                          video.play();
                          break;
                        case 'Naxxramas':
                          $("#cardSet").text("낙스라마스의 저주");
                          $("#cardSet").css("background-color","#340851");
                          $("#cardSet").css("color","#dffcc4");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Hearthstone%20Curse%20of%20Naxxramas%20Cinematic%20Trailer.mp4?alt=media&amp;token=a09de934-509d-4c19-9fcd-b9197830fa1d");
                          video.load();
                          video.play();
                          break;
                        case 'Hall of Fame':
                          $("#cardSet").text("명예의 전당");
                          $("#cardSet").css("background-color","#282828");
                          $("#cardSet").css("color","#e5d559");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Hearthstone%20Heroes%20of%20Warcraft%20Cinematic.mp4?alt=media&amp;token=909490b3-517d-4417-99ab-d3ab9caf0d63");
                          video.load();
                          video.play();
                          break;
                        case "Journey to Un'Goro":
                          $("#cardSet").text("운고로를 향한 여정");
                          $("#cardSet").css("background-color","#1f512d");
                          $("#cardSet").css("color","#ffe0aa");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Journey%20to%20Un%E2%80%99Goro%20Cinematic%20Trailer.mp4?alt=media&amp;token=4141c1cd-c7c1-4487-be90-a3a649b96751");
                          video.load();
                          video.play();
                          break;
                        case 'Mean Streets of Gadgetzan':
                          $("#cardSet").text("비열한 거리의 가젯잔");
                          $("#cardSet").css("background-color","#16293d");
                          $("#cardSet").css("color","#fff3d3");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Mean%20Streets%20of%20Gadgetzan%20Cinematic%20Trailer.mp4?alt=media&amp;token=a2c371eb-1224-4375-8112-d1cfc5504e62");
                          video.load();
                          video.play();
                          break;
                        case 'One Night in Karazhan':
                          $("#cardSet").text("한여름 밤의 카라잔");
                          $("#cardSet").css("background-color","#6424a0");
                          $("#cardSet").css("color","#f5d8ff");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/One%20Night%20in%20Karazhan%20Cinematic%20Trailer.mp4?alt=media&amp;token=8d226660-2841-47bc-8ff3-254a73204494");
                          video.load();
                          video.play();
                          break;
                        case 'Whispers of the Old Gods':
                          $("#cardSet").text("고대 신의 속삭임");
                          $("#cardSet").css("background-color","#3b0a54");
                          $("#cardSet").css("color","#ffeedb");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Whispers%20of%20the%20Old%20Gods%20Cinematic%20Trailer.mp4?alt=media&amp;token=fe66e4fd-3903-493c-90fd-cf83a582d79f");
                          video.load();
                          video.play();
                          break;
                        case 'Knights of the Frozen Throne':
                            $("#cardSet").text("얼어붙은 왕좌의 기사들");
                            $("#cardSet").css("background-color","#496eff");
                            $("#cardSet").css("color","#c1f2ff");
                            video.pause();
                            source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Hearthstone%20Knights%20of%20the%20Frozen%20Throne%20Trailer.mp4?alt=media&token=534b8db0-b414-4337-8c8b-8b7ce60e6cad");
                            video.load();
                            video.play();
                            break;
                        case 'Classic':
                          $("#cardSet").text("오리지널");
                          $("#cardSet").css("background-color","#000");
                          $("#cardSet").css("color","#fff");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Hearthstone%20Heroes%20of%20Warcraft%20Cinematic.mp4?alt=media&amp;token=909490b3-517d-4417-99ab-d3ab9caf0d63");
                          video.load();
                          video.play();
                          break;
                        case 'Basic':
                          $("#cardSet").text("베이직");
                          $("#cardSet").css("background-color","#000");
                          $("#cardSet").css("color","#fff");
                          video.pause();
                          source.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/githearth.appspot.com/o/Hearthstone%20Heroes%20of%20Warcraft%20Cinematic.mp4?alt=media&amp;token=909490b3-517d-4417-99ab-d3ab9caf0d63");
                          video.load();
                          video.play();
                          break;
                      }
                      $("#type").css("color","white");
                      switch(data[i]['type']){
                        case 'Minion':
                          $("#type").text("하수인");
                          break;
                        case 'Spell':
                        case 'Enchantment':
                          $("#type").text("주문");
                          break;
                        case 'Hero':
                          $("#type").text("영웅");
                          break;
                        case 'Weapon':
                          $("#type").text("무기");
                          break;
                      }
                      $("#rarity").css("color","white");
                      switch(data[i]['rarity']) {
                          case 'Free':
                            $("#rarity").text("기본 카드")
                          break;
                          case 'Common':
                            $("#rarity").text("일반 카드")
                            break;
                          case 'Rare':
                            $("#rarity").text("희귀 카드")
                            $("#rarity").css("background-color","#2161a5");
                            break;
                          case 'Epic':
                            $("#rarity").text("영웅 카드")
                            $("#rarity").css("background-color","#5e2984");
                            break;
                          case 'Legendary':
                            $("#rarity").text("전설 카드")
                            $("#rarity").css("background-color","#ffad32");
                            break;
                      }
                      
                      if (data[i]['text'] == null) {
                        $("#desc").html(' ');
                      }
                      else {
                        $("#desc").css("color","white");
                          var desc = data[i]['text'];
                          desc = desc.replace(/\\n/g,' ')
                                 .replace('[x]','')
                                 .replace(/_/g,' ')
                                 .replace(/\#/g,'')
                                 .replace(/\$/g,'');
                          $("#desc").html(desc);
                      }       
              }
            }
              
            });
    
          var cardInfoRef = firebase.database().ref('IDtoImg/' + snapshot.val());
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