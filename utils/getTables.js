const GetTabla = (num = 0) => {
  parseInt(num, 10);
  const limit = 10;
  let template = '';
  for (let i = 1; i <= limit; i += 1) {
    template += `${num} X ${i} = ${i * num} \n`;
  }
  return template;
};

module.exports = GetTabla;
