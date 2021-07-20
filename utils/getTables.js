const GetTabla = (num = 0) => {
  num = parseInt(num);
  const limit = 10;
  let template = "";
  for (let i = 1; i <= limit; i++) {
    template += `${num} x ${i} = ${i * num} \n`;
  }
  return template;
}

module.exports = GetTabla