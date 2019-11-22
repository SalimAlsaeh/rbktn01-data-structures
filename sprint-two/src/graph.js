

// Instantiate a new graph
var Graph = function(value) {
	this.nodes = {};
	this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var newNode = new GraphNode(node);
	this.nodes[node] = newNode;
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
	var graph = this
	if(this.nodes[node] !== undefined) {
		var connectedNodesValues = Object.keys(this.nodes[node].connectedNodes);
		connectedNodesValues.forEach(function(element) {
			graph.removeEdge(node, element)
		})
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
			if(this.nodes[fromNode].connectedNodes[toNode].value === this.nodes[toNode].value
				&& this.nodes[toNode].connectedNodes[fromNode].value === this.nodes[fromNode].value) {
				flag = true;
			}
		}
		// return flag;
	}
	return flag;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if (this.nodes[fromNode] !== undefined && this.nodes[toNode] !== undefined) {
		var edge = new Edge(this.nodes[fromNode], this.nodes[toNode]);
		this.nodes[fromNode].connectedNodes[toNode] = this.nodes[toNode];
		this.nodes[toNode].connectedNodes[fromNode] = this.nodes[fromNode];
	    this.edges[fromNode + '-' + toNode] = edge;
	    this.edges[toNode + '-' + fromNode] = edge;
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.hasEdge(fromNode, toNode)) {
		delete this.nodes[fromNode].connectedNodes[toNode];
		delete this.nodes[toNode].connectedNodes[fromNode];
		delete this.edges[fromNode + '-' + toNode];
		delete this.edges[toNode + '-' + fromNode];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var graph = this;
	Object.values(graph.nodes).forEach(function(key) {
		cb(key.value);
	});
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


