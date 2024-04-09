function fileFormatter (file, fileData) {
  const lines = fileData.split('\n')
  const testedLines = []

  for (const line of lines) {
    const columns = line.split(',')
    if (columns.length === 4) {
      const [file, text, number, hex] = columns
      const parsedNumber = parseInt(number)
      if (!isNaN(number) && /^[0-9a-fA-F]{32}$/.test(hex)) {
        testedLines.push({ text, number: parsedNumber, hex })
      }
    }
  }

  return {
    file,
    lines: testedLines
  }
}

export default fileFormatter
