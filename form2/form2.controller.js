FormTwoController.$inject = ['$scope'];
export default function FormTwoController($scope) {
  $scope.title = "Form Number 2";
  $scope.data = [
    {
      id: 'movies', 
      title: 'Movies',
      isVisible: true,
      children: [
        {id: 1, title: 'Action', isVisible: false, children: null},
        {id: 2, title: 'Comedy', isVisible: true, children: null},
        {id: 3, title: 'Sci-Fi', isVisible: true, children: [
          {id: 31, title: 'Inception', isVisible: true, children: null},
          {id: 32, title: 'Life', isVisible: false, children: null},
          {id: 33, title: 'Interstellar', isVisible: true, children: null},
        ]},
      ]
    },
    {
      id: 'series',
      title: 'Series',
      isVisible: true,
      children: [
        {id: 1, title: 'Action', isVisible: false, children: null},
        {id: 2, title: 'Comedy', isVisible: true, children: null},
        {id: 3, title: 'Super Hero', isVisible: true, children: [
          {id: 31, title: 'Iron Fist', isVisible: true, children: null},
          {id: 32, title: 'Arrow', isVisible: false, children: null},
          {id: 33, title: 'Dare Devil', isVisible: true, children: [
            {id: 331, title: 'Season 1', isVisible: true, children: null},
            {id: 332, title: 'Season 2', isVisible: true, children: null},
          ]},
        ]},
        {id: 4, title: 'Crime', isVisible: true, children: null},
      ]
    },
    {
      id: 'songs',
      title: 'Songs',
      isVisible: true,
      children: [
        {id: 1, title: 'Rock', isVisible: false, children: null},
        {id: 2, title: 'Jazz', isVisible: true, children: null},
        {id: 3, title: 'Rap', isVisible: true, children: [
          {id: 31, title: 'Eminem', isVisible: true, children: null},
          {id: 32, title: 'MGK', isVisible: true, children: null},
          {id: 33, title: '50 Cent', isVisible: true, children: null},
          {id: 34, title: 'XXXTentacion', isVisible: false, children: null},
        ]},
        {id: 4, title: 'Crime', isVisible: true, children: null},
      ]
    }
  ];
}

export default FormTwoController;