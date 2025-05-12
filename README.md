# Дополнительное задание 1

Реализуйте хук useWindowScroll(), который можно будет использовать следующим образом:

```javascript
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
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

Хук useWindowScroll() возвращает кортеж со следующими данными:

-   scroll - объект, содержащий позицию скролла по осям X и Y;
-   scrollTo - функция, выполняющая скролл по нажатию на кнопку к позиции по оси Y (принимается в качестве параметра).

Вспомогательный хук useWindowEvent() принимает тип события, слушатель события и параметры метода addEventListener() (опционально). Скролл страницы и изменение состояния текущей позиции скролла по осям X и Y, реализованные с помощью функции handleScroll(), происходят с помощью хука useEffect(), который управляет добавлением и удалением слушателя события скролла.<br>
Типизированы хук useWindowEvent(), принимаемая функцией scrollTo() позиция скролла по оси Y и принимаемые хуком useWindowEvent() данные.
