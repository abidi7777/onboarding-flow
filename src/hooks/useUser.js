import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function useUser() {
  const [userId] = useState(nanoid());

  return { userId };
}
