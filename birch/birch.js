$(document).ready(function() {
    $("#tree-outer").append('<table style="border-collapse: collapse;"><tbody id="tree"></tbody></table>');
    var height = Math.floor(3*Math.random());
    if(height === 0) {
        $("#tree").append('<tr id="layer0"><tr id="layer1"><tr id="layer2"><tr id="layer3"><tr id="layer4"><tr id="layer5"></tr></tr></tr></tr></tr></tr>');
    }
    $("#layer0").append('');
}
        
        
        
        
        
        
        
        
        /*
        var layer0 = 0;
        var layer1 = 0;
        var layer2 = Math.floor(5*Math.random());
        var layer3 = Math.floor(5*Math.random());
        var layer4 = Math.floor(3*Math.random()) + 1;
        var layer5 = 0;
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'x.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'y.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'z.png">');
    }
    if(height === 1) {
        var layer0 = 0;
        var layer1 = 0;
        var layer2 = 0;
        var layer3 = Math.floor(5*Math.random());
        var layer4 = Math.floor(5*Math.random());
        var layer5 = Math.floor(3*Math.random()) + 1;
        var layer6 = 0;
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'x.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'y.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'z.png">');
    }
    if(height === 2) {
        var layer0 = 0;
        var layer1 = 0;
        var layer2 = 0;
        var layer3 = 0;
        var layer4 = Math.floor(5*Math.random());
        var layer5 = Math.floor(5*Math.random());
        var layer6 = Math.floor(3*Math.random()) + 1;
        var layer7 = 0;
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'x.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'y.png">');
        $("#tree").append('<img src="/birch/img/' + layer0 + layer1 + layer2 + layer3 + layer4 + layer5 + layer6 + layer7 + 'z.png">');
    }
});
*/