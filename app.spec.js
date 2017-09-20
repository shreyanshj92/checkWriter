describe('Test Controller', function() {
    beforeEach(angular.mock.module('myApp'));
	var $controller, $scope, controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
    
    beforeEach(function() {
      $scope = {};
      controller = $controller('myCtrl', { $scope: $scope });
    });

    it('should return One Hundred and Twenty Three if the input number is 123', function() {
      $scope.inputNumber = '123';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual(' One Hundred and Twenty Three');
    });

    it('should return Sixty Five Thousand Eight Hundred and Seventy Four if the input number is 65874', function() {
      $scope.inputNumber = '65874';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual(' Sixty Five Thousand Eight Hundred and Seventy Four');
    });
	
	it('should return One Thousand Two Hundred and Thirty Four and 56/100 if the input number is 1234.56', function() {
      $scope.inputNumber = '1234.56';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual(' One Thousand Two Hundred and Thirty Four and 56/100');
    });
	
	it('should return Eighty Nine Thousand Five Hundred and Thirty Four and 99/100 if the input number is 89534.99', function() {
      $scope.inputNumber = '89534.99';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual(' Eighty Nine Thousand Five Hundred and Thirty Four and 99/100');
    });
	
	it('should return '' and 99/100 if the input number is -22', function() {
      $scope.inputNumber = '-22';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual('');
    });
	
	it('should return '' if the input number is 9999999999', function() {
      $scope.inputNumber = '9999999999';
      $scope.output = $scope.converter();
      expect($scope.output).toEqual('');
    });
});