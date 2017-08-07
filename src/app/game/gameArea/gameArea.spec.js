var angular = require('angular');

require('angular-mocks');
var gameArea = require('./gameArea');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('gameArea', ['app/gameArea/gameArea.html'])
      .component('gameArea', gameArea);
    angular.mock.module('gameArea');
  });

  it('should render \'Allo, \'Allo!', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    var title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
