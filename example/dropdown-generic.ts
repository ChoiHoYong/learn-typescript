interface Email<T>{
  value: T;
  selected: boolean;
}

const emails: Email<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber{
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: Email<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: Email<T>) {
  const option = document.createElement('option');
  if(item.value){
    option.value = item.value.toString();
    option.innerText = item.value.toString();
  }
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

