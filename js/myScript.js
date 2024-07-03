var d;

d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv",
d3.autoType).then(function(data){
    d = data;
    console.log(d);

    //Xi = d.map(function(d) { return d.Xi; });
    //Xf = d.map(function(d) { return d.Xf; });
    //Yi = d.map(function(d) { return d.Yi; });
    //Yf = d.map(function(d) { return d.Yf; });
    //color = d.map(function(d) { return d.color; });

    var circles_0 = d3.select('svg')
    .selectAll("circle")
    .data(d);

    circles_0.join("circle")
    .attr("cx", function(d){return d.Xi;})
    .attr("cy", function(d){return d.Yi;})
    .attr("fill",function(d){return d.color;})
    .attr("r", 10);

    d3.selectAll("circle")
    .transition().duration(500).attr("cx", function(d){return d.Xf;})
    .attr("cy", function(d){return d.Yf;})
    .attr("fill",function(d){return d.color;})
    .attr("r", 10);

    d3.selectAll("circle").on("mouseover", doSomething);

    function doSomething(){        
        return d3.select(this).transition().attr("r", 30)
        .transition().duration(500).attr("r", 10);
    }

    });

d3.text("plotly_plots/dots_div.html")
    .then(function(divText){
        $("#d_plot").html(divText);
    })
    .catch(function(error){
        $("#d_plot").html("<p style='color:red;'>The plot cannot be found.</p>");
    });

    
d3.text("plotly_plots/dots_px.html").then(function(t){
        $('#d_px').html(t);
    })
    .catch(function(error){
        $('#d_px').html("<p style='color:red;'>The plot cannot be found.</p>");
    });
    
d3.text("plotly_plots/choropleth_px.html").then(function(divText){
        $('#choropleth_px').html(divText);
    })
    .catch(function(error){
        $('#choropleth_px').html("<p style='color:red;'>The plot cannot be found.</p>");
    });

d3.text("plotly_plots/box_px.html")
    .then(function(divText){
        $('#box_px').html(divText);
    })
    .catch(function(error){
        $('#box_px').html("<p style='color:red;'>The plot cannot be found.</p>");
    });
    
    
