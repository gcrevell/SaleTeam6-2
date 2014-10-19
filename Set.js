/**
 * Created by Wowza on 10/19/14.
 */

function Element(value) {
    this.value = value;
}

Element.prototype.getElement = function() {
    return eValue;
}

Element.prototype.setElement = function(newValue) {
    this.value = newValue;
}

function Set() {
    this.set = new Array();
}

Set.prototype.addElement = function(newElement) {
    this.set[this.set.length] = newElement;
}

set.prototype.removeElement = function(element) {
    for (var i = 0; i < this.set.length; i++) {
        if (this.set[i].value == element.value) {
            var temp = this.set[this.set.length - 1];
            this.set[this.set.length - 1] = this.set[i];
            this.set[i] = temp;
            this.set.pop();
            return temp;
        }
    }
}

set.prototype.getElements = function() {
    return this.set;
}

set.prototype.setElements = function(newSet) {
    this.set = newSet;
}

set.prototype.size = function() {
    return this.set.size();
}

set.prototype.clone = function() {
    var returnSet = new Set();

    this.set.forEach(function(entry) {
        returnSet.addElement(entry);
    });
}

var myElement = new Element(5);