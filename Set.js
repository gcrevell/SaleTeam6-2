/**
 * Created by Gabe Revells on 10/19/14.
 */

// The element and required methods.

/**
 * Contributors: Gabe Revells
 *
 * Defines the Element class, used in sets
 *
 * @param value - The initial value of the element
 *
 * @constructor
 */
function Element(value) {
    this.value = value;
}

/**
 * Contributors: Gabe Revells
 *
 * Method to get the value of the element.
 *
 * @returns {*} - The value of this element
 */
Element.prototype.getElement = function() {
    return this.value;
};

/**
 * Contributors: Gabe Revells
 *
 * Method to set the value of the element.
 *
 * @param newValue - The new value the element will be set to
 */
Element.prototype.setElement = function(newValue) {
    this.value = newValue;
};

// The set and required methods.

/**
 * Contributors: Gabe Revells
 *
 * The set class. Stores elements as an array.
 *
 * @constructor
 */
function Set() {
    this.set = new Array();
}

/**
 * Contributors: Gabe Revells
 *
 * Function to add an element to the set.
 *
 * @param newElement - The element to be added to the set
 */
Set.prototype.addElement = function(newElement) {
    this.set[this.set.length] = newElement;
};

/**
 * Contributors: Gabe Revells
 *
 * Function to remove an element from the set
 *
 * @param element - An element who's value is identical to the one to be deleted
 *
 * @returns {*} - The removed value
 */
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

/**
 * Contributors: Gabe Revells
 *
 * Method to return the array of elements in the set
 *
 * @returns {Array|*} - The array of elements
 */
Set.prototype.getElements = function() {
    return this.set;
};

/**
 * Contributors: Gabe Revells
 *
 * Method to set the elements of this set to a new set
 *
 * @param newSet - The new set of elements
 */
Set.prototype.setElements = function(newSet) {
    this.set = newSet;
};

/**
 * Contributors: Gabe Revells
 *
 * Method to return the size of the current set
 *
 * @returns {Number} - The size of the set.
 */
Set.prototype.size = function() {
    return this.set.length;
};

/**
 * Contributors: Gabe Revells
 *
 * Mehtod to clone the current set into a new set and return that
 *
 * @returns {Set} - The new set.
 */
Set.prototype.clone = function() {
    var returnSet = new Set();

    this.set.forEach(function(entry) {
        returnSet.addElement(entry);
    });

    return returnSet;
};

/* Contributors: Joseph Pietrzyk
 * parameter operand1: a boolean value
 * parameter operand2: a boolean value
 * returns: the and of the two booleans
 */
function logicalAnd(operand1, operand2) {
    return operand1 && operand2;
};