
var span = function(x, columns, gutter, container){
  var columnWidth = container / (columns + gutter * (columns-1)) 
  var gutterWidth = columnWidth * gutter
  
  return columnWidth * x + gutterWidth * (x-1)
}

var spans = function(columns, gutter, container){
  var result = []
  for(var i = 0 ; i < columns; i++){
    result.push(span((i+1), columns, gutter, container))
  }
  return result
}

var want = 300
var gut = 10
var gosa = 0.05
var start = 800
var end = 1200
for(var c=start; c < end ; c++){
  for(var g=0; g < gut; g++){
    var container = c
    var gutter = g/gut
    if(gutter > 0.5) continue
    var result = spans(12, gutter, container)
    result.forEach(function(r){
      if(want - gosa < r && r < want + gosa ){
        console.log("THIS!")
        console.log(container, gutter, gutter * result[0])
        console.log(result)
      }
    })
  }
}
