```jsx
import { useState } from 'react';

const [user, setUser] = useState([
  {
    name: 'Tester',
    vorname: 'Terry',
    email: 'terry@tester.com',
    datum: '2021-06-21',
  },
]);

function updateUser(event) {
  const fieldName = event.target.name;
  let fieldValue = event.target.value;

  setUser({ ...user, [fieldName]: fieldValue });
}
<EmailSubmitAfterQuiz user={user} onClick={console.log('Send')} />;
```
