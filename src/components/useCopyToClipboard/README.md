# useCopyToClipboard

### - value
- 복사하였을 때 복사한 대상을 보관할 값

### - copy
- window의 navigator 를 이용해서 값을 클립보드에 복사한다.

### 사용 후기

사실 state로 기능을 구현해도 쉽게 할 수 있다.
여기서 응용이 들어가면 더 복잡하게 구현 해야하지만
useCopyToClipboard 를 사용하면 간단하게 구현 할 수 있다.

-- node module code
```jsx
import { useState } from 'react';

function useCopyToClipboard() {
    const [copiedText, setCopiedText] = useState(null);
    const copy = (text) => __awaiter(this, void 0, void 0, function* () {
        if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
            console.warn('Clipboard not supported');
            return false;
        }
        try {
            yield navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        }
        catch (error) {
            console.warn('Copy failed', error);
            setCopiedText(null);
            return false;
        }
    });
    return [copiedText, copy];
}
export default useCopyToClipboard;
```