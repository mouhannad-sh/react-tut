var targets  = document.querySelectorAll('pre:not(.cke_widget_element)')
var targetsText = [];
for (var i = 0; i < targets.length; i++) {
    console.log(targets[i].innerHTML)
    var str1 = targets[i].innerHTML.replace(/&lt;/g,'<');
    var str2 = str1.replace(/&gt;/g,'>');
    targetsText.push(str2)
}
console.log(targetsText.join('\n'))


function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}
var OpenTag = '&lt;'
var CloseTag = '&lt;'
var replacewithObj = { OpenTag:'<', CloseTag: '>' }
console.log(replaceAll(targetsText[2],replacewithObj))