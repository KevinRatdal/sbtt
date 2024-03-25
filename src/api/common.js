export const fetchData = async () => {
  const res = await fetch('https://v2api.nifs.no/stages/694961/table/')
  return await res.json()
  // return {}
}
