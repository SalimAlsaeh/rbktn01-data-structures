

// Instantiate a new graph
var Graph = function(value) {
	this.nodes = {};
	this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var newNode = new GraphNode(node);
	this.nodes[node] = newNode;
	console.log(this.nodes)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	var flag = false;
	Object.keys(this.nodes).forEach(function (element) {
		if(parseInt(element) === node) {
			flag = true;
			return;
		}
	})
	return flag;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if(this.nodes[node] !== undefined) {
		var removed = this.nodes[node];
		delete this.nodes[node];
		return removed;
	}
	return;

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var flag = false;
	if (this.nodes[fromNode] !== undefined && this.nodes[toNode] !== undefined) {
		if(this.nodes[fromNode].connectedNodes[toNode] !== undefined) {
			if(this.nodes[fromNode].connectedNodes[toNode].value === this.nodes[toNode].value) {
				flag = true;
			}
		}
		return flag;
	}
	return;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if (this.nodes[fromNode] !== undefined && this.nodes[toNode] !== undefined) {
		var edge = new Edge(this.nodes[fromNode], this.nodes[toNode]);
		this.nodes[fromNode].connectedNodes[toNode] = this.nodes[toNode];
		this.edges.push(edge);
		console.log(this)
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

function GraphNode(value) {
	this.value = value;
	this.connectedNodes = {};
}

function Edge(from, to) {
	this.from = from;
	this.to = to;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


