# Задание 2

Реализуйте хук useLocalStorage(), который можно будет использовать следующим образом:

```javascript
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
```

Кроме того, необходимо добавить типизацию хука:

```javascript
type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];
```

Хук useLocalStorage() принимает ключ key, по которому в LocalStorage происходят запись и удаление и возвращает кортеж со следующими данными:

-   value - записываемое в LocalStorage значение;
-   объект, содержащий функции setItem() и removeItem().

Функции setItem() и removeItem() при работе с LocalStorage позволяют по ключу key записывать данные, принимая нужные значения, и удалять их.<br>
При типизации учитывается, что в LocalStorage значения всегда хранятся в виде строк. В случае, если значение по ключу key не найдено, то вернется null.
