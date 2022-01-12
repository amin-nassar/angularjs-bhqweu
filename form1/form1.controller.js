FormOneController.$inject = ['$scope'];
export default function FormOneController($scope) {
  $scope.title = "Form Number 1";
  $scope.data = [
    {
      id: 'main',
      title: 'Main',
      isVisible: true,
      children: [
        {id: 1, title: 'Home', isVisible: false, children: null},
        {id: 2, title: 'Account', isVisible: true, children: null},
        {id: 3, title: 'Preferences', isVisible: true, children: [
          {id: 31, title: 'Color', isVisible: true, children: null},
          {id: 32, title: 'Font', isVisible: false, children: null},
          {id: 33, title: 'BgColor', isVisible: true, children: [
            {id: 331, title: 'Font1', isVisible: true, children: null},
            {id: 332, title: 'Font2', isVisible: true, children: null},
          ]},
        ]},
        {id: 4, title: 'Logout', isVisible: true, children: null},
      ]
    }, 
    {
      id: 'setting', 
      title: 'Settings',
      isVisible: true,
      children: [
        {id: 1, title: 'Privacy', isVisible: false, children: null},
        {id: 2, title: 'Notification', isVisible: true, children: null},
        {id: 3, title: 'Theme', isVisible: true, children: [
          {id: 31, title: 'Light', isVisible: true, children: null},
          {id: 32, title: 'Default', isVisible: false, children: null},
          {id: 33, title: 'Dark', isVisible: true, children: null},
        ]},
      ]
    }
  ];
}

export default FormOneController;