var list=[
    {type:"ls",title:"0. 네어트어란"},
    {type:"wr", detail:"작문", title:"단문 1 - 유성"},
    {type:"wr", detail:"작문", title:"단문 2 - 크리스마스"},
    {type:"wr", detail:"번역", title:"단문 3 - 달"},
    {type:"wr", detail:"번역", title:"고독 - Ella Wheeler Wilcox"} 
]

function make() {
    var result="<h3><b>강좌</b></h3>";
    list.forEach(function(item) {
        if (item.type==="ls")
            result+='<p style="padding-left:5px;"><a href="'+item.title+'.html">'+item.title+"</a></p>";
         });
    document.getElementById("imsi1").innerHTML=result;
          
    result="<h3><b>도구</b></h3>";
    list.forEach(function(item) {
        if (item.type==="tl")
            result+='<p style="padding-left:5px;"><a href="'+item.title+'.html">'+item.title+"</a></p>";
    });
    document.getElementById("imsi2").innerHTML=result;
          
    result="<h3><b>글</b></h3>";
    list.forEach(function(item) {
        if (item.type==="wr")
            result+='<p style="padding-left:10px;">'+'<div class="badge" style="margin-right:5px;">'+item.detail+'</div><a href="'+item.title+'.html">'+item.title+"</a></p>";
    });
    document.getElementById("imsi3").innerHTML=result;
    }
make();
