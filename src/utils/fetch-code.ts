const fetchCode = async (filename: string): Promise<string> => {
  const response = await fetch(`/code/${filename}.txt`);
  const text = await response.text();
  return text;
};

export default fetchCode;