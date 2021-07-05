```jsx
import { useState } from 'react';

const [open, setOpen] = useState(false);
const [openedDoor, setOpenedDoor] = useState({});

function openModal(advDay) {
  setOpen(true);
  setOpenedDoor(advDay);
}

const showAdvCal = Data.map((advDay) => (
  <AdvCal key={advDay.day} onClick={() => openModal(advDay)}>
    {advDay.day}
  </AdvCal>
));
```
