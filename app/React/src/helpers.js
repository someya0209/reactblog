//値が配列である場合にkeyを調整する処理を追加
export function createFormData(data) {
  const form = new FormData();

  Object.keys(data).forEach(key => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach(entry => {
        form.append(key + '[]', entry);
      });
    } else {
      form.append(key, value);
    }
  });

  return form;
}
