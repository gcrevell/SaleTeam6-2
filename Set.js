/**
 * Created by Wowza on 10/19/14.
 */

/*
 The element and required methods.
 */
function Element(value) {
    this.value = value;
}

Element.prototype.getElement = function() {
    return eValue;
};

Element.prototype.setElement = function(newValue) {
    this.value = newValue;
};

/*
 The set and required methods.
 */
function Set() {
    this.set = new Array();
}

Set.prototype.addElement = function(newElement) {
    this.set[this.set.length] = newElement;
};

Set.prototype.removeElement = function(element) {
    for (var i = 0; i < this.set.length; i++) {
        if (this.set[i].value == element.value) {
            var temp = this.set[this.set.length - 1];
            this.set[this.set.length - 1] = this.set[i];
            this.set[i] = temp;
            this.set.pop();
            return temp;
        }
    }
};

Set.prototype.getElements = function() {
    return this.set;
};

Set.prototype.setElements = function(newSet) {
    this.set = newSet;
};

Set.prototype.size = function() {
    return this.set.size();
};

Set.prototype.clone = function() {
    var returnSet = new Set();

    this.set.forEach(function(entry) {
        returnSet.addElement(entry);
    });
};

/* Contributors: Joseph Pietrzyk
 * parameter operand1: a boolean value
 * parameter operand2: a boolean value
 * returns: the and of the two booleans
 */
function logicalAnd(operand1, operand2) {
    return operand1 && operand2;
};