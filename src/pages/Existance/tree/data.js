const itemsDriveD = [
  {
    "id": "5aad489d-b600-4a8c-910a-5651908084b2",
    "name": "خودرو",
    "parentId": 0
  },
  {
    "id": "661d8246-e2f7-444d-b265-53344d1cae5b",
    "name": "خوراکی",
    "parentId": "5aad489d-b600-4a8c-910a-5651908084b2"
  }
];
const itemsDriveC = [{
  id: '1',
  name: 'Documents1111111111111',
  icon: 'activefolder',
  isDirectory: true,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'Projects111111111111111111111111111111',
  icon: 'activefolder',
  isDirectory: true,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: 'About.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '4',
  parentId: '2',
  name: 'Passwords.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '5',
  parentId: '2',
  name: 'About.xml',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '6',
  parentId: '2',
  name: 'Managers.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '7',
  parentId: '2',
  name: 'ToDo.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '8',
  name: 'Images111111111111111111111111111111',
  icon: 'activefolder',
  isDirectory: true,
  expanded: true,
}, {
  id: '9',
  parentId: '8',
  name: 'logo.png',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '10',
  parentId: '8',
  name: 'banner.gif',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '11',
  name: 'System111111111111111111111111111111',
  icon: 'activefolder',
  isDirectory: true,
  expanded: true,
}, {
  id: '12',
  parentId: '11',
  name: 'Employees.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '13',
  parentId: '11',
  name: 'PasswordList.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '14',
  name: 'Description.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '15',
  name: 'Description.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}];

export default {
  getItemsDriveC() {
    return itemsDriveC;
  },
  getItemsDriveD() {
    return itemsDriveD;
  },
};
