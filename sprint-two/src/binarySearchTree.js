var BinarySearchTree = function(value) {
	var binarySearchTreeNode = {}

	binarySearchTreeNode.value = value;
	binarySearchTreeNode.left = null;
	binarySearchTreeNode.right = null;
	_.extend(binarySearchTreeNode, BinarySearchTreeMethods);

	return binarySearchTreeNode;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
	var valueInsertion = function(node) {
		console.log('before')
		console.log(node)
		node.left = node.left || BinarySearchTree(null);
		node.right = node.right || BinarySearchTree(null);
		
		console.log('after')
		console.log(node)
		if (value < node.value ) {
			if (node.left.value === null) {
				node.left.value = value;
				valueInsertion(node.left);

			}else {
				valueInsertion(node.left);
			}
		}else if (value > node.value) {
			if (node.right.value === null) {
				node.right.value = value;
				valueInsertion(node.right);

			}else {
				valueInsertion(node.right);
			}
		}
	}
	valueInsertion(this);
}

BinarySearchTreeMethods.contains = function(value) {
	var flag = false;
	var valueDetection = function(node) {
		console.log(node)
		if (node.value === null) {
			return;
		}
		if (node.value === value) {
			flag = true;
			return;
		}
		if (value < node.value) {
			valueDetection(node.left);
		} else {
			valueDetection(node.right);
		}

	}
	valueDetection(this);
	return flag;
}

BinarySearchTreeMethods.depthFirstLog = function(callback) {
	var travese = function(node) {
		callback(node.value);
		if(node.left.value !== null) {
			travese(node.left);
		}
		if(node.right.value !== null) {
			travese(node.right);
		}
		return;
	}
	travese(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
