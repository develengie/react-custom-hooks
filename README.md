# Задание 4

Реализуйте хук useViewportSize(), который можно будет использовать следующим образом:

```javascript
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
```

Для реализации был использован вспомогательный хук useWindowEvent(), чтобы добавить слушатели событий на window:

```javascript
import { useEffect } from 'react';

export function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
```

Хук useViewportSize() возвращает высоту и ширину видимой пользователю области страницы.<br>
Вспомогательный хук useWindowEvent() принимает тип события, слушатель события и параметры метода addEventListener() (опционально). Расчет высоты и ширины видимой пользователю области страницы происходит с помощью хука useEffect(), который управляет добавлением и удалением слушателя события ресайза.<br>
Типизированы возвращаемые хуком useViewportSize() и принимаемые хуком useWindowEvent() данные.
