angular.module("blogApp")
.filter("arrayToFormattedString", [function () { return new arrayToFormattedString() }])

arrayToFormattedString = function () {

    var self = this;

    self.hasArray = function (inputArray) {
        return angular.isArray(inputArray) && inputArray.length > 0
    }

    self.hasPropertyName = function (propertyName) {
        return !angular.isUndefined(propertyName);
    }

    self.hasSeparator = function (separator) {
        return !angular.isUndefined(separator);
    }

    self.hasValue = function (value) {
        return value !== undefined && value != null;
    }

    return function (array,propertyName,separator) {

        var tempString = "";

        if (!self.hasArray(array) || !self.hasPropertyName(propertyName) || !self.hasSeparator(separator)) {
            return tempString;
        }

        array.forEach(function (each) {          
            if(self.hasValue(each[propertyName])){
                tempString += each[propertyName] + separator;
            }
        });

        return tempString.length > 0 ? tempString.slice(0, tempString.lastIndexOf(separator)) : tempString;
    }
}
