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

/**
 * Created by gtpatter on 10/19/14.
 */

/**
 * @contributors: Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalAnd(operand1, operand2){
    return operand1 && operand2;
}

/**
 * @contributors: Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalOr(operand1, operand2){
    return (operand1 || operand2);
}

/**
 * @contributors: Garret Patterson
 * @param operand1
 * @returns {boolean}
 */
function logicalNot(operand1){
    return !(operand1);
}

/**
 * @contributors: Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalNand(operand1, operand2){
    return !(operand1 && operand2);
}

/**
 * @contributors: Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalXor(operand1, operand2){
    return(!(operand1 && operand2) && (operand1 || operand2));
}

/**
 * @contributors Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {*|boolean}
 */
function logicalIf(operand1, operand2){
    return ((operand1 && operand2) || !(operand1 && operand2));
}

/**
 * @contributors Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalIif(operand1, operand2){
    return (!(!(operand1 && operand2) && (operand1 || operand2)) || (operand1 && operand2));
}

/**
 * @contributors Garret Patterson
 * @param operand1
 * @param operand2
 * @returns {boolean}
 */
function logicalNor(operand1, operand2){
    return (!(operand1 || operand2));
}
