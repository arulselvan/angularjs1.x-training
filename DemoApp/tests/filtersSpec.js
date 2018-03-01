fdescribe('Filters Test', function () {
    'use strict';
    var $filter;

    beforeEach(function () {
        module('blogApp');
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should convert array to string', function () {
        // Arrange.
        var arrayList = [{ name: "Arul" }, { name: "David" }]
        // Act.
        var result = $filter('arrayToFormattedString')(arrayList, 'name', ',');
        console.log(result);
        // Assert.
        expect(result).toEqual('Arul,David');
    });
});
