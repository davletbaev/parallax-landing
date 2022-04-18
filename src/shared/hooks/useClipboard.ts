import handlePermission from '../helpers/handlePermission';

const useClipboard = () => {
  const supportsClipboard = !!navigator?.clipboard?.readText;

  const isOS = () => {
    return navigator.userAgent.match(/ipad|iphone/i);
  };

  const copyToClipboardFallback = (text: string) => {
    return new Promise((resolve, reject) => {

      const textArea = document.createElement('textarea');

      textArea.value = text;

      textArea.style.width = '0';
      textArea.style.height = '0';
      textArea.style.overflow = 'hidden';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();

      if (isOS()) {
        const range = document.createRange();
        const selection = window.getSelection();

        range.selectNodeContents(textArea);

        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }

        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }


      try {
        document.execCommand('copy');
        resolve(text);
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(textArea);
      }
    });
  };

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      return copyToClipboardFallback(text);
    }

    return navigator.clipboard.writeText(text)
      .then(
        () => Promise.resolve(text),
        (err) => Promise.reject(err),
      );
  };

  const copy = (text: string) => {
    return handlePermission('clipboard-write' as PermissionName)
      .then(
        () => copyToClipboard(text),
        () => copyToClipboardFallback(text),
      );
  };

  return {
    supportsClipboard,
    copyToClipboard: copy,
  };
};

export default useClipboard;