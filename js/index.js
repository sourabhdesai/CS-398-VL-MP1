function main() {
    // http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/
    // This code based on: http://bl.ocks.org/mbostock/1153292
    var links = [
    {
      "source": "said",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "said",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "said",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "said",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "said",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "lancelot",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "lancelot",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "lancelot",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "lancelot",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "lancelot",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "would",
      "target": "MD",
      "type": "pos"
    },
    {
      "source": "would",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "would",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "would",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "one",
      "target": "CD",
      "type": "pos"
    },
    {
      "source": "one",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "one",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "one",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "like",
      "target": "VB",
      "type": "pos"
    },
    {
      "source": "like",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "like",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "like",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "like",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "king",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "king",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "king",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "king",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "king",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "sir",
      "target": "JJ",
      "type": "pos"
    },
    {
      "source": "sir",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "sir",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "sir",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "sir",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "could",
      "target": "MD",
      "type": "pos"
    },
    {
      "source": "could",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "could",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "could",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "arthur",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "arthur",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "arthur",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "arthur",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "arthur",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "knight",
      "target": "JJ",
      "type": "pos"
    },
    {
      "source": "knight",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "knight",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "knight",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "knight",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "look",
      "target": "VBP",
      "type": "pos"
    },
    {
      "source": "look",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "look",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "look",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "look",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "man",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "man",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "man",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "man",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "gawain",
      "target": "NN",
      "type": "pos"
    },
    {
      "source": "gawain",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "gawain",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "gawain",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "thing",
      "target": "VBG",
      "type": "pos"
    },
    {
      "source": "thing",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "thing",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "thing",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "thing",
      "target": "Chapter 4",
      "type": "four"
    },
    {
      "source": "time",
      "target": "VB",
      "type": "pos"
    },
    {
      "source": "time",
      "target": "Chapter 1",
      "type": "one"
    },
    {
      "source": "time",
      "target": "Chapter 2",
      "type": "two"
    },
    {
      "source": "time",
      "target": "Chapter 3",
      "type": "three"
    },
    {
      "source": "time",
      "target": "Chapter 4",
      "type": "four"
    }
  ];

    var nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function(link) {
      link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
      link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
    });

    var width = $("#main").width() || 1920,
        height = $("#main").height() || 1000;

    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        .linkDistance(400)
        .charge(-300)
        .on("tick", tick)
        .start();

    var svg = d3.select("#main").append("svg")
        .attr("width", width)
        .attr("height", height);

    // Per-type markers, as they don't inherit styles.
    svg.append("defs").selectAll("marker")
        .data(["suit", "licensing", "resolved"])
      .enter().append("marker")
        .attr("id", function(d) { return d; })
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", -1.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("path")
        .attr("d", "M0,-5L10,0L0,5");

    var path = svg.append("g").selectAll("path")
        .data(force.links())
      .enter().append("path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

    var circle = svg.append("g").selectAll("circle")
        .data(force.nodes())
      .enter().append("circle")
        .attr("r", 6)
        .call(force.drag);

    var text = svg.append("g").selectAll("text")
        .data(force.nodes())
      .enter().append("text")
        .attr("x", 8)
        .attr("y", ".31em")
        .text(function(d) { return d.name; });

    // Use elliptical arc path segments to doubly-encode directionality.
    function tick() {
      path.attr("d", linkArc);
      circle.attr("transform", transform);
      text.attr("transform", transform);
    }

    function linkArc(d) {
      var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }

    function transform(d) {
      return "translate(" + d.x + "," + d.y + ")";
    }

}